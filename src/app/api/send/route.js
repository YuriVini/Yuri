import { NextResponse } from "next/server";
import nodemailer from "nodemailer"

const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) {
  const { email, subject, message } = await req.json();

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: fromEmail,
        pass: process.env.EMAIL_PASSWORD,
      },
    })
    
    const mailInfo = {
      from: fromEmail,
      to: fromEmail,
      subject: `${subject}`,
      html: `
              <div>
                <p>New message submitted from: ${email}</p>
                <p>${message}<p>
              </div>
            `
    }

    transporter.sendMail(mailInfo,
     (error) => {
       if (error) {
         return NextResponse.json({ error: "Failed to send email" }, { status: 400 })
       }
     }
    )
  
    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 })
  }
}
