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
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
              body { font-family: 'Inter', Arial, sans-serif; -webkit-font-smoothing: antialiased; }
            </style>
          </head>
          <body style="margin: 0; padding: 0; background-color: #f1f5f9;">
            <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f1f5f9; padding: 40px 20px;">
              <tr>
                <td align="center">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; background-color: #ffffff; border-radius: 24px; overflow: hidden; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);">
                    <!-- Header -->
                    <tr>
                      <td style="background-color: #0f172a; padding: 40px; text-align: center;">
                        <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 800; letter-spacing: -0.025em; text-transform: uppercase;">
                          Abhilekha <span style="color: #f59e0b;">HR</span>
                        </h1>
                        <p style="color: #94a3b8; margin: 10px 0 0 0; font-size: 14px; font-weight: 500;">
                          ${isJobApplication ? 'Elite Talent Acquisition' : 'Corporate Strategic Partnership'}
                        </p>
                      </td>
                    </tr>

                    <!-- Title Section -->
                    <tr>
                      <td style="padding: 40px 40px 20px 40px;">
                        <h2 style="color: #0f172a; margin: 0; font-size: 20px; font-weight: 700; border-left: 4px solid #f59e0b; padding-left: 15px;">
                          ${isJobApplication ? 'New Candidate Application' : 'New Client Inquiry'}
                        </h2>
                      </td>
                    </tr>

                    <!-- Data Card -->
                    <tr>
                      <td style="padding: 0 40px 40px 40px;">
                        <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 16px; padding: 25px; margin-top: 20px;">
                          <table width="100%" border="0" cellspacing="0" cellpadding="0">
                            <tr>
                              <td style="padding-bottom: 15px; border-bottom: 1px solid #e2e8f0;">
                                <span style="color: #64748b; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 5px;">Primary Contact</span>
                                <span style="color: #0f172a; font-size: 16px; font-weight: 600;">${name}</span>
                              </td>
                            </tr>
                            <tr>
                              <td style="padding: 15px 0; border-bottom: 1px solid #e2e8f0;">
                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                  <tr>
                                    <td width="50%" style="vertical-align: top;">
                                      <span style="color: #64748b; font-size: 11px; font-weight: 700; text-transform: uppercase; display: block; margin-bottom: 3px;">Email</span>
                                      <a href="mailto:${email}" style="color: #2563eb; font-size: 14px; text-decoration: none; font-weight: 500;">${email || 'N/A'}</a>
                                    </td>
                                    <td width="50%" style="vertical-align: top;">
                                      <span style="color: #64748b; font-size: 11px; font-weight: 700; text-transform: uppercase; display: block; margin-bottom: 3px;">Phone</span>
                                      <span style="color: #0f172a; font-size: 14px; font-weight: 500;">${phone || 'N/A'}</span>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                            ${companyName || source || position || experience || subject ? `
                            <tr>
                              <td style="padding: 15px 0;">
                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                  <tr>
                                    ${companyName ? `<td style="padding-bottom: 10px;"><span style="color: #64748b; font-size: 11px; font-weight: 700; text-transform: uppercase; display: block;">Company:</span> <span style="color: #0f172a; font-size: 14px; font-weight: 500;">${companyName}</span></td>` : ''}
                                    ${source ? `<td style="padding-bottom: 10px;"><span style="color: #64748b; font-size: 11px; font-weight: 700; text-transform: uppercase; display: block;">Service/Source:</span> <span style="color: #0f172a; font-size: 14px; font-weight: 500;">${source}</span></td>` : ''}
                                  </tr>
                                  <tr>
                                    ${position ? `<td style="padding-bottom: 10px;"><span style="color: #64748b; font-size: 11px; font-weight: 700; text-transform: uppercase; display: block;">Position:</span> <span style="color: #0f172a; font-size: 14px; font-weight: 500;">${position}</span></td>` : ''}
                                    ${experience ? `<td style="padding-bottom: 10px;"><span style="color: #64748b; font-size: 11px; font-weight: 700; text-transform: uppercase; display: block;">Experience:</span> <span style="color: #0f172a; font-size: 14px; font-weight: 500;">${experience}</span></td>` : ''}
                                  </tr>
                                  ${subject ? `<tr><td colspan="2"><span style="color: #64748b; font-size: 11px; font-weight: 700; text-transform: uppercase; display: block;">Subject:</span> <span style="color: #0f172a; font-size: 14px; font-weight: 500;">${subject}</span></td></tr>` : ''}
                                </table>
                              </td>
                            </tr>` : ''}
                          </table>
                        </div>

                        <!-- Message Box -->
                        <div style="margin-top: 30px;">
                          <h3 style="color: #0f172a; font-size: 16px; font-weight: 700; margin-bottom: 10px;">Message Detail:</h3>
                          <div style="background-color: #ffffff; border-left: 4px solid #e2e8f0; padding: 15px 20px; color: #475569; font-size: 15px; line-height: 1.6; font-style: italic;">
                            ${message || 'No additional details provided.'}
                          </div>
                        </div>

                        ${resumeData ? `
                        <div style="margin-top: 30px; text-align: center;">
                          <div style="display: inline-block; padding: 12px 24px; background-color: #f59e0b; color: #ffffff; border-radius: 10px; font-weight: 700; font-size: 14px; text-decoration: none;">
                            📎 RESUME ATTACHED
                          </div>
                        </div>` : ''}
                      </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                      <td style="background-color: #f8fafc; padding: 30px; text-align: center; border-top: 1px solid #e2e8f0;">
                        <p style="color: #94a3b8; font-size: 12px; margin: 0;">
                          This is an automated notification from the Abhilekha Information portal.
                        </p>
                        <p style="color: #94a3b8; font-size: 12px; margin: 5px 0 0 0;">
                          © ${new Date().getFullYear()} Abhilekha Information Pvt. Ltd.
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </body>
        </html>
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
