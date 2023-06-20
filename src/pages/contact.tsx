import emailjs from '@emailjs/browser';
import { graphql, type HeadFC, type PageProps } from 'gatsby';
import React from 'react';
import Layout from '@/components/layout';

const ContactPage: React.FC<PageProps> = () => {
  const form = React.useRef<HTMLFormElement>(null);
  const [emailStatus, setEmailStatus] = React.useState<
    'typing' | 'ready' | 'sending' | 'sent' | 'error'
  >('typing');

  const sendEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setEmailStatus('sending');

    if (!form.current) return;

    try {
      await emailjs.sendForm(
        'service_gajfc0u',
        'template_0frletv',
        form.current,
        '2aJrhnLqd2u5p_3Yz'
      );

      setEmailStatus('sent');
      // フォームの内容をリセット（なぜかリキャストしないとエラーになる）
      (event.target as HTMLFormElement).reset();
    } catch (error) {
      setEmailStatus('error');
    }
  };

  return (
    <Layout>
      <div className="mt-14 w-full">
        <div className="mx-auto w-[50%] lg:w-full lg:px-5">
          <p>{emailStatus}</p>
          <form ref={form} onSubmit={sendEmail} className="flex flex-col">
            <label htmlFor="user_name">Name</label>
            <input
              id="user_name"
              type="text"
              name="user_name"
              className="border bg-white p-1"
              required
            />
            <label htmlFor="user_email" className="mt-5">
              Email
            </label>
            <input
              id="user_email"
              type="email"
              name="user_email"
              className="border bg-white p-1"
              required
            />
            <label htmlFor="message" className="mt-5">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="overflow-visible border bg-white p-1"
              required
              onChange={(e) => {
                // これ入れないとサイズが変わったあとに内容を削除したときなど動きがおかしい
                e.target.style.height = 'auto';
                // 改行に合わせて高さを変える
                e.target.style.height = e.target.scrollHeight + 'px';
              }}
            />
            <input
              type="submit"
              value="Send"
              className="mx-auto mt-14 w-[20%] cursor-pointer rounded-lg bg-text-main p-2 font-bold text-white"
            />
          </form>
        </div>
        <div></div>
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
