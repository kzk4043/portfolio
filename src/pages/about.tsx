import { graphql, type HeadFC, type PageProps } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { Trans, useTranslation, useI18next } from 'gatsby-plugin-react-i18next';
import * as React from 'react';
import AboutMainAnimation from '@/components/aboutMainAnimation';
import SeoHead from '@/components/head';
import Layout from '@/components/layout';
import { PAGE_TITLE, PAGE_URL } from '@/constants/pages';

const AboutPage: React.FC<PageProps> = () => {
  const { t } = useTranslation();
  const { language } = useI18next();
  const currentAge =
    new Date().getFullYear() - new Date(1990, 5, 1).getFullYear();

  return (
    <Layout>
      <div className="flex lg:flex-col-reverse">
        <div className="mt-14 lg:px-5">
          <div>
            <h2 className="font-bold">CAREER</h2>
            <div className="mt-5 flex">
              <ul className="w-14 shrink-0">
                <li>
                  <Trans>1990年</Trans>
                </li>
                <li>
                  <Trans>2009年</Trans>
                </li>
                <li>
                  <Trans>2015年</Trans>
                </li>
                <li>
                  <Trans>2016年</Trans>
                </li>
              </ul>
              <ul className="ml-8">
                <li>{t('birth', { currentAge })}</li>
                <li>
                  <Trans>大阪大学 電子情報工学科入学</Trans>
                </li>
                <li>
                  <Trans>世界一周</Trans>
                </li>
                <li>
                  <Trans>大阪大学大学院 電気電子情報工学専攻卒業</Trans>
                </li>
              </ul>
            </div>
            <div className="mt-5 flex">
              <ul className="w-14 shrink-0">
                <li>
                  <Trans>2016年</Trans>
                </li>
                <li>
                  <Trans>2019年</Trans>
                </li>
                <li>
                  <Trans>2019年</Trans>
                </li>
                <li>
                  <Trans>2023年</Trans>
                </li>
              </ul>
              <ul className="ml-8">
                <li>
                  <Trans>富士通株式会社 新卒入社</Trans>
                </li>
                <li>
                  <Trans>転職期間を利用してインドへ</Trans>
                </li>
                <li>
                  <Trans>チームラボ株式会社 中途入社</Trans>
                </li>
                <li>
                  <Trans>1年間の育休を取得</Trans>
                </li>
                {language === 'ja' && (
                  <li className="mt-5">
                    <Trans>現在に至る</Trans>
                  </li>
                )}
              </ul>
            </div>
          </div>
          <div className="mt-14">
            <h2 className="font-bold">CERTIFICATION</h2>
            <div className="mt-5 flex">
              <ul className="list-inside list-disc">
                <li>
                  <Trans>基本/応用情報技術者</Trans>
                </li>
                <li>
                  <Trans>AWSクラウドプラクティショナー</Trans>
                </li>
                <li>
                  <Trans>FP3級/簿記3級</Trans>
                </li>
                <li>
                  <Trans>TOEIC 895点</Trans>
                </li>
                <li>
                  <Trans>RYT200</Trans>
                </li>
                <li>
                  <Trans>アロマテラピー検定1級</Trans>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-14">
            <h2 className="font-bold">HOBBY</h2>
            <div className="mt-5 flex">
              <ul className="list-inside list-disc">
                <li>
                  <Trans>漫画/アニメ</Trans>
                </li>
                <li>
                  <Trans>野球（投手）</Trans>
                </li>
                <li>
                  <Trans>筋トレ（自重）</Trans>
                </li>
                <li>
                  <Trans>ボルダリング</Trans>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="grow">
          <AboutMainAnimation />
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;

export const Head: HeadFC = ({ pageContext }) => {
  // FIXME: pageContextの型の当て方がわからなかった
  const currentLang = (pageContext as { language: string }).language;

  return (
    <SeoHead
      language={currentLang}
      title={PAGE_TITLE[PAGE_URL.ABOUT]}
      description={
        // FIXME: useTranslationが使えなかった
        currentLang === 'ja'
          ? 'kzk4043の自己紹介ページです。'
          : "This is kzk4043's self-introduction page."
      }
    />
  );
};

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
