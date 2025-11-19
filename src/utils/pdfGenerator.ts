import { PDFDocument, rgb, StandardFonts, PDFPage } from 'pdf-lib';
import html2canvas from 'html2canvas';

interface PDFGenerationParams {
  score: number;
  answers: (number | null)[];
  category: string;
  categoryLabel: string;
  categoryDescription: string;
  maturityLabel: string;
  questions: Array<{ text: string; answerOptions: string[] }>;
  radarChartSvg: string;
  gradientBarHtml: string;
}

export async function exportRadarChartToPNG(svgElement: SVGElement): Promise<Blob> {
  // Clone the SVG to avoid modifying the original
  const clonedSvg = svgElement.cloneNode(true) as SVGElement;
  
  // Get SVG dimensions
  const viewBox = clonedSvg.getAttribute('viewBox');
  const [x, y, width, height] = viewBox ? viewBox.split(' ').map(Number) : [0, 0, 300, 240];
  
  // Create a canvas
  const canvas = document.createElement('canvas');
  canvas.width = width * 2; // Higher resolution
  canvas.height = height * 2;
  const ctx = canvas.getContext('2d');
  
  if (!ctx) throw new Error('Could not get canvas context');
  
  // Set white background
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Convert SVG to image
  const svgData = new XMLSerializer().serializeToString(clonedSvg);
  const img = new Image();
  const svgBlob = new Blob([svgData], { type: 'image/svg+xml' });
  const url = URL.createObjectURL(svgBlob);
  
  return new Promise((resolve, reject) => {
    img.onload = () => {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      URL.revokeObjectURL(url);
      canvas.toBlob((blob) => {
        if (blob) {
          resolve(blob);
        } else {
          reject(new Error('Failed to create blob'));
        }
      }, 'image/png');
    };
    img.onerror = reject;
    img.src = url;
  });
}

export async function exportGradientBarToPNG(gradientBarElement: HTMLElement): Promise<Blob> {
  // Enhance the marker visibility for PDF export
  // Find elements using data attributes - search within the gradient bar container
  const indicator = gradientBarElement.querySelector('[data-pdf-marker="indicator"]') as HTMLElement;
  const halo = gradientBarElement.querySelector('[data-pdf-marker="halo"]') as HTMLElement;
  const guideLine = gradientBarElement.querySelector('[data-pdf-marker="guide-line"]') as HTMLElement;
  const wrapper = indicator?.parentElement as HTMLElement;
  
  const originalStyles: { [key: string]: any } = {};
  
  // Ensure wrapper is visible and properly positioned
  if (wrapper) {
    originalStyles.wrapper = {
      position: wrapper.style.position,
      display: wrapper.style.display,
      visibility: wrapper.style.visibility,
      opacity: wrapper.style.opacity,
      zIndex: wrapper.style.zIndex,
    };
    wrapper.style.position = 'absolute';
    wrapper.style.display = 'block';
    wrapper.style.visibility = 'visible';
    wrapper.style.opacity = '1';
    wrapper.style.zIndex = '1000';
  }
  
  // Enhance indicator - make it much larger and more visible for PDF
  if (indicator) {
    originalStyles.indicator = {
      width: indicator.style.width,
      height: indicator.style.height,
      border: indicator.style.border,
      boxShadow: indicator.style.boxShadow,
      backgroundColor: indicator.style.backgroundColor,
      display: indicator.style.display,
      visibility: indicator.style.visibility,
      opacity: indicator.style.opacity,
      position: indicator.style.position,
    };
    // Much larger indicator for PDF visibility
    indicator.style.width = '40px';
    indicator.style.height = '40px';
    // Thicker, more prominent border with solid color
    indicator.style.border = '5px solid #2A66FF';
    // Strong shadow for depth and visibility
    indicator.style.boxShadow = '0 4px 16px rgba(42, 102, 255, 0.8), 0 0 0 5px rgba(255, 255, 255, 1), 0 2px 10px rgba(0, 0, 0, 0.4)';
    // Solid white background for maximum contrast
    indicator.style.backgroundColor = '#FFFFFF';
    indicator.style.display = 'block';
    indicator.style.visibility = 'visible';
    indicator.style.opacity = '1';
    indicator.style.position = 'relative';
  }
  
  // Enhance halo - make it much larger and more visible
  if (halo) {
    originalStyles.halo = {
      width: halo.style.width,
      height: halo.style.height,
      opacity: halo.style.opacity,
      display: halo.style.display,
      visibility: halo.style.visibility,
      position: halo.style.position,
    };
    // Larger halo for better visibility
    halo.style.width = '72px';
    halo.style.height = '72px';
    halo.style.opacity = '1';
    halo.style.display = 'block';
    halo.style.visibility = 'visible';
    halo.style.position = 'absolute';
  }
  
  // Enhance guide line - make it much thicker and more visible
  if (guideLine) {
    originalStyles.guideLine = {
      width: guideLine.style.width,
      opacity: guideLine.style.opacity,
      backgroundColor: guideLine.style.backgroundColor,
      display: guideLine.style.display,
      visibility: guideLine.style.visibility,
      position: guideLine.style.position,
    };
    // Thicker guide line
    guideLine.style.width = '5px';
    guideLine.style.opacity = '1';
    guideLine.style.backgroundColor = '#2A66FF';
    guideLine.style.display = 'block';
    guideLine.style.visibility = 'visible';
    guideLine.style.position = 'absolute';
  }
  
  try {
    // Wait a moment to ensure all styles are applied and animations are complete
    await new Promise(resolve => setTimeout(resolve, 100));
    
    // Make the gradient bar element larger for PDF export
    const originalWidth = gradientBarElement.style.width;
    const originalHeight = gradientBarElement.style.height;
    gradientBarElement.style.width = '600px'; // Larger width for PDF
    gradientBarElement.style.height = 'auto';
    
    // Force a reflow to ensure styles are applied
    gradientBarElement.offsetHeight;
    
    const canvas = await html2canvas(gradientBarElement, {
      backgroundColor: '#FFFFFF',
      scale: 3, // Higher scale for better quality
      width: 600,
      height: gradientBarElement.offsetHeight + 60, // Include labels with more space for larger marker
      useCORS: true,
      logging: false,
      allowTaint: false,
    });
    
    // Restore original width/height
    if (originalWidth) gradientBarElement.style.width = originalWidth;
    if (originalHeight) gradientBarElement.style.height = originalHeight;
    
    // Restore original styles
    if (wrapper && originalStyles.wrapper) {
      Object.assign(wrapper.style, originalStyles.wrapper);
    }
    if (indicator && originalStyles.indicator) {
      Object.assign(indicator.style, originalStyles.indicator);
    }
    if (halo && originalStyles.halo) {
      Object.assign(halo.style, originalStyles.halo);
    }
    if (guideLine && originalStyles.guideLine) {
      Object.assign(guideLine.style, originalStyles.guideLine);
    }
    
    return new Promise((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (blob) {
          resolve(blob);
        } else {
          reject(new Error('Failed to create blob'));
        }
      }, 'image/png');
    });
  } catch (error) {
    // Restore original styles even on error
    if (wrapper && originalStyles.wrapper) {
      Object.assign(wrapper.style, originalStyles.wrapper);
    }
    if (indicator && originalStyles.indicator) {
      Object.assign(indicator.style, originalStyles.indicator);
    }
    if (halo && originalStyles.halo) {
      Object.assign(halo.style, originalStyles.halo);
    }
    if (guideLine && originalStyles.guideLine) {
      Object.assign(guideLine.style, originalStyles.guideLine);
    }
    throw error;
  }
}

// Helper function to wrap text to fit within a width
function wrapText(text: string, maxWidth: number, fontSize: number, font: any): string[] {
  const words = text.split(' ');
  const lines: string[] = [];
  let currentLine = '';

  for (const word of words) {
    const testLine = currentLine ? `${currentLine} ${word}` : word;
    // Approximate width calculation (rough estimate: fontSize * 0.6 per character)
    const testWidth = testLine.length * fontSize * 0.6;
    
    if (testWidth > maxWidth && currentLine) {
      lines.push(currentLine);
      currentLine = word;
    } else {
      currentLine = testLine;
    }
  }
  
  if (currentLine) {
    lines.push(currentLine);
  }
  
  return lines.length > 0 ? lines : [text];
}

export async function generatePDF(params: PDFGenerationParams): Promise<Blob> {
  const {
    score,
    answers,
    category,
    categoryLabel,
    categoryDescription,
    maturityLabel,
    questions,
  } = params;

  const pdfDoc = await PDFDocument.create();
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  
  // Layout constants
  const pageWidth = 612; // US Letter width in points
  const pageHeight = 792; // US Letter height in points
  const marginLeft = 40;
  const marginRight = 40;
  const marginTop = 40;
  const marginBottom = 40;
  const contentWidth = pageWidth - marginLeft - marginRight;
  
  // Create first page
  let currentPage = pdfDoc.addPage([pageWidth, pageHeight]);
  let currentY = pageHeight - marginTop;
  
  // Helper function to check if we need a new page
  const checkPageBreak = (requiredHeight: number): PDFPage => {
    if (currentY - requiredHeight < marginBottom) {
      currentPage = pdfDoc.addPage([pageWidth, pageHeight]);
      currentY = pageHeight - marginTop;
    }
    return currentPage;
  };
  
  // Helper function to add text with proper wrapping and pagination
  const addText = (
    text: string,
    fontSize: number,
    isBold: boolean = false,
    color: any = rgb(0, 0, 0),
    lineHeight: number = fontSize * 1.2,
    spacingAfter: number = lineHeight
  ) => {
    const textFont = isBold ? boldFont : font;
    const wrappedLines = wrapText(text, contentWidth, fontSize, textFont);
    const totalHeight = wrappedLines.length * lineHeight + spacingAfter;
    
    checkPageBreak(totalHeight);
    
    wrappedLines.forEach((line, index) => {
      currentPage.drawText(line, {
        x: marginLeft,
        y: currentY - (index * lineHeight),
        size: fontSize,
        font: textFont,
        color: color,
      });
    });
    
    currentY -= totalHeight;
  };
  
  // Title
  addText('ScaleOS Scalability Diagnostic Report', 20, true, rgb(0.16, 0.4, 1), 24, 8);
  
  // Score and Category
  addText(`${score} / 60 — ${categoryLabel}`, 16, true, rgb(0, 0, 0), 18, 6);
  
  // Overall Maturity
  addText(`Overall Maturity: ${maturityLabel}`, 14, false, rgb(0, 0, 0), 16, 12);
  
  // Category Description
  addText(categoryDescription, 11, false, rgb(0.3, 0.3, 0.3), 13, 20);
  
  // Add gradient bar image if available
  if (params.gradientBarHtml) {
    try {
      // Create a temporary element to render the gradient bar
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = params.gradientBarHtml;
      tempDiv.style.position = 'absolute';
      tempDiv.style.left = '-9999px';
      tempDiv.style.width = '600px'; // Larger width to match PDF export size
      document.body.appendChild(tempDiv);
      
      const gradientBlob = await exportGradientBarToPNG(tempDiv);
      const gradientImage = await pdfDoc.embedPng(await gradientBlob.arrayBuffer());
      
      // Scale to be much larger - use more of the content width
      const imageAspectRatio = gradientImage.width / gradientImage.height;
      const targetHeight = 100; // Significantly increased for better visibility
      const targetWidth = Math.min(contentWidth * 0.98, targetHeight * imageAspectRatio); // Use 98% of content width
      const scaledHeight = targetHeight;
      const scaledWidth = targetWidth;
      
      checkPageBreak(scaledHeight + 40);
      
      // Center the image
      const imageX = marginLeft + (contentWidth - scaledWidth) / 2;
      currentPage.drawImage(gradientImage, {
        x: imageX,
        y: currentY - scaledHeight,
        width: scaledWidth,
        height: scaledHeight,
      });
      
      currentY -= scaledHeight + 40; // Increased spacing
      document.body.removeChild(tempDiv);
    } catch (error) {
      console.error('Failed to add gradient bar to PDF:', error);
    }
  }
  
  // Add radar chart if available
  if (params.radarChartSvg) {
    try {
      // Create a temporary SVG element
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = params.radarChartSvg;
      const svgElement = tempDiv.querySelector('svg') as SVGElement;
      
      if (svgElement) {
        const radarBlob = await exportRadarChartToPNG(svgElement);
        const radarImage = await pdfDoc.embedPng(await radarBlob.arrayBuffer());
        
        // Scale to be larger - use more of the content width
        const imageAspectRatio = radarImage.width / radarImage.height;
        const maxSize = 320; // Increased from 200 to 320
        let scaledWidth = Math.min(maxSize, contentWidth * 0.9); // Use 90% of content width
        let scaledHeight = scaledWidth / imageAspectRatio;
        
        if (scaledHeight > maxSize) {
          scaledHeight = maxSize;
          scaledWidth = scaledHeight * imageAspectRatio;
        }
        
        checkPageBreak(scaledHeight + 30);
        
        // Center the image
        const imageX = marginLeft + (contentWidth - scaledWidth) / 2;
        currentPage.drawImage(radarImage, {
          x: imageX,
          y: currentY - scaledHeight,
          width: scaledWidth,
          height: scaledHeight,
        });
        
        currentY -= scaledHeight + 30; // Increased spacing
      }
    } catch (error) {
      console.error('Failed to add radar chart to PDF:', error);
    }
  }
  
  // Questions and Answers section - Force to start on a new page
  // Check if we need a new page, and if not, create one anyway
  if (currentY > pageHeight - marginTop - 100) {
    currentPage = pdfDoc.addPage([pageWidth, pageHeight]);
    currentY = pageHeight - marginTop;
  } else {
    // Force a new page for answers section
    currentPage = pdfDoc.addPage([pageWidth, pageHeight]);
    currentY = pageHeight - marginTop;
  }
  
  addText('Your Answers', 18, true, rgb(0, 0, 0), 20, 16);
  
  questions.forEach((question, index) => {
    const answerIndex = answers[index];
    if (answerIndex !== null && answerIndex > 0) {
      const answerText = question.answerOptions[answerIndex - 1];
      
      // Question text (bold)
      addText(`${index + 1}. ${question.text}`, 12, true, rgb(0, 0, 0), 14, 6);
      
      // Answer text (regular)
      addText(`   ${answerText}`, 11, false, rgb(0.3, 0.3, 0.3), 13, 12);
    }
  });
  
  // Footer on last page
  const lastPage = pdfDoc.getPage(pdfDoc.getPageCount() - 1);
  lastPage.drawText('Generated by the ScaleOS Diagnostic', {
    x: marginLeft,
    y: 30,
    size: 8,
    font: font,
    color: rgb(0.4, 0.4, 0.4),
  });
  
  const pdfBytes = await pdfDoc.save();
  return new Blob([pdfBytes], { type: 'application/pdf' });
}
