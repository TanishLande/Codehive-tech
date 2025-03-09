import nodemailer from 'nodemailer';

export const onMailer = async (req) => {
  try {
    const { name, email, message } = await req.json();
    
    if (!name || !email || !message) {
      throw new Error('Missing required fields.');
    }
    
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.NODE_MAILER_EMAIL,
        pass: process.env.NODE_MAILER_GMAIL_APP_PASSWORD,
      },
    });
    
    const mailOptions = {
      to: 'hr@craftcodehivetech.com',
      subject: 'Message on CraftCode Hive tech.',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };
    
    const userMailOptions = {
      to: email,
      subject: `Thank You for Contacting Craft Code Hive Tech`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd;">
          <h2 style="color: #333;">Thank You for Your Inquiry</h2>
          <p>Dear ${name},</p>
          <p>
            Thank you for contacting Craft Code Hive Tech. We have received your inquiry and appreciate your interest in our services.
          </p>
          <p>
            Our team is currently reviewing your message and will respond to your inquiry within 24-48 business hours. For your reference, here is a copy of your submitted message:
          </p>
          <blockquote style="border-left: 4px solid #ddd; padding-left: 10px; color: #555;">
            ${message}
          </blockquote>
          <p>
            Should you have any additional questions or require immediate assistance, please contact us at +91 91121 88036 or +91 91121 88031.
          </p>
          <p>We look forward to the opportunity of working with you.</p>
          <br />
          <p>Best Regards,</p>
          <p><strong>Craft Code Hive Tech</strong></p>
          <p style="font-size: 12px; color: #777;">
            Navnirman, behind Rameshwar Temple, Rupeenagar, Pune-411 062<br />
            hr@craftcodehivetech.com | www.craftcodehivetech.in
          </p>
        </div>
      `,
    };
    
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(userMailOptions);
    
    return {
      status: 200,
      message: 'Email sent successfully!',
    };
  } catch (error) {
    return {
      status: 500,
      message: error.message || 'Failed to send email.',
    };
  }
};