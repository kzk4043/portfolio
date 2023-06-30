import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';
import AppLink from '@/components/appLink';

export type Props = {
  /** タイトル */
  title: string;
  /** カード情報リスト */
  cardList: Array<{
    /** カードタイトル */
    title: string;
    /** URL */
    url: string;
    /** カード説明 */
    description: string;
    /** 使用技術 */
    technology?: string;
    /** カード画像 */
    image?: IGatsbyImageData;
    /** カードリンク */
    linkList?: Array<{
      /** カードリンクタイトル */
      title: string;
      /** カードリンクURL */
      url: string;
    }>;
  }>;
};

const WorkCardList: React.FC<Props> = ({ title, cardList = [] }) => {
  return (
    <div>
      <h2>{title}</h2>
      <hr />
      <div className="mt-5 flex flex-wrap gap-5">
        {cardList.map(
          ({ title, url, description, technology, image, linkList = [] }) => (
            <div key={title} className="relative w-[23%] lg:mb-10 lg:w-full">
              {image && (
                <GatsbyImage
                  alt={title}
                  image={image}
                  className="aspect-[243/131] w-full"
                  objectFit="contain"
                />
              )}
              <div className="absolute left-0 top-0 aspect-[243/131] w-full rounded-t-lg bg-[#125E8A] opacity-10 mix-blend-multiply"></div>
              <p className="mt-2 font-bold">
                <AppLink type="inline" to={url}>
                  {title}
                </AppLink>
              </p>
              <p className="mt-2">{description}</p>
              {technology && <p>{technology}</p>}
              {linkList.length > 0 && (
                <p>
                  {linkList.map(({ title, url }, index) => (
                    <span className="mr-3" key={index}>
                      <AppLink type="inline" to={url}>
                        {title}
                      </AppLink>
                    </span>
                  ))}
                </p>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default WorkCardList;
