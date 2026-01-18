import { Html, Head, Body, Container, Heading, Text, Hr } from '@react-email/components';

interface ContactEmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export function ContactEmailTemplate({ name, email, message }: ContactEmailTemplateProps) {
  return (
    <Html>
      <Head />
      <Body style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f4f4', padding: '20px' }}>
        <Container style={{ backgroundColor: '#ffffff', padding: '30px', borderRadius: '8px', maxWidth: '600px' }}>
          <Heading style={{ color: '#333333', fontSize: '24px', marginBottom: '20px' }}>
            New Contact Form Submission
          </Heading>
          <Hr style={{ borderColor: '#e0e0e0', margin: '20px 0' }} />
          <Text style={{ fontSize: '16px', color: '#555555', marginBottom: '10px' }}>
            <strong>From:</strong> {name}
          </Text>
          <Text style={{ fontSize: '16px', color: '#555555', marginBottom: '10px' }}>
            <strong>Email:</strong> {email}
          </Text>
          <Hr style={{ borderColor: '#e0e0e0', margin: '20px 0' }} />
          <Text style={{ fontSize: '16px', color: '#555555', marginBottom: '10px' }}>
            <strong>Message:</strong>
          </Text>
          <Text style={{ fontSize: '16px', color: '#333333', lineHeight: '1.6', whiteSpace: 'pre-wrap' }}>
            {message}
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
