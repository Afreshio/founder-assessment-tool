// Netlify serverless function for sending email reports
// Configure with your email service (Resend, SendGrid, Postmark, etc.)

import { Handler } from '@netlify/functions';

export const handler: Handler = async (event, context) => {
  // Set CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ success: false, error: 'Method not allowed' }),
    };
  }

  try {
    const { to, pdfBase64, answers, score, category, maturityLabel } = JSON.parse(event.body || '{}');

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
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ success: false, error: 'Missing required fields: to and pdfBase64 are required' }),
      };
    }

    // Convert base64 to buffer
    let pdfBuffer: Buffer;
    try {
      pdfBuffer = Buffer.from(pdfBase64, 'base64');
      console.log('[API] PDF buffer created, size:', pdfBuffer.length, 'bytes');
    } catch (error: any) {
      console.error('[API] Failed to decode PDF base64:', error);
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ success: false, error: 'Invalid PDF base64 encoding' }),
      };
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
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ 
          success: false,
          error: 'Email service not configured. RESEND_API_KEY is missing.' 
        }),
      };
    }
    
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    try {
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
      
      console.log('[API] Email sent successfully via Resend:', emailResult);
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ 
          success: true,
          message: 'Email sent successfully' 
        }),
      };
    } catch (resendError: any) {
      console.error('[API] Resend error:', resendError);
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ 
          success: false,
          error: 'Failed to send email via Resend',
          message: resendError.message || 'Unknown error'
        }),
      };
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

    // For now, return success (you'll need to implement actual email sending)
    // In production, replace this with actual email service integration
    console.log('[API] Email would be sent to:', to);
    console.log('[API] PDF size:', pdfBuffer.length, 'bytes');
    console.log('[API] Returning success (placeholder - configure email service)');

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        success: true,
        message: 'Email sent successfully (placeholder - configure email service)' 
      }),
    };
  } catch (error: any) {
    console.error('[API] Error sending email:', {
      error: error.message,
      stack: error.stack,
    });
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        success: false,
        error: 'Failed to send email',
        message: error.message 
      }),
    };
  }
};
