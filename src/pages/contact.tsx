import emailjs from '@emailjs/browser';
import { graphql, type HeadFC, type PageProps } from 'gatsby';
import React from 'react';
import Layout from '@/components/layout';

const ContactPage: React.FC<PageProps> = () => {
  const form = React.useRef<HTMLFormElement>(null);
  const [emailStatusMessage, setEmailStatusMessage] = React.useState('');

  const sendEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.current) return;

    try {
      await emailjs.sendForm(
        'service_gajfc0u',
        'template_0frletv',
        form.current,
        '2aJrhnLqd2u5p_3Yz'
      );

      setEmailStatusMessage('メールが送信されました！返信をお待ち下さい。');
    } catch (error) {
      setEmailStatusMessage(
        'メール送信時にエラーが発生しました！お手数ですが再度送信してください。'
      );
    }
  };

  return (
    <Layout>
      <div className="w-full">
        <p>{emailStatusMessage}</p>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>
    </Layout>
  );
};

export default ContactPage;

export const Head: HeadFC = () => <title>Home Page</title>;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
