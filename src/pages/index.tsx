import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Layout from '@/components/layout';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <p>
        testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttestほげほげほげほげほげほげほげほげほげ
      </p>
    </Layout>
  );
};

export default IndexPage;

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
