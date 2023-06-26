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
    </>
  );
};

export default SeoHead;
