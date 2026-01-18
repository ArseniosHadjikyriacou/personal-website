import { ContactEmailTemplate } from '@/components/ContactEmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    const { data, error } = await resend.emails.send({
      from: 'Personal Website <noreply@arsenioshadjikyriacou.com>',
      to: ['arsenhad@gmail.com'],
      replyTo: email,
      subject: `Contact Form from ${name}`,
      react: ContactEmailTemplate({ name, email, message }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
