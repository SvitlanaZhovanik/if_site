import { type NextRequest, NextResponse } from 'next/server';

import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import { render } from '@react-email/render';

import { Email } from '@/components/common/Email';

export async function POST(request: NextRequest) {
  const { name, email, message, about, country, phone, telegram, whatsapp } =
    await request.json();

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });
  const emailHtml = render(
    Email({ email, message, name, about, country, phone, telegram, whatsapp }),
  );

  const mailOptions: Mail.Options = {
    from: process.env.NODEMAILER_EMAIL,
    to: process.env.NODEMAILER_EMAIL,
    subject: `New mail ${email}`,
    html: emailHtml,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (error: Error | null) {
        if (error) {
          reject(error.message);
        } else {
          resolve('Email sent');
        }
      });
    });

  try {
    await sendMailPromise();

    return NextResponse.json({ message: 'Email sent' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
