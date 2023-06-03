import { graphql, type HeadFC, type PageProps } from 'gatsby';
import * as React from 'react';
import Layout from '@/components/layout';

const SkillsPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className="flex h-[80vh] w-full items-center justify-center text-3xl">
        <div>coming soon</div>
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
