import { graphql, type HeadFC, type PageProps } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import Layout from '@/components/layout';

const AboutPage: React.FC<PageProps> = () => {
  const currentAge =
    new Date().getFullYear() - new Date(1990, 5, 1).getFullYear();

  return (
    <Layout>
      <div className="flex lg:flex-col-reverse">
        <div className="mt-14 lg:px-5 lg:pb-5">
          <div>
            <h2 className="font-bold">CAREER</h2>
            <div className="mt-5 flex">
              <ul className="w-14 shrink-0">
                <li>1990年</li>
                <li>2009年</li>
                <li>2015年</li>
                <li>2016年</li>
              </ul>
              <ul className="ml-8">
                <li>誕生（現在{currentAge}才）</li>
                <li>大阪大学 電子情報工学科入学</li>
                <li>世界一周</li>
                <li>大阪大学大学院 電気電子情報工学専攻卒業</li>
              </ul>
            </div>
            <div className="mt-5 flex">
              <ul className="w-14 shrink-0">
                <li>2016年</li>
                <li>2019年</li>
                <li>2019年</li>
                <li>2023年</li>
              </ul>
              <ul className="ml-8">
                <li>富士通株式会社 新卒入社</li>
                <li>転職期間を利用してインドへ</li>
                <li>チームラボ株式会社 中途入社</li>
                <li>1年間の育休を取得</li>
                <li className="mt-5">現在に至る</li>
              </ul>
            </div>
          </div>
          <div className="mt-14">
            <h2 className="font-bold">CERTIFICATION</h2>
            <div className="mt-5 flex">
              <ul className="list-inside list-disc">
                <li>基本/応用情報技術者</li>
                <li>AWSクラウドプラクティショナー</li>
                <li>FP3級/簿記3級</li>
                <li>RYT200</li>
                <li>アロマテラピー検定1級</li>
              </ul>
            </div>
          </div>
          <div className="mt-14">
            <h2 className="font-bold">HOBBY</h2>
            <div className="mt-5 flex">
              <ul className="list-inside list-disc">
                <li>漫画/アニメ</li>
                <li>野球（投手）</li>
                <li>筋トレ（自重）</li>
                <li>ボルダリング</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-14 grow">
          <StaticImage
            alt="アニメーション化予定"
            src="../images/image_traveler.png"
            className="w-full"
          />
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;

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
