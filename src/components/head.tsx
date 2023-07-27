import React from 'react';

export type Props = {
  /** language */
  language: string;
  /** タイトル */
  title: string;
  /** description */
  description: string;
};

const SeoHead: React.FC<Props> = ({ language, title, description }) => {
  return (
    <>
      <html lang={language} />
      <title>{title} | kzk4043's PORTFOLIO</title>
      <meta name="description" content={description} />
      <meta name="twitter:card" content="summary" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content={`${process.env.GATSBY_ORIGIN_URL}/images/icon_horse.png`}
      />
      <meta
        name="google-site-verification"
        content="h7X70s1jr_2kieEOWeDhPaXuEO5Yb2LkLTTdPEFM14Q"
      />
    </>
  );
};

export default SeoHead;
