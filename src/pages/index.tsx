import { graphql, type HeadFC, type PageProps } from 'gatsby';
import * as React from 'react';
import SeoHead from '@/components/head';
import Layout from '@/components/layout';
import TopMainAnimation from '@/components/topMainAnimation';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <TopMainAnimation />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = ({ pageContext }) => {
  // FIXME: pageContextの型の当て方がわからなかった
  const currentLang = (pageContext as { language: string }).language;

  return (
    <SeoHead
      language={currentLang}
      title="TOP"
      description={
        // FIXME: useTranslationが使えなかった
        currentLang === 'ja'
          ? 'kzk4043のポートフォリオサイトです。'
          : "This is kzk4043's portfolio site."
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
