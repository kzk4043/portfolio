import emailjs from '@emailjs/browser';
import { clsx } from 'clsx';
import { graphql, type HeadFC, type PageProps } from 'gatsby';
import { Trans } from 'gatsby-plugin-react-i18next';
import React from 'react';
import Layout from '@/components/layout';

/**
 * ・ReCaptcha
 */
const ContactPage: React.FC<PageProps> = () => {
  const form = React.useRef<HTMLFormElement>(null);
  const [emailStatus, setEmailStatus] = React.useState<
    'typing' | 'ready' | 'sending' | 'sent' | 'error'
  >('typing');

  /** メールを送信 */
  const sendEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.current || emailStatus !== 'ready') {
      return;
    }

    try {
      setEmailStatus('sending');

      await emailjs.sendForm(
        'service_gajfc0u',
        'template_0frletv',
        form.current,
        '2aJrhnLqd2u5p_3Yz'
      );

      setEmailStatus('sent');
      // 表示時間
      await new Promise((resolve) => setTimeout(resolve, 3000));

      // フォームの内容をリセット（なぜかリキャストしないとエラーになる）
      (event.target as HTMLFormElement).reset();
      setEmailStatus('typing');
    } catch (error) {
      setEmailStatus('error');
      // 表示時間
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setEmailStatus('typing');
    }
  };

  /** フォームのバリデーションチェック */
  const checkValidity = () => {
    if (!form.current) return;

    const isValid = form.current.checkValidity();

    if (isValid) {
      setEmailStatus('ready');

      return;
    }

    setEmailStatus('typing');
  };

  return (
    <Layout>
      <div className="mt-14 w-full">
        <div className="mx-auto w-[50%] lg:w-full lg:px-5">
          <p>
            <Trans>お仕事等のご依頼は下記よりお願いいたします。</Trans>
          </p>
          <form ref={form} onSubmit={sendEmail} className="mt-14 flex flex-col">
            <label htmlFor="user_name">Name</label>
            <input
              id="user_name"
              type="text"
              name="user_name"
              className="border bg-white p-1"
              required
              onChange={checkValidity}
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
              onChange={checkValidity}
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
                checkValidity();
                // これ入れないとサイズが変わったあとに内容を削除したときなど動きがおかしい
                e.target.style.height = 'auto';
                // 改行に合わせて高さを変える
                e.target.style.height = e.target.scrollHeight + 'px';
              }}
            />
            <div
              className={clsx('mx-auto mt-14 font-bold transition-all', {
                'w-[20%] cursor-not-allowed rounded-lg bg-text-main text-white opacity-30':
                  emailStatus === 'typing',
                'w-[20%] cursor-pointer rounded-lg bg-text-main text-white':
                  emailStatus === 'ready',
                'h-[40px] w-[40px] animate-spinner cursor-not-allowed rounded-full border-4 border-text-main-20 border-t-text-main bg-transparent text-transparent':
                  emailStatus === 'sending',
                'relative h-[40px] w-[40px] animate-pop-in cursor-not-allowed rounded-full border-4 border-ok bg-transparent text-transparent after:absolute after:left-[7px] after:top-[9px] after:h-[10px] after:w-[20px] after:-rotate-45 after:border-b-4 after:border-l-4 after:border-ok':
                  emailStatus === 'sent',
                'relative h-[40px] w-[40px] animate-pop-in cursor-not-allowed rounded-full border-4 border-no bg-transparent text-transparent before:absolute before:left-[50%] before:top-[50%] before:h-[4px] before:w-[20px] before:-translate-x-1/2 before:-translate-y-1/2 before:-rotate-45 before:bg-no after:absolute after:left-[50%] after:top-[50%] after:h-[4px] after:w-[20px] after:-translate-x-1/2 after:-translate-y-1/2 after:rotate-45 after:bg-no':
                  emailStatus === 'error',
              })}
            >
              <input
                type="submit"
                value="Send"
                className={clsx('w-full p-2', {
                  'cursor-not-allowed':
                    emailStatus === 'typing' ||
                    emailStatus === 'sending' ||
                    emailStatus === 'sent' ||
                    emailStatus === 'error',
                  'cursor-pointer': emailStatus === 'ready',
                })}
              />
            </div>
            {emailStatus === 'sent' && (
              <p className="mt-5 text-center">
                <Trans>メールを送信しました。</Trans>
                <br />
                <Trans>返信まで今しばらくお待ちください。</Trans>
              </p>
            )}
            {emailStatus === 'error' && (
              <p className="mt-5 text-center">
                <Trans>送信に失敗しました。</Trans>
                <br />
                <Trans>お手数ですが再度送信お願い致します。</Trans>
              </p>
            )}
          </form>
        </div>
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
