import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
    tls: {
        rejectUnauthorized: false
    }
});

interface EmailData {
    name: string;
    email: string;
    message: string;
}

const generateEmailHTML = (data: EmailData): string => {
    const currentDate = new Date().toLocaleString('en-US', {
        dateStyle: 'long',
        timeStyle: 'short'
    });

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact — Portfolio</title>
        <style>
            body {
                margin: 0;
                padding: 0;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                background-color: #f4f4f4;
            }
            .email-container {
                max-width: 600px;
                margin: 20px auto;
                background-color: #ffffff;
                border-radius: 8px;
                overflow: hidden;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            }
            .header {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: #ffffff;
                padding: 30px;
                text-align: center;
            }
            .header h1 {
                margin: 0;
                font-size: 24px;
                font-weight: 600;
            }
            .header p {
                margin: 10px 0 0 0;
                font-size: 14px;
                opacity: 0.9;
            }
            .content {
                padding: 40px 30px;
            }
            .info-block {
                margin-bottom: 25px;
            }
            .info-label {
                font-size: 12px;
                text-transform: uppercase;
                color: #667eea;
                font-weight: 600;
                letter-spacing: 0.5px;
                margin-bottom: 8px;
            }
            .info-value {
                font-size: 16px;
                color: #333333;
                padding: 12px;
                background-color: #f8f9fa;
                border-left: 3px solid #667eea;
                border-radius: 4px;
            }
            .message-box {
                background-color: #f8f9fa;
                padding: 20px;
                border-radius: 6px;
                border-left: 3px solid #764ba2;
                margin-top: 10px;
            }
            .message-box p {
                margin: 0;
                color: #333333;
                line-height: 1.6;
                font-size: 15px;
                white-space: pre-wrap;
            }
            .project-type-badge {
                display: inline-block;
                padding: 8px 16px;
                background-color: #667eea;
                color: #ffffff;
                border-radius: 20px;
                font-size: 14px;
                font-weight: 500;
                text-transform: capitalize;
            }
            .footer {
                background-color: #f8f9fa;
                padding: 20px;
                text-align: center;
                border-top: 1px solid #e9ecef;
            }
            .footer p {
                margin: 0;
                color: #6c757d;
                font-size: 13px;
            }
            .cta-button {
                display: inline-block;
                margin-top: 20px;
                padding: 12px 30px;
                background-color: #667eea;
                color: #ffffff;
                text-decoration: none;
                border-radius: 6px;
                font-weight: 600;
            }
            .divider {
                height: 1px;
                background-color: #e9ecef;
                margin: 30px 0;
            }
        </style>
    </head>
    <body>
        <div class="email-container">
            <div class="header">
                <h1>📧 New Contact Message</h1>
                <p>You received a new message through your portfolio contact form</p>
            </div>

            <div class="content">
                <div class="info-block">
                    <div class="info-label">👤 Name</div>
                    <div class="info-value">${data.name}</div>
                </div>

                <div class="info-block">
                    <div class="info-label">✉️ Email</div>
                    <div class="info-value">
                        <a href="mailto:${data.email}" style="color: #667eea; text-decoration: none;">
                            ${data.email}
                        </a>
                    </div>
                </div>

                <div class="divider"></div>

                <div class="info-block">
                    <div class="info-label">💬 Message</div>
                    <div class="message-box">
                        <p>${data.message}</p>
                    </div>
                </div>

                <div style="text-align: center;">
                    <a href="mailto:${data.email}" class="cta-button">
                        Reply to ${data.name}
                    </a>
                </div>
            </div>

            <div class="footer">
                <p>This email was automatically generated by your portfolio contact form</p>
                <p style="margin-top: 10px; font-size: 12px;">
                    Received on: ${currentDate}
                </p>
            </div>
        </div>
    </body>
    </html>`;
};

const generateEmailText = (data: EmailData): string => {
    return `
NEW CONTACT MESSAGE

Name: ${data.name}
Email: ${data.email}

Message:
${data.message}

---
This email was automatically generated by your portfolio contact form
Received on: ${new Date().toLocaleString('en-US')}
    `.trim();
};

export const sendEmail = async (data: EmailData) => {
    const to = process.env.CONTACT_EMAIL;
    const subject = `New Contact via Portfolio — ${data.name}`;
    
    const html = generateEmailHTML(data);
    const text = generateEmailText(data);

    const mailOptions = {
        from: '"Kelwin Portfolio" <sistemadeenvioautomatico2@gmail.com>',
        to,
        subject,
        text,
        html,
    };

    await transporter.sendMail(mailOptions).then(
        (info) => {
            transporter.close();
            return info;
        },
        (error) => {
            console.error('Error sending email:', error);
            throw error;
        },
    );
};
