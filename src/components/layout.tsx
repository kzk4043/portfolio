import { useI18next } from 'gatsby-plugin-react-i18next';
import React from 'react';
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
  const size = useWindowSize();
  const thisYear = new Date().getFullYear();
  const { originalPath } = useI18next();
  const isTop = originalPath === PAGE_URL.TOP;

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
    </div>
  );
};

export default Layout;
