import { clsx } from 'clsx';
import { StaticImage } from 'gatsby-plugin-image';
import { Link, Trans, useI18next } from 'gatsby-plugin-react-i18next';
import React, { useState } from 'react';
import { PAGE_URL, EXTERNAL_PAGE_URL } from '@/constants/url';

const HeaderPc: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { originalPath, language } = useI18next();

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
        <h1 className="ml-6 flex h-9 items-center">
          <Link to={PAGE_URL.TOP}>kzk4043's PORTFOLIO</Link>
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
        <div
          className={clsx(
            'ease-[cubic-bezier(0.19, 1, 0.22, 1)] absolute left-1 top-[40px] opacity-0 transition',
            {
              'translate-y-3 opacity-100': isMenuOpen,
            }
          )}
        >
          <Link to={PAGE_URL.ABOUT}>ABOUT</Link>
        </div>
        <div
          className={clsx(
            'ease-[cubic-bezier(0.19, 1, 0.22, 1)] absolute left-1 top-[70px] opacity-0 transition delay-[100ms]',
            {
              'translate-y-3 opacity-100 ': isMenuOpen,
            }
          )}
        >
          <Link to={PAGE_URL.SKILLS}>SKILLS</Link>
        </div>
        <div
          className={clsx(
            'ease-[cubic-bezier(0.19, 1, 0.22, 1)] absolute left-1 top-[100px] opacity-0 transition delay-[200ms]',
            {
              'translate-y-3 opacity-100': isMenuOpen,
            }
          )}
        >
          <Link to={PAGE_URL.WORKS}>WORKS</Link>
        </div>
        <div
          className={clsx(
            'ease-[cubic-bezier(0.19, 1, 0.22, 1)] absolute left-1 top-[130px] opacity-0 transition delay-[300ms]',
            {
              'translate-y-3 opacity-100': isMenuOpen,
            }
          )}
        >
          <Link to={PAGE_URL.CONTACT}>CONTACT</Link>
        </div>
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
            <Link to={originalPath} language="ja">
              JA
            </Link>
          </div>
          <div className="w-10 text-center">
            <Link to={originalPath} language="en">
              EN
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderPc;