import { clsx } from 'clsx';
import { StaticImage } from 'gatsby-plugin-image';
import { useI18next } from 'gatsby-plugin-react-i18next';
import React, { useState } from 'react';
import AppLink from '@/components/appLink';
import { PAGE_URL, EXTERNAL_PAGE_URL } from '@/constants/pages';

/**
 * 現在地のリンクはグレーにする→リンクコンポ作成（内部、外部統合）
 */
const HeaderSp: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { originalPath } = useI18next();

  const handleClick = () => {
    setIsMenuOpen((current) => !current);
  };

  return (
    <>
      <div className="mx-auto flex h-14 items-center justify-between bg-transparent px-3">
        <AppLink type="withoutUnderline" to={PAGE_URL.TOP}>
          <div className="flex items-center">
            <StaticImage
              alt="horse icon"
              src="../images/icon_horse.png"
              className="h-[30px] w-[30px] rounded-full border border-text-black"
            />
            <div className="ml-2">
              <p>kzk4043's</p>
              <p className="text-[10px]">PORTFOLIO</p>
            </div>
          </div>
        </AppLink>
        <div className="relative flex">
          <div
            className={clsx(
              'ease-[cubic-bezier(0.19, 1, 0.22, 1)] relative h-9 w-9 cursor-pointer transition duration-300',
              {
                'rotate-180': isMenuOpen,
              }
            )}
            onClick={handleClick}
          >
            <span
              className={clsx(
                'ease-[cubic-bezier(0.19, 1, 0.22, 1)] absolute left-1 top-2 inline-block h-1 w-7 bg-text-black transition duration-200',
                { 'translate-y-[8px] rotate-[-45deg]': isMenuOpen }
              )}
            ></span>
            <span
              className={clsx(
                'ease-[cubic-bezier(0.19, 1, 0.22, 1)] absolute left-1 top-4 inline-block h-1 w-7 bg-text-black transition duration-200',
                { 'opacity-0': isMenuOpen }
              )}
            ></span>
            <span
              className={clsx(
                'ease-[cubic-bezier(0.19, 1, 0.22, 1)] absolute left-1 top-6 inline-block h-1 w-7 bg-text-black transition duration-200',
                { 'translate-y-[-8px] rotate-[45deg]': isMenuOpen }
              )}
            ></span>
          </div>
        </div>
      </div>
      <div
        className={clsx(
          'fixed left-0 top-0 z-10 h-full w-full bg-[rgba(0,0,0,0.7)] transition',
          {
            'pointer-events-none opacity-0': !isMenuOpen,
            'opacity-1 pointer-events-auto': isMenuOpen,
          }
        )}
        onClick={handleClick}
      >
        <div
          className={clsx(
            'fixed top-0 flex h-full w-[70%] flex-col justify-between bg-white px-3 py-2.5 transition-all',
            {
              'right-[-70%]': !isMenuOpen,
              'right-0': isMenuOpen,
            }
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative flex h-14 justify-end">
            <div
              className={clsx(
                'ease-[cubic-bezier(0.19, 1, 0.22, 1)] relative h-9 w-9 cursor-pointer transition duration-300',
                {
                  'rotate-180': isMenuOpen,
                }
              )}
              onClick={handleClick}
            >
              <span
                className={clsx(
                  'ease-[cubic-bezier(0.19, 1, 0.22, 1)] absolute left-1 top-2 inline-block h-1 w-7 bg-text-black transition duration-200',
                  { 'translate-y-[8px] rotate-[-45deg]': isMenuOpen }
                )}
              ></span>
              <span
                className={clsx(
                  'ease-[cubic-bezier(0.19, 1, 0.22, 1)] absolute left-1 top-4 inline-block h-1 w-7 bg-text-black transition duration-200',
                  { 'opacity-0': isMenuOpen }
                )}
              ></span>
              <span
                className={clsx(
                  'ease-[cubic-bezier(0.19, 1, 0.22, 1)] absolute left-1 top-6 inline-block h-1 w-7 bg-text-black transition duration-200',
                  { 'translate-y-[-8px] rotate-[45deg]': isMenuOpen }
                )}
              ></span>
            </div>
          </div>
          <div className="px-10">
            <div className="flex flex-col border-b border-text-black pb-4 text-xl leading-10">
              <AppLink type="withoutUnderline" to={PAGE_URL.ABOUT}>
                ABOUT
              </AppLink>
              <AppLink type="withoutUnderline" to={PAGE_URL.SKILLS}>
                SKILLS
              </AppLink>
              <AppLink type="withoutUnderline" to={PAGE_URL.WORKS}>
                WORKS
              </AppLink>
              <AppLink type="withoutUnderline" to={PAGE_URL.CONTACT}>
                CONTACT
              </AppLink>
            </div>
            <div className="flex flex-col pt-4 text-xl leading-10">
              <a href={EXTERNAL_PAGE_URL.ZENN}>
                <StaticImage
                  alt="zenn icon"
                  src="../images/icon_zenn.png"
                  className="mr-2 w-10"
                />
                <span>Zenn</span>
              </a>
              <a href={EXTERNAL_PAGE_URL.GITHUB}>
                <StaticImage
                  alt="github icon"
                  src="../images/icon_github.png"
                  className="mr-2 w-10"
                />
                <span>Github</span>
              </a>
              <a href={EXTERNAL_PAGE_URL.CODEPEN}>
                <StaticImage
                  alt="codepen icon"
                  src="../images/icon_codepen.png"
                  className="mr-2 w-10"
                />
                <span>Codepen</span>
              </a>
            </div>
          </div>
          <div className="mx-auto flex text-sm">
            <div className="w-10 border-r border-text-black text-center">
              <AppLink to={originalPath} language="ja">
                JA
              </AppLink>
            </div>
            <div className="w-10 text-center">
              <AppLink to={originalPath} language="en">
                EN
              </AppLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderSp;
