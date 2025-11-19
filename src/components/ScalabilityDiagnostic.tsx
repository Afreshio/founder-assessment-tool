import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import EmailCapture from './EmailCapture';
import { generatePDF } from '../utils/pdfGenerator';

const QUESTIONS = [
  {
    text: "Do you know why engineering work takes the time it takes?",
    answerOptions: [
      "We usually realize things are late only after dates are missed.",
      "Some teams can explain delays; others are mostly guessing.",
      "We often know the reasons, but they're more narrative than data-driven.",
      "For most teams, delays trace back to clear, documented inputs.",
      "Our timelines are predictable because we can see the underlying constraints and signals.",
    ],
  },
  {
    text: "Can you trust your engineering metrics to reflect reality?",
    answerOptions: [
      "We have little to no real metrics and mostly rely on anecdotes or gut feel.",
      "A few teams track metrics, but overall the data is patchy or unreliable.",
      "We track some key metrics, but they're not consistently trusted or used.",
      "Core health and delivery metrics are trusted and inform our regular decisions.",
      "Metrics give us a shared, real-time view of operational reality across engineering.",
    ],
  },
  {
    text: "Is your architecture actually designed for the next 10× of growth?",
    answerOptions: [
      "Our architecture mostly emerged organically and we're unsure where it will break.",
      "Some parts will scale, but we already know there are serious bottlenecks.",
      "We understand our constraints, but significant refactors are still ahead of us.",
      "We have a clear plan and are steadily paying down the main scale blockers.",
      "We're confident we can handle 10× more load without a core rebuild or heroics.",
    ],
  },
  {
    text: "Does every team know what \"good\" looks like — and who owns what?",
    answerOptions: [
      "Ownership is fuzzy and work often bounces between teams.",
      "Some domains are clear, but others are overlapping, political, or constantly renegotiated.",
      "Team charters are defined, but they're not consistently followed in practice.",
      "Most teams are separable with clear ownership and well-understood definitions of 'good'.",
      "Ownership, interfaces, and success criteria are crisp and hold up even as we scale.",
    ],
  },
  {
    text: "Does your hiring process raise the bar — or just fill seats?",
    answerOptions: [
      "We hire reactively and the process varies a lot by hiring manager.",
      "Some hires clearly raise the bar, but others obviously do not.",
      "We run a structured process, but the quality and consistency of signal is mixed.",
      "We hire against clear bars and regularly calibrate across interviewers and teams.",
      "Hiring reliably increases talent density as we grow; weak hires are rare exceptions.",
    ],
  },
  {
    text: "Do you have mechanisms (not good intentions) for quality, reliability, and operational excellence?",
    answerOptions: [
      "Reviews, standards, and rituals happen only when someone pushes or after something breaks.",
      "We have some mechanisms, but they're optional and vary a lot by team.",
      "We've defined ORRs, reviews, and standards, but they're unevenly followed.",
      "Quality and reliability mechanisms run on a regular cadence and drive real changes.",
      "These mechanisms are embedded, increasingly automated, and improve as we scale.",
    ],
  },
  {
    text: "Are outages, failures, and incidents learning opportunities — or recurring events?",
    answerOptions: [
      "Incidents frequently repeat and structured postmortems are rare or shallow.",
      "Some incidents lead to learning, but many quietly recur without real change.",
      "We run reviews, but follow-through on actions is inconsistent.",
      "Most incidents lead to clear fixes and updates to process or design.",
      "We consistently learn from failures and repeated incidents are the exception.",
    ],
  },
  {
    text: "Are teams delivering on committed outcomes, or delivering explanations?",
    answerOptions: [
      "Commitments are loose; misses are common and typically accompanied by explanations.",
      "Some teams reliably hit dates, while others regularly slip.",
      "We track commitments, but accountability for misses is uneven.",
      "Most teams deliver what they commit to or renegotiate early with clear reasoning.",
      "Outcome ownership is strong; misses are rare and deeply examined when they occur.",
    ],
  },
  {
    text: "Do your managers coach, raise performance, and eliminate blockers — or simply forward status?",
    answerOptions: [
      "Managers mostly attend meetings and pass along status updates.",
      "Some reports get coaching and support; others are largely left alone.",
      "We've set expectations for managers, but they're not consistently enforced.",
      "Managers regularly coach, provide feedback, and actively remove blockers.",
      "Managers are true force multipliers who raise the bar and build strong teams.",
    ],
  },
  {
    text: "Can you personally see across the entire execution engine without heroics or escalation?",
    answerOptions: [
      "I depend on one-off pings, special decks, or side channels to know what's going on.",
      "Some areas are easy to see; others are opaque unless I dig.",
      "We have dashboards, but I still chase context and reconcile conflicting stories.",
      "Most of the execution picture is visible without extra effort or escalation.",
      "I can see the whole execution engine in near real time without heroics.",
    ],
  },
  {
    text: "Are you one serious incident, one key hire departure, or one customer escalation away from chaos?",
    answerOptions: [
      "Single points of failure are everywhere and a major shock would create chaos.",
      "Some functions are resilient, but others depend heavily on a few key people.",
      "We understand where we're fragile, but we haven't closed all the gaps.",
      "Key roles and systems have coverage, documentation, and clear playbooks.",
      "We can absorb major shocks with limited disruption and relatively fast recovery.",
    ],
  },
  {
    text: "If you 2× your team size today, would your velocity increase, stay flat, or drop?",
    answerOptions: [
      "Doubling headcount would slow us down significantly.",
      "Some teams could absorb it, but others would gridlock or thrash.",
      "We'd probably see modest gains, but with a lot of friction and coordination cost.",
      "We'd get clear velocity gains, with some manageable friction.",
      "Our structure and architecture mean more people would predictably increase throughput.",
    ],
  },
];

// Keep ANSWER_LABELS for results display (maturity scale)
const ANSWER_LABELS = {
  1: "Ad hoc",
  2: "Inconsistent",
  3: "Defined",
  4: "Systematic",
  5: "Scalable",
};

const CATEGORIES = {
  fragile: {
    range: [12, 30],
    label: "Fragile System",
    description: "You're scaling on hope, not mechanisms. Failure modes will compound as you grow.",
  },
  partiallyScalable: {
    range: [31, 42],
    label: "Partially Scalable",
    description: "Some scaffolding exists, but you're exposed. Growth will surface nonlinear issues.",
  },
  scalableWithGaps: {
    range: [43, 55],
    label: "Scalable with Gaps",
    description: "Strong fundamentals, but missing mechanisms in a few critical areas.",
  },
  scaleReady: {
    range: [56, 60],
    label: "Scale-Ready",
    description: "Your architecture, mechanisms, talent density, and management can handle the next 10×.",
  },
};

// Helper functions for maturity calculations
const getTotalScore = (answers: (number | null)[]): number => {
  return answers.reduce((sum: number, a) => sum + (a || 0), 0);
};

const getAverageMaturity = (answers: (number | null)[]): number => {
  const totalScore = getTotalScore(answers);
  return totalScore / 12;
};

const getMaturityLabel = (avgLevel: number): string => {
  if (avgLevel >= 4.3) return "Mostly Scalable";
  if (avgLevel >= 3.3) return "Mostly Systematic";
  if (avgLevel >= 2.5) return "Mostly Defined";
  if (avgLevel >= 1.7) return "Mostly Inconsistent";
  return "Mostly Ad hoc";
};

const getCategory = (score: number): keyof typeof CATEGORIES => {
  if (score >= 56) return 'scaleReady';
  if (score >= 43) return 'scalableWithGaps';
  if (score >= 31) return 'partiallyScalable';
  return 'fragile';
};

// Helper functions for dimension calculations
const getDimensionScores = (answers: (number | null)[]) => {
  // Architecture and Scale: Q3, Q11, Q12 (indices 2, 10, 11)
  const architectureScale = [
    answers[2], answers[10], answers[11]
  ].filter(a => a !== null) as number[];
  const architectureScaleAvg = architectureScale.length > 0
    ? architectureScale.reduce((sum, a) => sum + a, 0) / architectureScale.length
    : 1;

  // Execution Visibility and Metrics: Q1, Q2, Q10 (indices 0, 1, 9)
  const executionVisibility = [
    answers[0], answers[1], answers[9]
  ].filter(a => a !== null) as number[];
  const executionVisibilityAvg = executionVisibility.length > 0
    ? executionVisibility.reduce((sum, a) => sum + a, 0) / executionVisibility.length
    : 1;

  // Quality, Reliability, and Learning: Q6, Q7 (indices 5, 6)
  const qualityReliability = [
    answers[5], answers[6]
  ].filter(a => a !== null) as number[];
  const qualityReliabilityAvg = qualityReliability.length > 0
    ? qualityReliability.reduce((sum, a) => sum + a, 0) / qualityReliability.length
    : 1;

  // Ownership, Accountability, and Outcomes: Q4, Q8 (indices 3, 7)
  const ownershipOutcomes = [
    answers[3], answers[7]
  ].filter(a => a !== null) as number[];
  const ownershipOutcomesAvg = ownershipOutcomes.length > 0
    ? ownershipOutcomes.reduce((sum, a) => sum + a, 0) / ownershipOutcomes.length
    : 1;

  // Talent and Management: Q5, Q9 (indices 4, 8)
  const talentManagement = [
    answers[4], answers[8]
  ].filter(a => a !== null) as number[];
  const talentManagementAvg = talentManagement.length > 0
    ? talentManagement.reduce((sum, a) => sum + a, 0) / talentManagement.length
    : 1;

  return {
    architectureScale: architectureScaleAvg,
    executionVisibility: executionVisibilityAvg,
    qualityReliability: qualityReliabilityAvg,
    ownershipOutcomes: ownershipOutcomesAvg,
    talentManagement: talentManagementAvg,
  };
};

const getInsightTags = (answers: (number | null)[]): string[] => {
  const tags: string[] = [];
  
  // Q1 or Q2 ≤ 2
  if ((answers[0] !== null && answers[0] <= 2) || (answers[1] !== null && answers[1] <= 2)) {
    tags.push("Low visibility into execution reality.");
  }
  
  // Q3 ≤ 3
  if (answers[2] !== null && answers[2] <= 3) {
    tags.push("Architecture not ready for next order of magnitude.");
  }
  
  // Q4, Q8, Q9 ≤ 3
  if (
    (answers[3] !== null && answers[3] <= 3) ||
    (answers[7] !== null && answers[7] <= 3) ||
    (answers[8] !== null && answers[8] <= 3)
  ) {
    tags.push("Team structure and management limiting velocity.");
  }
  
  // Q6 or Q7 ≤ 3
  if (
    (answers[5] !== null && answers[5] <= 3) ||
    (answers[6] !== null && answers[6] <= 3)
  ) {
    tags.push("Missing mechanisms for quality and reliability.");
  }
  
  // Q11 ≤ 2
  if (answers[10] !== null && answers[10] <= 2) {
    tags.push("High fragility to shocks and key departures.");
  }
  
  // Q12 ≤ 2
  if (answers[11] !== null && answers[11] <= 2) {
    tags.push("Adding people will slow you down, not speed you up.");
  }
  
  return tags;
};

// Gradient color interpolation helpers
const gradientStops = [
  { stop: 0.0, color: "#FEE2E2" }, // soft red
  { stop: 0.33, color: "#FEF3C7" }, // amber
  { stop: 0.66, color: "#DCFCE7" }, // green-yellow
  { stop: 1.0, color: "#BBF7D0" }, // pastel green
];

// Convert hex to RGB
function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : { r: 0, g: 0, b: 0 };
}

// Interpolate between two colors
function interpolateColor(color1: string, color2: string, t: number): string {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);
  const r = Math.round(rgb1.r + (rgb2.r - rgb1.r) * t);
  const g = Math.round(rgb1.g + (rgb2.g - rgb1.g) * t);
  const b = Math.round(rgb1.b + (rgb2.b - rgb1.b) * t);
  return `rgb(${r}, ${g}, ${b})`;
}

// Get gradient color at a specific position (0-1)
function getGradientColorAt(position: number): string {
  const clampedPosition = Math.max(0, Math.min(1, position));
  
  // Find the two stops that bracket this position
  for (let i = 0; i < gradientStops.length - 1; i++) {
    const stop1 = gradientStops[i];
    const stop2 = gradientStops[i + 1];
    
    if (clampedPosition >= stop1.stop && clampedPosition <= stop2.stop) {
      // Calculate local t value
      const localT =
        (clampedPosition - stop1.stop) / (stop2.stop - stop1.stop);
      return interpolateColor(stop1.color, stop2.color, localT);
    }
  }
  
  // Fallback to last color
  return gradientStops[gradientStops.length - 1].color;
}

const AnimatedScore: React.FC<{ score: number }> = ({ score }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let startTime: number;
    const duration = 1000; // 1 second
    const startValue = 0;
    const endValue = score;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Ease out function
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.round(startValue + (endValue - startValue) * easeOut);
      
      setDisplayValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [score]);

  return (
    <span
      style={{
        fontSize: '64px',
        fontWeight: 700,
        color: '#2A66FF',
        marginBottom: '8px',
        lineHeight: '1',
        display: 'block',
      }}
    >
      {displayValue}
    </span>
  );
};

export default function ScalabilityDiagnostic() {
  const [currentStep, setCurrentStep] = useState(0); // 0 = intro, 1-12 = questions, 13 = email capture, 14 = results
  const [answers, setAnswers] = useState<(number | null)[]>(Array(12).fill(null));
  const [userEmail, setUserEmail] = useState<string>('');
  const [pdfBlob, setPdfBlob] = useState<Blob | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  const handleAnswer = (value: number) => {
    const newAnswers = [...answers];
    newAnswers[currentStep - 1] = value;
    setAnswers(newAnswers);
    
    // Auto-advance to next question after a short delay to allow selection visual feedback
    setTimeout(() => {
      if (currentStep === 12) {
        // If on last question, go to email capture
        setCurrentStep(13);
      } else if (currentStep >= 1 && currentStep < 12) {
        // Otherwise, go to next question
        setCurrentStep(currentStep + 1);
      }
    }, 300);
  };

  const handleNext = () => {
    if (currentStep === 0) {
      setCurrentStep(1);
    } else if (currentStep >= 1 && currentStep <= 12) {
      if (currentStep === 12) {
        setCurrentStep(13); // Go to email capture
      } else {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      if (currentStep === 13) {
        // If on email capture, go back to question 12
        setCurrentStep(12);
      } else if (currentStep === 14) {
        // If on results, go back to email capture
        setCurrentStep(13);
      } else {
        setCurrentStep(currentStep - 1);
      }
    }
  };

  const handleResetToBeginning = () => {
    setCurrentStep(0);
    setAnswers(Array(12).fill(null));
    setUserEmail('');
    setPdfBlob(null);
    setEmailError(null);
  };

  const handleEmailSubmit = (email: string) => {
    setUserEmail(email);
    setCurrentStep(14); // Go to results
  };

  const handleCTA = () => {
    window.open('https://calendly.com/douglas-stevenson', '_blank');
  };

  const sendResultsEmail = async ({
    to,
    pdfBlob,
    score,
    category,
    maturityLabel,
    answers,
  }: {
    to: string;
    pdfBlob: Blob;
    score: number;
    category: string;
    maturityLabel: string;
    answers: (number | null)[];
  }): Promise<{ success: boolean; error?: string }> => {
    try {
      // Convert PDF blob to base64
      const pdfBase64 = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const result = reader.result as string;
          const base64String = result.includes(',') ? result.split(',')[1] : result;
          resolve(base64String);
        };
        reader.onerror = () => reject(new Error('Failed to read PDF blob'));
        reader.readAsDataURL(pdfBlob);
      });

      // Determine API endpoint based on deployment
      // In local development, email sending is not available (use `vercel dev` to test locally)
      const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
      
      if (isLocalhost) {
        console.warn('[Email] Running locally - email sending skipped. Use `vercel dev` to test emails locally, or deploy to Vercel.');
        return {
          success: false,
          error: 'Email sending is not available in local development. The PDF can be downloaded directly. To test email functionality, use `vercel dev` or deploy to Vercel.'
        };
      }
      
      const apiEndpoint = '/api/send-report';
      
      console.log(`[Email] Sending report to ${to}...`);
      console.log(`[Email] PDF size: ${pdfBlob.size} bytes, Base64 length: ${pdfBase64.length}`);

      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to,
          pdfBase64,
          score,
          category,
          maturityLabel,
          answers: answers.map((answer, index) => ({
            question: QUESTIONS[index]?.text || `Question ${index + 1}`,
            answer: answer !== null && answer > 0 
              ? QUESTIONS[index]?.answerOptions[answer - 1] || 'No answer'
              : 'No answer',
          })),
        }),
      });

      console.log(`[Email] Response status: ${response.status}`);
      
      const responseText = await response.text();
      console.log(`[Email] Response body:`, responseText);
      
      if (!response.ok) {
        let errorDetails = responseText;
        try {
          const errorJson = JSON.parse(responseText);
          errorDetails = errorJson.error || errorJson.message || responseText;
          console.error(`[Email] HTTP error! status: ${response.status}, error:`, errorJson);
        } catch {
          console.error(`[Email] HTTP error! status: ${response.status}, body: ${responseText}`);
        }
        throw new Error(`HTTP ${response.status}: ${errorDetails || 'Unknown error'}`);
      }

      let result;
      try {
        result = JSON.parse(responseText);
      } catch {
        throw new Error(`Invalid JSON response: ${responseText}`);
      }
      
      console.log(`[Email] Success response:`, result);
      
      if (result.success === false) {
        throw new Error(result.error || result.details || 'Email sending failed');
      }

      return { success: true };
    } catch (error: any) {
      console.error(`[Email] Error sending email to ${to}:`, {
        error: error.message,
        stack: error.stack,
        endpoint: '/api/send-report',
      });
      return { 
        success: false, 
        error: error.message || 'Failed to send email' 
      };
    }
  };

  const handleDownloadPDF = () => {
    if (pdfBlob) {
      const url = URL.createObjectURL(pdfBlob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'scalability-report.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  // Generate PDF when results are shown
  useEffect(() => {
    if (currentStep === 14 && !isGeneratingPDF && !pdfBlob) {
      setIsGeneratingPDF(true);
      
      const generatePDFAsync = async () => {
        try {
          // Wait a bit for DOM to render
          await new Promise(resolve => setTimeout(resolve, 500));
          
          const totalScore = getTotalScore(answers);
          const avgMaturity = getAverageMaturity(answers);
          const maturityLabel = getMaturityLabel(avgMaturity);
          const category = getCategory(totalScore);
          const categoryInfo = CATEGORIES[category];
          
          // Get radar chart SVG
          const radarSvg = document.querySelector('[data-radar-chart]') as SVGElement;
          let radarChartSvg = '';
          if (radarSvg) {
            radarChartSvg = new XMLSerializer().serializeToString(radarSvg);
          }
          
          // Get gradient bar HTML
          const gradientBar = document.querySelector('[data-gradient-bar]') as HTMLElement;
          let gradientBarHtml = '';
          if (gradientBar) {
            gradientBarHtml = gradientBar.outerHTML;
          }
          
          // Generate PDF
          const pdf = await generatePDF({
            score: totalScore,
            answers,
            category,
            categoryLabel: categoryInfo.label,
            categoryDescription: categoryInfo.description,
            maturityLabel,
            questions: QUESTIONS,
            radarChartSvg,
            gradientBarHtml,
          });
          
          setPdfBlob(pdf);
          
          // Send emails (fail-safe, don't block UI)
          if (userEmail) {
            // Send to user
            sendResultsEmail({
              to: userEmail,
              pdfBlob: pdf,
              score: totalScore,
              category: categoryInfo.label,
              maturityLabel,
              answers,
            }).then((result) => {
              if (!result.success) {
                console.error('[Email] Failed to send to user:', result.error);
                const errorMsg = result.error || 'Unknown error';
                setEmailError(`We couldn't email your report automatically: ${errorMsg}. You can download the PDF directly instead.`);
              } else {
                console.log('[Email] Successfully sent to user');
                setEmailError(null); // Clear any previous errors
              }
            }).catch((error) => {
              console.error('[Email] Unexpected error sending to user:', error);
              const errorMsg = error?.message || 'Unknown error';
              setEmailError(`We couldn't email your report automatically: ${errorMsg}. You can download the PDF directly instead.`);
            });
            
            // Send to douglas@afresh.io
            sendResultsEmail({
              to: 'douglas@afresh.io',
              pdfBlob: pdf,
              score: totalScore,
              category: categoryInfo.label,
              maturityLabel,
              answers,
            }).then((result) => {
              if (!result.success) {
                console.error('[Email] Failed to send to douglas@afresh.io:', result.error);
              } else {
                console.log('[Email] Successfully sent to douglas@afresh.io');
              }
            }).catch((error) => {
              console.error('[Email] Unexpected error sending to douglas@afresh.io:', error);
            });
          }
        } catch (error) {
          console.error('Failed to generate PDF:', error);
          setEmailError('We couldn\'t generate the PDF report, but your results are shown below.');
        } finally {
          setIsGeneratingPDF(false);
        }
      };
      
      generatePDFAsync();
    }
  }, [currentStep, isGeneratingPDF, pdfBlob, userEmail, answers]);

  const currentAnswer = currentStep > 0 && currentStep <= 12 ? answers[currentStep - 1] : null;
  const canProceed = currentStep === 0 || currentAnswer !== null;

  // Styles
  const styles = {
    container: {
      minHeight: 'calc(100vh - 200px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: '-apple-system, system-ui, sans-serif',
    },
    navBar: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '24px',
      paddingBottom: '16px',
      borderBottom: '1px solid #E5E7EB',
    },
    navTitle: {
      fontSize: '18px',
      fontWeight: 600,
      color: '#0A0A0A',
      cursor: 'pointer',
      transition: 'color 0.2s ease',
    },
    navButton: {
      padding: '8px 16px',
      borderRadius: '6px',
      fontSize: '14px',
      fontWeight: 500,
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      fontFamily: 'inherit',
      border: '1px solid #E5E7EB',
      backgroundColor: 'transparent',
      color: '#6B7280',
    },
    card: {
      backgroundColor: '#FFFFFF',
      borderRadius: '12px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05), 0 10px 20px rgba(0, 0, 0, 0.08)',
      padding: 'clamp(24px, 5vw, 40px)',
      maxWidth: '640px',
      width: '100%',
      position: 'relative' as const,
    },
    progressBar: {
      width: '100%',
      height: '4px',
      backgroundColor: '#E5E7EB',
      borderRadius: '2px',
      marginBottom: '32px',
      overflow: 'hidden' as const,
    },
    progressFill: {
      height: '100%',
      backgroundColor: '#2A66FF',
      transition: 'width 0.3s ease',
    },
    title: {
      fontSize: '28px',
      fontWeight: 500,
      color: '#0A0A0A',
      marginBottom: '12px',
      lineHeight: '1.3',
    },
    subtitle: {
      fontSize: '16px',
      color: '#6B7280',
      marginBottom: '32px',
      lineHeight: '1.5',
    },
    questionText: {
      fontSize: '20px',
      fontWeight: 500,
      color: '#0A0A0A',
      marginBottom: '32px',
      lineHeight: '1.5',
    },
    answerOptions: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '16px',
      marginBottom: '40px',
    },
    answerButton: {
      padding: '20px 16px',
      borderRadius: '12px',
      border: '2px solid #E5E7EB',
      backgroundColor: '#FFFFFF',
      color: '#0A0A0A',
      fontSize: '15px',
      fontWeight: 400,
      lineHeight: '1.5',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      fontFamily: 'inherit',
      textAlign: 'left' as const,
      display: 'flex',
      alignItems: 'center' as const,
      justifyContent: 'flex-start' as const,
      minHeight: '80px',
      width: '100%',
      wordWrap: 'break-word' as const,
      overflowWrap: 'break-word' as const,
    },
    answerButtonSelected: {
      borderColor: '#2A66FF',
      backgroundColor: '#2A66FF',
      color: '#FFFFFF',
    },
    answerButtonHover: {
      borderColor: '#2A66FF',
      backgroundColor: '#F0F4FF',
    },
    buttonRow: {
      display: 'flex',
      gap: '12px',
      justifyContent: 'flex-end',
    },
    button: {
      padding: '12px 24px',
      borderRadius: '8px',
      fontSize: '16px',
      fontWeight: 500,
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      fontFamily: 'inherit',
      border: 'none',
    },
    buttonPrimary: {
      backgroundColor: '#2A66FF',
      color: '#FFFFFF',
    },
    buttonPrimaryDisabled: {
      backgroundColor: '#E5E7EB',
      color: '#9CA3AF',
      cursor: 'not-allowed',
    },
    buttonSecondary: {
      backgroundColor: 'transparent',
      color: '#6B7280',
      border: '1px solid #E5E7EB',
    },
    scoreDisplay: {
      textAlign: 'center' as const,
      marginBottom: '24px',
    },
    scoreLabel: {
      fontSize: '14px',
      fontWeight: 500,
      color: '#6B7280',
      textTransform: 'uppercase' as const,
      letterSpacing: '0.05em',
      marginBottom: '8px',
    },
    scoreValue: {
      fontSize: '64px',
      fontWeight: 700,
      color: '#2A66FF',
      marginBottom: '8px',
      lineHeight: '1',
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'center',
      gap: '8px',
    },
    scoreNumber: {
      fontSize: '64px',
      fontWeight: 700,
      color: '#2A66FF',
      marginBottom: '8px',
      lineHeight: '1',
    },
    categoryLabel: {
      fontSize: '24px',
      fontWeight: 600,
      color: '#0A0A0A',
      marginBottom: '12px',
      textAlign: 'center' as const,
    },
    categoryDescription: {
      fontSize: '16px',
      color: '#6B7280',
      marginBottom: '24px',
      lineHeight: '1.6',
      textAlign: 'center' as const,
    },
    maturityLabel: {
      fontSize: '16px',
      fontWeight: 500,
      color: '#374151',
      marginBottom: '16px',
      textAlign: 'center' as const,
    },
    maturityScale: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '32px',
      padding: '0 4px',
    },
    maturityScaleItem: {
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center' as const,
      gap: '4px',
      flex: 1,
    },
    maturityScaleDot: {
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      backgroundColor: '#E5E7EB',
      transition: 'all 0.3s ease',
    },
    maturityScaleDotActive: {
      width: '12px',
      height: '12px',
      backgroundColor: '#2A66FF',
      boxShadow: '0 0 0 3px rgba(42, 102, 255, 0.1)',
    },
    maturityScaleLabel: {
      fontSize: '10px',
      fontWeight: 500,
      color: '#6B7280',
      textAlign: 'center' as const,
    },
    maturityScaleLabelActive: {
      color: '#2A66FF',
      fontWeight: 600,
    },
    insightSectionTitle: {
      fontSize: '16px',
      fontWeight: 600,
      color: '#0A0A0A',
      marginBottom: '16px',
    },
    insightTags: {
      display: 'flex',
      flexWrap: 'wrap' as const,
      gap: '8px',
      marginBottom: '32px',
    },
    insightTag: {
      padding: '4px 8px',
      borderRadius: '9999px',
      backgroundColor: 'rgba(42, 102, 255, 0.06)',
      color: '#0A0A0A',
      fontSize: '12px',
      fontWeight: 500,
      lineHeight: '1.4',
    },
    ctaButton: {
      width: '100%',
      padding: '16px 24px',
      borderRadius: '8px',
      backgroundColor: '#2A66FF',
      color: '#FFFFFF',
      fontSize: '16px',
      fontWeight: 600,
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      fontFamily: 'inherit',
      border: 'none',
      marginTop: '24px',
    },
    gradientBarContainer: {
      width: '100%',
      marginBottom: '32px',
      overflow: 'visible' as const, // Allow halo to extend beyond container
    },
    gradientBar: {
      width: '100%',
      height: '18px',
      borderRadius: '9999px',
      background: 'linear-gradient(to right, #FEE2E2, #FEF3C7, #DCFCE7, #BBF7D0)',
      position: 'relative' as const,
      marginBottom: '12px',
      overflow: 'visible' as const, // Allow halo to extend beyond bar
    },
    gradientIndicatorWrapper: {
      position: 'absolute' as const,
      top: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 10,
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center' as const,
    },
    gradientIndicatorHalo: {
      position: 'absolute' as const,
      top: '50%',
      left: '50%',
      width: '34px',
      height: '34px',
      borderRadius: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 8,
      pointerEvents: 'none' as const,
    },
    gradientIndicator: {
      position: 'relative' as const,
      width: '19px',
      height: '19px',
      borderRadius: '50%',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      boxShadow: '0 4px 10px rgba(15, 23, 42, 0.25)',
      zIndex: 10,
      // Inner highlight using radial gradient overlay on semi-transparent white
      background: `
        radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.6) 0%, transparent 50%),
        rgba(255, 255, 255, 0.75)
      `,
    },
    gradientIndicatorGuideLine: {
      position: 'absolute' as const,
      top: 'calc(50% + 9.5px)',
      left: '50%',
      width: '1px',
      height: '18px',
      transform: 'translateX(-50%)',
      zIndex: 9,
      pointerEvents: 'none' as const,
    },
    gradientLabels: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      fontSize: '12px',
      color: '#6B7280',
      padding: '0 4px',
      marginTop: '18px',
      position: 'relative' as const,
    },
    radarChartSection: {
      marginTop: '32px',
      marginBottom: '32px',
    },
    radarChartTitle: {
      fontSize: '16px',
      fontWeight: 600,
      color: '#0A0A0A',
      marginBottom: '8px',
      textAlign: 'center' as const,
    },
    radarChartContainer: {
      maxWidth: '400px',
      margin: '0 auto',
      paddingTop: '12px',
      width: '100%',
    },
    radarChartSvg: {
      width: '100%',
      height: 'auto',
      display: 'block',
    },
    radarChartHelper: {
      fontSize: '12px',
      color: '#6B7280',
      marginTop: '8px',
      textAlign: 'center' as const,
    },
  };

  const progress = currentStep === 0 ? 0 : currentStep === 14 ? 100 : currentStep === 13 ? 100 : (currentStep / 12) * 100;

  return (
    <>
      <style>{`
        @media (max-width: 640px) {
          .answer-options-grid {
            grid-template-columns: 1fr !important;
          }
          .gradient-guide-line {
            display: none !important;
          }
        }
      `}</style>
      <div style={styles.container}>
        <div style={styles.card}>
        {/* Navigation Bar */}
        {currentStep > 0 && (
          <div style={styles.navBar}>
            <div
              style={styles.navTitle}
              onClick={handleResetToBeginning}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#2A66FF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#0A0A0A';
              }}
            >
              Scalability Diagnostic
            </div>
            <button
              style={styles.navButton}
              onClick={handleResetToBeginning}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#F3F4F6';
                e.currentTarget.style.borderColor = '#D1D5DB';
                e.currentTarget.style.color = '#374151';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.borderColor = '#E5E7EB';
                e.currentTarget.style.color = '#6B7280';
              }}
            >
              Back to Beginning
            </button>
          </div>
        )}
        <div style={styles.progressBar}>
          <motion.div
            style={styles.progressFill}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <AnimatePresence mode="wait">
          {currentStep === 0 && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h1 style={styles.title}>The Scalability Diagnostic</h1>
              <div style={{ marginBottom: '32px', textAlign: 'left' }}>
                <p style={{ ...styles.subtitle, marginBottom: '16px', fontSize: '18px', lineHeight: '1.6', color: '#374151' }}>
                  Most companies scale on hope, not mechanisms. This diagnostic helps you see where your operating system is strong—and where it will break as you grow.
                </p>
                <p style={{ ...styles.subtitle, marginBottom: '16px', fontSize: '18px', lineHeight: '1.6', color: '#374151' }}>
                  In just <strong style={{ color: '#0A0A0A' }}>12 questions</strong> (about 2 minutes), you'll get:
                </p>
                <ul style={{ marginLeft: '24px', marginBottom: '24px', fontSize: '16px', lineHeight: '1.8', color: '#374151' }}>
                  <li style={{ marginBottom: '8px' }}>A clear assessment of your scalability across 5 critical dimensions</li>
                  <li style={{ marginBottom: '8px' }}>Specific insights into where you're exposed and where you're strong</li>
                  <li style={{ marginBottom: '8px' }}>A personalized PDF report you can share with your team</li>
                  <li style={{ marginBottom: '8px' }}>Actionable next steps based on proven practices from Amazon and other high-growth companies</li>
                </ul>
                <p style={{ ...styles.subtitle, fontSize: '16px', lineHeight: '1.6', color: '#6B7280', fontStyle: 'italic' }}>
                  This isn't a marketing quiz. It's a diagnostic tool used by founders and engineering leaders who want to scale without chaos.
                </p>
              </div>
              <div style={styles.buttonRow}>
                <button
                  style={{
                    ...styles.button,
                    ...styles.buttonPrimary,
                  }}
                  onClick={handleNext}
                >
                  Start diagnostic
                </button>
              </div>
            </motion.div>
          )}

          {currentStep === 13 && (
            <EmailCapture onSubmit={handleEmailSubmit} />
          )}

          {currentStep >= 1 && currentStep <= 12 && (
            <motion.div
              key={`question-${currentStep}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <p style={styles.subtitle}>Question {currentStep} of 12</p>
              <h2 style={styles.questionText}>{QUESTIONS[currentStep - 1].text}</h2>
              
              <div style={styles.answerOptions} className="answer-options-grid">
                {QUESTIONS[currentStep - 1].answerOptions.map((optionText, index) => {
                  const value = index + 1; // Map index 0-4 to score 1-5
                  const isSelected = currentAnswer === value;
                  return (
                    <button
                      key={value}
                      style={{
                        ...styles.answerButton,
                        ...(isSelected ? styles.answerButtonSelected : {}),
                      }}
                      onClick={() => handleAnswer(value)}
                      onMouseEnter={(e) => {
                        if (!isSelected) {
                          e.currentTarget.style.borderColor = '#2A66FF';
                          e.currentTarget.style.backgroundColor = '#F0F4FF';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isSelected) {
                          e.currentTarget.style.borderColor = '#E5E7EB';
                          e.currentTarget.style.backgroundColor = '#FFFFFF';
                        }
                      }}
                    >
                      {optionText}
                    </button>
                  );
                })}
              </div>

              <div style={styles.buttonRow}>
                {currentStep > 1 && (
                  <button
                    style={{
                      ...styles.button,
                      ...styles.buttonSecondary,
                    }}
                    onClick={handleBack}
                  >
                    Back
                  </button>
                )}
                <button
                  style={{
                    ...styles.button,
                    ...(canProceed ? styles.buttonPrimary : styles.buttonPrimaryDisabled),
                  }}
                  onClick={handleNext}
                  disabled={!canProceed}
                >
                  {currentStep === 12 ? 'Finish' : 'Next'}
                </button>
              </div>
            </motion.div>
          )}

          {currentStep === 14 && (
            <motion.div
              key="results"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              {(() => {
                const totalScore = getTotalScore(answers);
                const avgMaturity = getAverageMaturity(answers);
                const maturityLabel = getMaturityLabel(avgMaturity);
                const category = getCategory(totalScore);
                const categoryInfo = CATEGORIES[category];
                const insightTags = getInsightTags(answers);
                
                // Calculate position for indicator: (score - 12) / (60 - 12) * 100%
                const indicatorPosition = ((totalScore - 12) / (60 - 12)) * 100;
                // Clamp to 0-100% range
                const clampedPosition = Math.max(0, Math.min(100, indicatorPosition));
                
                // Find the closest maturity level (1-5) based on average
                const closestLevel = Math.round(avgMaturity);
                const clampedLevel = Math.max(1, Math.min(5, closestLevel));

                return (
                  <>
                    {/* Score Display */}
                    <div style={styles.scoreDisplay}>
                      <div style={styles.scoreLabel}>Your Scalability Score</div>
                      <div style={styles.scoreValue}>
                        <AnimatedScore score={totalScore} />
                        <span style={{ fontSize: '48px', color: '#9CA3AF', marginLeft: '8px' }}>/ 60</span>
                      </div>
                    </div>

                    {/* Category Label */}
                    <h2 style={styles.categoryLabel}>{categoryInfo.label}</h2>

                    {/* Overall Maturity */}
                    <div style={styles.maturityLabel}>
                      Overall maturity: {maturityLabel}
                    </div>

                    {/* Mini Maturity Scale */}
                    <div style={styles.maturityScale}>
                      {[1, 2, 3, 4, 5].map((level) => {
                        const isActive = level === clampedLevel;
                        return (
                          <div key={level} style={styles.maturityScaleItem}>
                            <div
                              style={{
                                ...styles.maturityScaleDot,
                                ...(isActive ? styles.maturityScaleDotActive : {}),
                              }}
                            />
                            <div
                              style={{
                                ...styles.maturityScaleLabel,
                                ...(isActive ? styles.maturityScaleLabelActive : {}),
                              }}
                            >
                              {ANSWER_LABELS[level as keyof typeof ANSWER_LABELS]}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Category Description */}
                    <p style={styles.categoryDescription}>{categoryInfo.description}</p>

                    {/* Gradient Continuum Bar */}
                    <div style={styles.gradientBarContainer} data-gradient-bar>
                      <div style={styles.gradientBar}>
                        {(() => {
                          // Calculate position as 0-1 for color interpolation
                          const position = (totalScore - 12) / (60 - 12);
                          const clampedPosition01 = Math.max(0, Math.min(1, position));
                          const gradientColor = getGradientColorAt(clampedPosition01);
                          
                          // Convert RGB to RGBA for halo
                          const rgbMatch = gradientColor.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
                          const rgbaColor = rgbMatch 
                            ? `rgba(${rgbMatch[1]}, ${rgbMatch[2]}, ${rgbMatch[3]}, 0.3)`
                            : gradientColor;
                          const rgbaColorTransparent = rgbMatch
                            ? `rgba(${rgbMatch[1]}, ${rgbMatch[2]}, ${rgbMatch[3]}, 0.0)`
                            : gradientColor;
                          
                          return (
                            <motion.div
                              style={{
                                ...styles.gradientIndicatorWrapper,
                                left: `${clampedPosition}%`,
                              }}
                              initial={{ 
                                left: '0%',
                                scale: 0.9,
                                opacity: 0,
                              }}
                              animate={{ 
                                left: `${clampedPosition}%`,
                                scale: [0.95, 1.03, 1],
                                opacity: 1,
                              }}
                              transition={{ 
                                left: {
                                  duration: 0.5,
                                  ease: "easeOut",
                                },
                                scale: {
                                  duration: 0.35,
                                  ease: "easeOut",
                                },
                                opacity: {
                                  duration: 0.5,
                                  ease: "easeOut",
                                },
                              }}
                            >
                              {/* Halo glow */}
                              <div
                                data-pdf-marker="halo"
                                style={{
                                  ...styles.gradientIndicatorHalo,
                                  background: `radial-gradient(circle, ${rgbaColor} 0%, ${rgbaColorTransparent} 70%)`,
                                  opacity: 0.9,
                                }}
                              />
                              
                              {/* Glass indicator */}
                              <div
                                data-pdf-marker="indicator"
                                style={{
                                  ...styles.gradientIndicator,
                                  border: `1px solid ${gradientColor}`,
                                }}
                              />
                              
                              {/* Vertical guide line */}
                              <div
                                className="gradient-guide-line"
                                data-pdf-marker="guide-line"
                                style={{
                                  ...styles.gradientIndicatorGuideLine,
                                  backgroundColor: gradientColor,
                                  opacity: 0.5,
                                }}
                              />
                            </motion.div>
                          );
                        })()}
                      </div>
                      <div style={styles.gradientLabels}>
                        <span>Fragile</span>
                        <span>Partially Scalable</span>
                        <span>Scalable with Gaps</span>
                        <span>Scale-Ready</span>
                      </div>
                    </div>

                    {/* Radar Chart Section */}
                    {(() => {
                      const dimensionScores = getDimensionScores(answers);
                      const scores = [
                        dimensionScores.architectureScale,
                        dimensionScores.executionVisibility,
                        dimensionScores.qualityReliability,
                        dimensionScores.ownershipOutcomes,
                        dimensionScores.talentManagement,
                      ];

                      // Radar chart constants
                      const cx = 100;
                      const cy = 100;
                      const minRadius = 20;
                      const maxRadius = 80;
                      const numDimensions = 5;

                      // Generate polygon points
                      const getPoint = (angle: number, score: number) => {
                        const radius = minRadius + ((score - 1) / 4) * (maxRadius - minRadius);
                        const x = cx + radius * Math.sin(angle);
                        const y = cy - radius * Math.cos(angle);
                        return { x, y };
                      };

                      const angles = Array.from({ length: numDimensions }, (_, i) => {
                        return (2 * Math.PI * i) / numDimensions - Math.PI / 2; // Start from top
                      });

                      const points = scores.map((score, i) => getPoint(angles[i], score));
                      const pathData = points
                        .map((point, i) => (i === 0 ? `M ${point.x} ${point.y}` : `L ${point.x} ${point.y}`))
                        .join(' ') + ' Z';

                      // Generate label positions - place closer to chart with extra padding for left side
                      const labelRadius = maxRadius + 8;
                      const labelPoints = angles.map((angle, i) => {
                        // Adjust label position based on which dimension (Architecture is at index 0, left side)
                        // Architecture needs more space, so we position it further out
                        const radius = i === 0 ? labelRadius + 12 : labelRadius; // Extra space for Architecture
                        return {
                          x: cx + radius * Math.sin(angle),
                          y: cy - radius * Math.cos(angle),
                          angle,
                        };
                      });

                      // Shortened labels for better fit
                      const shortLabels = [
                        'Architecture\n& Scale',
                        'Execution\nVisibility',
                        'Quality &\nLearning',
                        'Ownership &\nOutcomes',
                        'Talent &\nManagement',
                      ];

                      return (
                        <div style={styles.radarChartSection}>
                          <div style={styles.radarChartTitle}>Maturity by dimension</div>
                          <div style={styles.radarChartContainer}>
                            <svg
                              viewBox="-50 -20 300 240"
                              style={styles.radarChartSvg}
                              preserveAspectRatio="xMidYMid meet"
                              data-radar-chart
                            >
                              {/* Grid rings for levels 1-5 */}
                              {[1, 2, 3, 4, 5].map((level) => {
                                const radius = minRadius + ((level - 1) / 4) * (maxRadius - minRadius);
                                return (
                                  <circle
                                    key={level}
                                    cx={cx}
                                    cy={cy}
                                    r={radius}
                                    fill="none"
                                    stroke="#D1D5DB"
                                    strokeWidth="1"
                                  />
                                );
                              })}

                              {/* Axis lines */}
                              {angles.map((angle, i) => {
                                const x = cx + maxRadius * Math.sin(angle);
                                const y = cy - maxRadius * Math.cos(angle);
                                return (
                                  <line
                                    key={i}
                                    x1={cx}
                                    y1={cy}
                                    x2={x}
                                    y2={y}
                                    stroke="#D1D5DB"
                                    strokeWidth="1"
                                  />
                                );
                              })}

                              {/* Score polygon */}
                              <path
                                d={pathData}
                                fill="rgba(42, 102, 255, 0.12)"
                                stroke="#2A66FF"
                                strokeWidth="1.5"
                              />

                              {/* Labels */}
                              {labelPoints.map((labelPoint, i) => {
                                const label = shortLabels[i];
                                const isLeftSide = labelPoint.x < cx;
                                const lines = label.split('\n');
                                // Adjust baseline for better visibility on left side
                                const baseY = isLeftSide ? labelPoint.y - 4 : labelPoint.y;
                                // Ensure Architecture label is positioned to stay in view
                                const labelX = i === 0 && isLeftSide ? labelPoint.x - 2 : labelPoint.x;
                                return (
                                  <text
                                    key={i}
                                    x={labelX}
                                    y={baseY}
                                    textAnchor={isLeftSide ? 'end' : 'start'}
                                    dominantBaseline="middle"
                                    fontSize="7"
                                    fill="#6B7280"
                                    style={{ fontFamily: 'inherit' }}
                                  >
                                    {lines.map((line, idx) => (
                                      <tspan
                                        key={idx}
                                        x={labelX}
                                        dy={idx === 0 ? 0 : 8}
                                        textAnchor={isLeftSide ? 'end' : 'start'}
                                      >
                                        {line}
                                      </tspan>
                                    ))}
                                  </text>
                                );
                              })}
                            </svg>
                          </div>
                          <div style={styles.radarChartHelper}>
                            Lower areas highlight constraints on your ability to scale.
                          </div>
                        </div>
                      );
                    })()}

                    {/* What This Suggests Section */}
                    {insightTags.length > 0 && (
                      <>
                        <div style={styles.insightSectionTitle}>What this suggests</div>
                        <div style={styles.insightTags}>
                          {insightTags.map((tag, idx) => (
                            <span key={idx} style={styles.insightTag}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      </>
                    )}

                    {/* Error/Info Notice */}
                    {emailError && (
                      <div style={{
                        padding: '16px',
                        borderRadius: '8px',
                        backgroundColor: emailError.includes('local development') 
                          ? '#EFF6FF' // Light blue for info
                          : '#FEF3C7', // Yellow for actual errors
                        border: emailError.includes('local development')
                          ? '1px solid #93C5FD' // Blue border for info
                          : '1px solid #FCD34D', // Yellow border for errors
                        color: emailError.includes('local development')
                          ? '#1E40AF' // Dark blue text
                          : '#92400E', // Dark orange text
                        fontSize: '14px',
                        marginBottom: '16px',
                        textAlign: 'left' as const,
                      }}>
                        <div style={{ fontWeight: 600, marginBottom: '8px' }}>
                          {emailError.includes('local development') ? 'ℹ️ Local Development' : 'Email Error'}
                        </div>
                        <div style={{ marginBottom: '8px' }}>
                          {emailError.includes('local development') 
                            ? 'Email sending is not available in local development. You can download the PDF directly below. To test email functionality, use `vercel dev` or deploy to Vercel.'
                            : emailError
                          }
                        </div>
                        {!emailError.includes('local development') && (
                          <div style={{ marginTop: '8px', fontSize: '12px', opacity: 0.8 }}>
                            <strong>Debug steps:</strong>
                            <ol style={{ marginTop: '4px', paddingLeft: '20px' }}>
                              <li>Open browser console (F12) and check for <code style={{ backgroundColor: 'rgba(0,0,0,0.1)', padding: '2px 4px', borderRadius: '3px' }}>[Email]</code> messages</li>
                              <li>Check Network tab → find <code style={{ backgroundColor: 'rgba(0,0,0,0.1)', padding: '2px 4px', borderRadius: '3px' }}>/api/send-report</code> request</li>
                              <li>Check Vercel function logs (Deployments → Functions → /api/send-report)</li>
                              <li>Verify <code style={{ backgroundColor: 'rgba(0,0,0,0.1)', padding: '2px 4px', borderRadius: '3px' }}>RESEND_API_KEY</code> is set in Vercel environment variables</li>
                            </ol>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Download PDF Button */}
                    {pdfBlob && (
                      <button
                        style={{
                          ...styles.ctaButton,
                          backgroundColor: '#6B7280',
                          marginBottom: '12px',
                        }}
                        onClick={handleDownloadPDF}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#4B5563';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = '#6B7280';
                        }}
                      >
                        Download PDF Report
                      </button>
                    )}

                    <button
                      style={styles.ctaButton}
                      onClick={handleCTA}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#1E4ED8';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#2A66FF';
                      }}
                    >
                      Review your scalability profile with Doug & Jim
                    </button>
                  </>
                );
              })()}
            </motion.div>
          )}
        </AnimatePresence>
        </div>
      </div>
    </>
  );
}

