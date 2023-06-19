import { graphql, type HeadFC, type PageProps } from 'gatsby';
import * as React from 'react';
import Layout from '@/components/layout';
import WorkCardList from '@/components/workCardList';
import { EXTERNAL_PAGE_URL } from '@/constants/pages';

/**
 * GraphQLクエリの書き方調べる
 * まずはfileでpublicPathを試す
 */
const WorksPage: React.FC<PageProps> = ({ data }) => {
  const personalDevCardList = [
    {
      title: 'ポートフォリオ',
      url: EXTERNAL_PAGE_URL.PORTFOLIO,
      description: 'このサイトです。',
      technology: 'Gatsby.js/TypeScript/Tailwind CSS',
      image: data.horse.childImageSharp.gatsbyImageData,
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
      description:
        '不定期で技術記事を書いています。主にフロントエンドについて書いています。',
      image: data.zenn.childImageSharp.gatsbyImageData,
    },
    {
      title: 'Github',
      url: EXTERNAL_PAGE_URL.GITHUB,
      description: '私のリポジトリです。',
      image: data.github.childImageSharp.gatsbyImageData,
    },
    {
      title: 'Codepen',
      url: EXTERNAL_PAGE_URL.CODEPEN,
      description: 'ちょっとしたアニメーションとかCSSを試すのに使っています。',
      image: data.codepen.childImageSharp.gatsbyImageData,
    },
    {
      title: 'Twitter',
      url: EXTERNAL_PAGE_URL.TWITTER,
      description: '見る専。',
      image: data.twitter.childImageSharp.gatsbyImageData,
    },
  ];

  return (
    <Layout>
      <div className="lg:px-5 lg:pb-5">
        <div className="mt-14">
          <WorkCardList title="個人開発" cardList={personalDevCardList} />
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
