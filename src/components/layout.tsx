import { StaticImage } from 'gatsby-plugin-image';
import { useI18next } from 'gatsby-plugin-react-i18next';
import React, { useState, useLayoutEffect } from 'react';
import '@acab/reset.css';
import HeaderPc from '@/components/headerPc';
import HeaderSp from '@/components/headerSp';
import { PAGE_URL } from '@/constants/pages';

export type Props = {
  /** 子要素 */
  children?: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  /**
   * オープニングアニメーションを表示するかどうか。
   * SSR / 初回ペイントからオーバーレイを存在させてコンテンツのチラ見えを防ぐため、
   * 初期値は true。再訪問（セッション内 2 回目以降）では useLayoutEffect で隠す。
   */
  const [showOpening, setShowOpening] = useState(true);

  const thisYear = new Date().getFullYear();
  const { originalPath } = useI18next();
  const isTop = originalPath === PAGE_URL.TOP;

  // useEffect ではなく useLayoutEffect を使う。クライアント側ページ遷移で Layout が
  // 再マウントされると showOpening が true に戻るため、ペイント前に隠さないと
  // 内部遷移のたびに 1 フレームだけオーバーレイがちらつく。
  useLayoutEffect(() => {
    if (sessionStorage.getItem('isFirstAccessDone') === 'true') {
      setShowOpening(false);
      return;
    }

    sessionStorage.setItem('isFirstAccessDone', 'true');
  }, []);

  return (
    <div>
      <header className="relative z-10">
        {/*
          トップコメント入れて大体1000pxくらいでヘッダがいっぱいなので、そのくらいで切り替える。
          JS(useWindowSize)だと初回に必ずSPヘッダが出てから切り替わりチラつくため、
          両方を常時レンダリングしCSS(lg = max:1023px)で出し分ける。
        */}
        <div className="block lg:hidden">
          <HeaderPc />
        </div>
        <div className="hidden lg:block">
          <HeaderSp />
        </div>
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
      {showOpening && (
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
