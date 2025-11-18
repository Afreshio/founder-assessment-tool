// Vercel serverless function for sending email reports
// Configure with your email service (Resend, SendGrid, Postmark, etc.)

export default async function handler(req: any, res: any) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const { to, pdfBase64, answers, score, category, maturityLabel } = req.body;

    console.log('[API] Received request:', {
      to,
      pdfBase64Length: pdfBase64?.length || 0,
      score,
      category,
      maturityLabel,
      answersCount: answers?.length || 0,
    });

    if (!to || !pdfBase64) {
      console.error('[API] Missing required fields:', { to: !!to, pdfBase64: !!pdfBase64 });
      return res.status(400).json({ success: false, error: 'Missing required fields: to and pdfBase64 are required' });
    }

    // Convert base64 to buffer
    let pdfBuffer: Buffer;
    try {
      pdfBuffer = Buffer.from(pdfBase64, 'base64');
      console.log('[API] PDF buffer created, size:', pdfBuffer.length, 'bytes');
    } catch (error: any) {
      console.error('[API] Failed to decode PDF base64:', error);
      return res.status(400).json({ success: false, error: 'Invalid PDF base64 encoding' });
    }

    // TODO: Configure your email service here
    // Options:
    // 1. Resend (recommended): https://resend.com
    // 2. SendGrid: https://sendgrid.com
    // 3. Postmark: https://postmarkapp.com
    // 4. AWS SES
    // 5. Nodemailer with SMTP

    // Resend email service
    const { Resend } = require('resend');
    
    if (!process.env.RESEND_API_KEY) {
      console.error('[API] RESEND_API_KEY environment variable is not set');
      return res.status(500).json({ 
        success: false,
        error: 'Email service not configured. RESEND_API_KEY is missing.',
        details: 'Please add RESEND_API_KEY to your environment variables and redeploy.'
      });
    }
    
    // Validate API key format
    const apiKey = process.env.RESEND_API_KEY.trim(); // Remove any whitespace
    if (!apiKey.startsWith('re_')) {
      console.error('[API] Invalid Resend API key format. Should start with "re_"');
      return res.status(500).json({ 
        success: false,
        error: 'Invalid Resend API key format',
        details: 'Resend API keys should start with "re_". Please check your environment variable.'
      });
    }
    
    console.log('[API] Resend API key present: Yes');
    console.log('[API] Resend API key length:', apiKey.length);
    console.log('[API] Resend API key starts with re_:', apiKey.startsWith('re_'));
    
    const resend = new Resend(apiKey);
    
    try {
      console.log('[API] Attempting to send email to:', to);
      const emailResult = await resend.emails.send({
        // Use 'onboarding@resend.dev' for testing, or your verified domain email
        from: 'ScaleOS <onboarding@resend.dev>', // TODO: Change to your domain email once verified
        to: to,
        subject: 'Your ScaleOS Scalability Diagnostic Report',
        html: `
          <h2>Hi there,</h2>
          <p>Thank you for completing the ScaleOS Scalability Diagnostic!</p>
          <p><strong>Your Score:</strong> ${score} / 60</p>
          <p><strong>Category:</strong> ${category}</p>
          <p><strong>Maturity Level:</strong> ${maturityLabel}</p>
          <p>Your full PDF report is attached.</p>
          <p>Best regards,<br>Doug & Jim</p>
        `,
        attachments: [
          {
            filename: 'scalability-report.pdf',
            content: pdfBuffer,
          },
        ],
      });
      
      console.log('[API] Email sent successfully via Resend:', JSON.stringify(emailResult, null, 2));
      return res.status(200).json({ 
        success: true,
        message: 'Email sent successfully' 
      });
    } catch (resendError: any) {
      console.error('[API] Resend error details:', {
        message: resendError.message,
        name: resendError.name,
        stack: resendError.stack,
        response: resendError.response ? JSON.stringify(resendError.response, null, 2) : 'No response',
      });
      
      // Provide more helpful error messages
      let errorMessage = 'Failed to send email via Resend';
      if (resendError.message) {
        errorMessage = resendError.message;
      }
      if (resendError.response) {
        errorMessage = `Resend API error: ${JSON.stringify(resendError.response)}`;
      }
      
      return res.status(500).json({ 
        success: false,
        error: errorMessage,
        details: resendError.message || 'Unknown error'
      });
    }

    // Example with SendGrid (uncomment and configure):
    /*
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    
    await sgMail.send({
      to: to,
      from: 'noreply@yourdomain.com',
      subject: 'Your ScaleOS Scalability Diagnostic Report',
      html: `
        <h2>Hi there,</h2>
        <p>Thank you for completing the ScaleOS Scalability Diagnostic!</p>
        <p><strong>Your Score:</strong> ${score} / 60</p>
        <p><strong>Category:</strong> ${category}</p>
        <p><strong>Maturity Level:</strong> ${maturityLabel}</p>
        <p>Your full PDF report is attached.</p>
        <p>Best regards,<br>Doug & Jim</p>
      `,
      attachments: [
        {
          content: pdfBase64,
          filename: 'scalability-report.pdf',
          type: 'application/pdf',
          disposition: 'attachment',
        },
      ],
    });
    
    console.log('[API] Email sent successfully via SendGrid');
    */

    // If Resend code above doesn't execute, this won't be reached
    // But keeping as fallback just in case
    console.error('[API] Email sending code path not reached');
    return res.status(500).json({ 
      success: false,
      error: 'Email service not properly configured' 
    });
  } catch (error: any) {
    console.error('[API] Error sending email:', {
      error: error.message,
      stack: error.stack,
    });
    return res.status(500).json({ 
      success: false,
      error: 'Failed to send email',
      message: error.message 
    });
  }
}

