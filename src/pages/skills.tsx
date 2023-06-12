import { graphql, type HeadFC, type PageProps } from 'gatsby';
import * as React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import AppLink from '@/components/appLink';
import Layout from '@/components/layout';

const SkillsPage: React.FC<PageProps> = () => {
  const data = [
    {
      subject: 'プロジェクトマネジメント',
      score: 4,
    },
    {
      subject: 'デザイン',
      score: 1,
    },
    {
      subject: 'フロントエンド',
      score: 4,
    },
    {
      subject: 'バックエンド',
      score: 1,
    },
    {
      subject: 'インフラ',
      score: 1,
    },
    {
      subject: 'その他',
      score: 3,
    },
  ];
  const tickLevel = [
    '未経験',
    '個人開発、研修',
    '駆け出し',
    '中堅',
    'プロジェクトリーダ',
    'テックリード',
  ];

  return (
    <Layout>
      <div className="flex lg:flex-col">
        <div className="w-[50%] shrink-0 lg:w-full">
          <ResponsiveContainer width="100%" aspect={1}>
            <RadarChart cx="50%" cy="50%" outerRadius="65%" data={data}>
              <PolarGrid />
              <PolarAngleAxis
                dataKey="subject"
                tick={{
                  fill: '#0b1013',
                }}
              />
              <PolarRadiusAxis
                angle={90}
                domain={[0, 5]}
                tickCount={6}
                tickFormatter={(value, index) =>
                  `${value}: ${tickLevel[index]}`
                }
                tick={{
                  fill: '#0b101360',
                  fontSize: 12,
                }}
              />
              <Radar
                dataKey="score"
                stroke="#125E8A"
                fill="#125E8A"
                fillOpacity={0.6}
              />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </div>
        <div className="ml-14 mt-14 lg:ml-0 lg:mt-0 lg:px-5 lg:pb-5">
          <h2 className="font-bold underline">プロジェクトマネジメント</h2>
          <p className="mt-3">アジャイル/ウォーターフォール</p>
          <p className="mt-2">
            富士通時代はプロジェクトマネージャとして、SaaSのカスタマイズプロジェクト、およびそのシステムの保守部隊の構築を担当していました。開発/保守はインドのチームと、アジャイルでの開発でした。チームラボではウォーターフォールでの開発がメインとなります。
          </p>
          <h2 className="mt-8 font-bold underline">デザイン</h2>
          <p className="mt-3">
            実務経験はありませんが、このポートフォリオサイトのデザインをはじめ勉強中です。
          </p>
          <h2 className="mt-8 font-bold underline">フロントエンド</h2>
          <p className="mt-3">Next.js/Nuxt.js/TypeScript/HTML/CSS</p>
          <p className="mt-2">
            チームラボではフロントエンド班に所属しており、私のメインスキルになります。Next.js/Nuxt.jsでの構築経験があり、中規模プロジェクトのフロントエンドリーダも経験させていただきました。
          </p>
          <h2 className="mt-8 font-bold underline">バックエンド</h2>
          <p className="mt-3">
            実務経験はありませんが、
            <AppLink to="https://praha-challenge.com">プラハチャレンジ</AppLink>
            という中級エンジニア向けブートキャンプにて勉強中です。
          </p>
          <h2 className="mt-8 font-bold underline">インフラ</h2>
          <p className="mt-3">
            実務経験はありませんが、
            <AppLink to="https://praha-challenge.com">プラハチャレンジ</AppLink>
            という中級エンジニア向けブートキャンプにて勉強中です。AWSクラウドプラクティショナー取得。
          </p>
          <h2 className="mt-8 font-bold underline">その他</h2>
          <p className="mt-3">採用/Git/Github/Gitlab/Slack/GAS</p>
          <p className="mt-2">
            チームラボへの入社後採用にも関わらせていただいており、書類選考/面接から、フロントエンド班における採用ルールの整備なども担当させていただきました。業務効率化のため簡単なSlackアプリの導入なども行っています。
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default SkillsPage;

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
