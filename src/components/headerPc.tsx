import { clsx } from 'clsx';
import { StaticImage } from 'gatsby-plugin-image';
import { Trans, useI18next } from 'gatsby-plugin-react-i18next';
import React, { useState } from 'react';
import AppLink from './appLink';
import { PAGE_URL, EXTERNAL_PAGE_URL, PAGE_TITLE } from '@/constants/pages';

/**
 * やることリスト
 * ・ヘッダ固定
 */
const HeaderPc: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { originalPath, language } = useI18next();
  const isTop = originalPath === PAGE_URL.TOP;
  const menuUrlList = [
    PAGE_URL.ABOUT,
    PAGE_URL.SKILLS,
    PAGE_URL.WORKS,
    PAGE_URL.CONTACT,
  ];
  /** トップのメニュ関連Tailwindクラス */
  const topMenuTop = ['top-[40px]', 'top-[70px]', 'top-[100px]', 'top-[130px]'];
  const topMenuDelay = ['', 'delay-[100ms]', 'delay-[200ms]', 'delay-[300ms]'];
  /** トップ以外のメニュ関連Tailwindクラス */
  const othersMenuDelay = [
    '',
    'delay-[50ms]',
    'delay-[100ms]',
    'delay-[150ms]',
  ];

  const handleClick = () => {
    setIsMenuOpen((current) => !current);
  };

  return (
    <div className="mx-auto flex h-24 max-w-7xl items-center justify-between">
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
          />
          <span
            className={clsx(
              'ease-[cubic-bezier(0.19, 1, 0.22, 1)] absolute left-1 top-4 inline-block h-1 w-7 bg-text-black transition duration-200',
              { 'opacity-0': isMenuOpen }
            )}
          />
          <span
            className={clsx(
              'ease-[cubic-bezier(0.19, 1, 0.22, 1)] absolute left-1 top-6 inline-block h-1 w-7 bg-text-black transition duration-200',
              { 'translate-y-[-8px] rotate-[45deg]': isMenuOpen }
            )}
          />
        </div>
        {isTop ? (
          <div>
            <h1 className="ml-6 flex h-9 items-center">
              <AppLink to={PAGE_URL.TOP} withoutUnderline>
                kzk4043's PORTFOLIO
              </AppLink>
              <span
                className={clsx(
                  'sp:hidden inline-block w-0 overflow-hidden whitespace-nowrap',
                  {
                    'animate-typing border-r-2 border-text-black':
                      isMenuOpen && language === 'ja',
                    'animate-typing-en border-r-2 border-text-black':
                      isMenuOpen && language === 'en',
                  }
                )}
              >
                &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
                <Trans>
                  はじめまして。こちらはkzk4043のポートフォリオサイトです。
                </Trans>
              </span>
            </h1>
            {menuUrlList.map((url, index) => {
              return (
                <div
                  className={clsx(
                    `ease-[cubic-bezier(0.19, 1, 0.22, 1)] absolute left-1 ${topMenuTop[index]} opacity-0 transition ${topMenuDelay[index]}`,
                    {
                      'translate-y-3 opacity-100': isMenuOpen,
                    }
                  )}
                  key={url}
                >
                  <AppLink to={url}>{PAGE_TITLE[url]}</AppLink>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex items-center">
            <h1 className="ml-6 flex items-center">
              <AppLink to={PAGE_URL.TOP} withoutUnderline>
                kzk4043's PORTFOLIO
              </AppLink>
              <span>
                &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
                <span
                  className={clsx(
                    'after:ease-[cubic-bezier(0.19, 1, 0.22, 1)] relative after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-0 after:bg-text-black after:transition',
                    {
                      'after:scale-100': isMenuOpen,
                    }
                  )}
                >
                  {PAGE_TITLE[originalPath]}
                </span>
              </span>
            </h1>
            {menuUrlList
              .filter((url) => url !== originalPath)
              .map((url, index) => {
                return (
                  <div
                    className={clsx(
                      `ease-[cubic-bezier(0.19, 1, 0.22, 1)] ml-5 transition ${othersMenuDelay[index]}`,
                      {
                        'translate-x-[-20px] opacity-0': !isMenuOpen,
                        'translate-x-0 opacity-100': isMenuOpen,
                      }
                    )}
                    key={url}
                  >
                    <AppLink to={url}>{PAGE_TITLE[url]}</AppLink>
                  </div>
                );
              })}
          </div>
        )}
      </div>
      <div className="flex">
        <div className="mr-6">
          <a href={EXTERNAL_PAGE_URL.ZENN}>
            <StaticImage
              alt="zenn icon"
              src="../images/icon_zenn.png"
              className="mr-1 w-6"
            />
          </a>
          <a href={EXTERNAL_PAGE_URL.GITHUB}>
            <StaticImage
              alt="github icon"
              src="../images/icon_github.png"
              className="mr-1 w-6"
            />
          </a>
          <a href={EXTERNAL_PAGE_URL.CODEPEN}>
            <StaticImage
              alt="codepen icon"
              src="../images/icon_codepen.png"
              className="w-6"
            />
          </a>
        </div>
        <div className="flex">
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
  );
};

export default HeaderPc;
