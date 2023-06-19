import { graphql, type HeadFC, type PageProps } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import * as React from 'react';
import Layout from '@/components/layout';
import WorkCardList from '@/components/workCardList';
import { EXTERNAL_PAGE_URL } from '@/constants/pages';

const WorksPage: React.FC<PageProps<Queries.WorksPageQuery>> = ({ data }) => {
  const { t } = useTranslation();
  const personalDevCardList = [
    {
      title: t('ポートフォリオ'),
      url: EXTERNAL_PAGE_URL.PORTFOLIO,
      description: t('このサイトです。'),
      technology: 'Gatsby.js/TypeScript/Tailwind CSS',
      image: data.horse?.childImageSharp?.gatsbyImageData,
      linkList: [
        {
          title: 'github',
          url: 'https://github.com/kzk4043/portfolio',
        },
      ],
    },
  ];
  const snsCardList = [
    {
      title: 'Zenn',
      url: EXTERNAL_PAGE_URL.ZENN,
      description: t(
        '不定期で技術記事を書いています。主にフロントエンドについて書いています。'
      ),
      image: data.zenn?.childImageSharp?.gatsbyImageData,
    },
    {
      title: 'Github',
      url: EXTERNAL_PAGE_URL.GITHUB,
      description: t('私のリポジトリです。'),
      image: data.github?.childImageSharp?.gatsbyImageData,
    },
    {
      title: 'Codepen',
      url: EXTERNAL_PAGE_URL.CODEPEN,
      description: t(
        'ちょっとしたアニメーションとかCSSを試すのに使っています。'
      ),
      image: data.codepen?.childImageSharp?.gatsbyImageData,
    },
    {
      title: 'Twitter',
      url: EXTERNAL_PAGE_URL.TWITTER,
      description: t('見る専。'),
      image: data.twitter?.childImageSharp?.gatsbyImageData,
    },
  ];

  return (
    <Layout>
      <div className="lg:px-5">
        <div className="mt-14">
          <WorkCardList title={t('個人開発')} cardList={personalDevCardList} />
        </div>
        <div className="mt-14">
          <WorkCardList title="SNS" cardList={snsCardList} />
        </div>
      </div>
    </Layout>
  );
};

export default WorksPage;

export const Head: HeadFC = () => <title>Home Page</title>;

/** query名をコンポーネントと揃えると、型を自動生成してくれる */
export const query = graphql`
  query WorksPage($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    horse: file(relativePath: { eq: "icon_horse.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    zenn: file(relativePath: { eq: "icon_zenn.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    github: file(relativePath: { eq: "icon_github.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    codepen: file(relativePath: { eq: "icon_codepen.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    twitter: file(relativePath: { eq: "icon_twitter.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`;
