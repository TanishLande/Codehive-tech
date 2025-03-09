import nodemailer from 'nodemailer';

export const onMailerTwo = async (req) => {
  try {
    const { name, email, phone, date, time, message } = await req.json();
    
    if (!name || !email || !phone || !date || !time) {
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
    
    // Format the appointment date for better readability
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    
    // Email to the company
    const companyMailOptions = {
      to: 'craftcodehivetech@gmail.com', // Replace with your actual business email
      subject: 'New Appointment Request',
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Date: ${formattedDate}
        Time: ${time}
        Additional Information: ${message || 'None provided'}
      `,
    };
    
    // Confirmation email to the user
    const userMailOptions = {
      to: email,
      subject: `Your Appointment Confirmation`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0;">
          <h2 style="color: #1e40af; text-align: center;">Your Appointment is Scheduled</h2>
          
          <p style="font-size: 16px;">Dear ${name},</p>
          
          <p style="font-size: 16px;">Thank you for scheduling a call with our team. We've reserved the following time slot for your 15-minute consultation:</p>
          
          <div style="background-color: #f0f7ff; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p style="margin: 5px 0; font-size: 16px;"><strong>Date:</strong> ${formattedDate}</p>
            <p style="margin: 5px 0; font-size: 16px;"><strong>Time:</strong> ${time}</p>
          </div>
          
          <p style="font-size: 16px;">Our team will contact you at the scheduled time using the phone number you provided (${phone}).</p>
          
          ${message ? `<p style="font-size: 16px;"><strong>Your message:</strong> "${message}"</p>` : ''}
          
          <p style="font-size: 16px;">If you need to reschedule or have any questions before our call, please contact us at support@example.com or call +1 (555) 123-4567.</p>
          
          <p style="font-size: 16px;">We look forward to speaking with you!</p>
          
          <p style="font-size: 16px; margin-top: 30px;">Best regards,</p>
          <p style="font-size: 16px; font-weight: bold; margin: 0;">Your Business Name</p>
          <p style="font-size: 14px; color: #666; margin-top: 5px;">Creating innovative websites for businesses</p>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0;">
            <p style="font-size: 12px; color: #666;">Your Business Address, City, State ZIP<br>
            support@example.com | www.yourbusinesswebsite.com</p>
          </div>
        </div>
      `,
    };
    
    // Send both emails
    await transporter.sendMail(companyMailOptions);
    await transporter.sendMail(userMailOptions);
    
    return {
      status: 200,
      message: 'Appointment scheduled successfully!',
    };
  } catch (error) {
    console.error('Mailer error:', error);
    return {
      status: 500,
      message: error.message || 'Failed to schedule appointment.',
    };
  }
};