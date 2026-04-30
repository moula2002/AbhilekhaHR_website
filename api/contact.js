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

  const { name, email, phone, companyName, source, subject, message, position, experience, resumeData, resumeName } = req.body;

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
      subject: subject || (isJobApplication ? `Job Application: ${position} - ${name}` : `New Inquiry from ${name}`),
      text: `
        Name: ${name}
        Email: ${email || 'N/A'}
        Phone: ${phone || 'N/A'}
        ${companyName ? `Company: ${companyName}` : ''}
        ${source ? `Source: ${source}` : ''}
        ${position ? `Position: ${position}` : ''}
        ${experience ? `Experience: ${experience}` : ''}
        ${subject ? `Subject: ${subject}` : ''}
        
        Message:
        ${message || 'No message provided.'}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 30px; color: #1e293b; background-color: #f8fafc; border-radius: 16px; max-width: 600px; margin: auto;">
          <h2 style="color: #0f172a; border-bottom: 2px solid #e2e8f0; padding-bottom: 15px; margin-bottom: 25px;">
            ${isJobApplication ? 'New Job Application' : 'New Contact Inquiry'}
          </h2>
          <div style="background-color: #ffffff; padding: 25px; border-radius: 12px; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);">
            <p style="margin-bottom: 12px;"><strong>Name:</strong> ${name}</p>
            <p style="margin-bottom: 12px;"><strong>Email:</strong> ${email || 'N/A'}</p>
            <p style="margin-bottom: 12px;"><strong>Phone:</strong> ${phone || 'N/A'}</p>
            ${companyName ? `<p style="margin-bottom: 12px;"><strong>Company:</strong> ${companyName}</p>` : ''}
            ${source ? `<p style="margin-bottom: 12px;"><strong>Source:</strong> ${source}</p>` : ''}
            ${position ? `<p style="margin-bottom: 12px;"><strong>Position:</strong> ${position}</p>` : ''}
            ${experience ? `<p style="margin-bottom: 12px;"><strong>Experience:</strong> ${experience}</p>` : ''}
            ${subject ? `<p style="margin-bottom: 12px;"><strong>Subject:</strong> ${subject}</p>` : ''}
            
            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 25px 0;" />
            
            <h3 style="color: #334155; margin-bottom: 12px;">Message:</h3>
            <p style="white-space: pre-wrap; color: #475569; line-height: 1.6; font-size: 15px;">
              ${message || 'No message provided.'}
            </p>
            
            ${resumeData ? `<p style="margin-top: 30px; padding: 12px; background-color: #f1f5f9; border-radius: 8px; color: #64748b; font-size: 13px; text-align: center;">
              📎 A resume has been attached to this application.
            </p>` : ''}
          </div>
          <p style="text-align: center; color: #94a3b8; font-size: 12px; margin-top: 25px;">
            This email was sent from the Abhilekha Information contact form.
          </p>
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
