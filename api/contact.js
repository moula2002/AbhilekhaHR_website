import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // CORS configuration
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, phone, subject, message, position, resumeData, resumeName } = req.body;

  if (!name || (!email && !phone)) {
    return res.status(400).json({ message: 'Missing required fields: name and (email or phone) are required.' });
  }

  // Create a transporter using SMTP
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER || process.env.VITE_EMAIL_USER,
      pass: process.env.EMAIL_PASS || process.env.VITE_EMAIL_PASS || process.env.PASSWORD,
    },
  });

  try {
    const isJobApplication = !!position;
    
    const mailOptions = {
      from: process.env.EMAIL_USER || process.env.VITE_EMAIL_USER,
      to: process.env.EMAIL_RECEIVER || process.env.EMAIL_USER || 'abhilekhainformation@gmail.com',
      subject: subject || (isJobApplication ? `Job Application: ${position} - ${name}` : `New Contact Form Submission from ${name}`),
      text: `
        Name: ${name}
        Email: ${email || 'N/A'}
        Phone: ${phone || 'N/A'}
        ${position ? `Position: ${position}` : ''}
        ${subject ? `Subject: ${subject}` : ''}
        
        Message:
        ${message || 'No message provided.'}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #ff6600;">${isJobApplication ? 'New Job Application' : 'New Contact Form Submission'}</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email || 'N/A'}</p>
          <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
          ${position ? `<p><strong>Position:</strong> ${position}</p>` : ''}
          ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ''}
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <h3>Message:</h3>
          <p style="white-space: pre-wrap;">${message || 'No message provided.'}</p>
          ${resumeData ? `<p style="margin-top: 20px; color: #666;"><em>Note: A resume has been attached to this email.</em></p>` : ''}
        </div>
      `,
      attachments: resumeData ? [
        {
          filename: resumeName || 'resume.pdf',
          content: resumeData.split('base64,')[1],
          encoding: 'base64'
        }
      ] : []
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ success: false, message: 'Failed to send email', error: error.message });
  }
}
