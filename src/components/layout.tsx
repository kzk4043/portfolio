import { StaticImage } from 'gatsby-plugin-image';
import { useI18next } from 'gatsby-plugin-react-i18next';
import React, { useState, useEffect } from 'react';
import '@acab/reset.css';
import HeaderPc from '@/components/headerPc';
import HeaderSp from '@/components/headerSp';
import { PAGE_URL } from '@/constants/pages';
import { useWindowSize } from '@/hooks/useWindowSize';

export type Props = {
  /** 子要素 */
  children?: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  /** オープニングアニメーションが再生済みかどうか */
  const [isFirstAnimationDone, setIsFirstAnimationDone] = useState(false);

  const size = useWindowSize();
  const thisYear = new Date().getFullYear();
  const { originalPath } = useI18next();
  const isTop = originalPath === PAGE_URL.TOP;

  useEffect(() => {
    const isFirstAccessDone = sessionStorage.getItem('isFirstAccessDone');

    if (isFirstAccessDone === 'true') return;

    setIsFirstAnimationDone(true);
    sessionStorage.setItem('isFirstAccessDone', 'true');
  }, []);

  return (
    <div>
      <header className="relative z-10">
        {
          // トップコメント入れて大体1000pxくらいでヘッダがいっぱいなので、そのくらいで切り替えておく
          size[0] > 1000 ? <HeaderPc /> : <HeaderSp />
        }
      </header>
      <main className="mx-auto max-w-7xl">{children}</main>
      {isTop || (
        <footer className="mt-20 h-28 text-center text-xs lg:px-5">
          <hr className="mx-auto max-w-7xl" />
          <p className="mt-10">© {thisYear} kzk4043. All rights reserved.</p>
        </footer>
      )}
      {/* ページ遷移アニメーション */}
      <div className="pointer-events-none fixed left-0 top-0 z-20 flex h-full w-full animate-fade-out-short items-center justify-center bg-white"></div>
      {/* オープニングアニメーション */}
      {isFirstAnimationDone && (
        <div className="pointer-events-none fixed left-0 top-0 z-30 flex h-full w-full animate-fade-out items-center justify-center bg-white">
          <div className="flex flex-col items-center overflow-visible ">
            <StaticImage
              alt="horse icon"
              src="../images/icon_horse.png"
              className="w-[160px]"
            />
            <p className="whitespace-nowrap text-center text-lg">
              kzk4043's PORTFOLIO
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;
