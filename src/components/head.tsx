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
        content={`${process.env.ORIGIN_URL}/images/icon_horse.png`}
      />
    </>
  );
};

export default SeoHead;
