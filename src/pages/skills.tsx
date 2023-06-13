import { graphql, type HeadFC, type PageProps } from 'gatsby';
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
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
  const { t } = useTranslation();
  const data = [
    {
      subject: t('プロジェクトマネジメント'),
      score: 4,
    },
    {
      subject: t('デザイン'),
      score: 1,
    },
    {
      subject: t('フロントエンド'),
      score: 4,
    },
    {
      subject: t('バックエンド'),
      score: 1,
    },
    {
      subject: t('インフラ'),
      score: 1,
    },
    {
      subject: t('その他'),
      score: 3,
    },
  ];
  const tickLevel = [
    t('未経験'),
    t('個人開発、研修'),
    t('駆け出し'),
    t('中堅'),
    t('プロジェクトリーダ'),
    t('テックリード'),
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
          <h2 className="font-bold underline">
            <Trans>プロジェクトマネジメント</Trans>
          </h2>
          <p className="mt-3">
            <Trans>アジャイル/ウォーターフォール</Trans>
          </p>
          <p className="mt-2">
            <Trans>
              富士通時代はプロジェクトマネージャとして、SaaSのカスタマイズプロジェクト、およびそのシステムの保守部隊の構築を担当していました。開発/保守はインドのチームと、アジャイルでの開発でした。チームラボではウォーターフォールでの開発がメインとなります。
            </Trans>
          </p>
          <h2 className="mt-8 font-bold underline">
            <Trans>デザイン</Trans>
          </h2>
          <p className="mt-3">Figma</p>
          <p className="mt-2">
            <Trans>
              実務経験はありませんが、このポートフォリオサイトのデザインをはじめ勉強中です。
            </Trans>
          </p>
          <h2 className="mt-8 font-bold underline">
            <Trans>フロントエンド</Trans>
          </h2>
          <p className="mt-3">Next.js/Nuxt.js/TypeScript/HTML/CSS</p>
          <p className="mt-2">
            <Trans>
              チームラボではフロントエンド班に所属しており、私のメインスキルになります。Next.js/Nuxt.jsでの構築経験があり、中規模プロジェクトのフロントエンドリーダも経験させていただきました。
            </Trans>
          </p>
          <h2 className="mt-8 font-bold underline">
            <Trans>バックエンド</Trans>
          </h2>
          <p className="mt-3">
            <Trans
              i18nKey="backend"
              components={{
                l: (
                  <AppLink to="https://praha-challenge.com">
                    プラハチャレンジ
                  </AppLink>
                ),
              }}
            />
          </p>
          <h2 className="mt-8 font-bold underline">
            <Trans>インフラ</Trans>
          </h2>
          <p className="mt-3">AWS</p>
          <p className="mt-2">
            <Trans
              i18nKey="infrastructure"
              components={{
                l: (
                  <AppLink to="https://praha-challenge.com">
                    プラハチャレンジ
                  </AppLink>
                ),
              }}
            />
          </p>
          <h2 className="mt-8 font-bold underline">
            <Trans>その他</Trans>
          </h2>
          <p className="mt-3">
            <Trans>採用/班長/相談役/Git/Github/Gitlab/Slack/GAS</Trans>
          </p>
          <p className="mt-2">
            <Trans>
              チームラボへの入社後採用にも関わらせていただいており、書類選考/面接から、フロントエンド班における採用ルールの整備なども担当させていただきました。業務効率化のため簡単なSlackアプリの導入なども行っています。
            </Trans>
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
