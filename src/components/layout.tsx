import React from 'react';
import '@acab/reset.css';
import HeaderPc from '@/components/headerPc';
import HeaderSp from '@/components/headerSp';
import { useWindowSize } from '@/hooks/useWindowSize';

export type Props = {
  /** 子要素 */
  children?: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  const size = useWindowSize();

  return (
    <div>
      <header>
        {
          // トップコメント入れて大体1000pxくらいでヘッダがいっぱいなので、そのくらいで切り替えておく
          size[0] > 1000 ? <HeaderPc /> : <HeaderSp />
        }
      </header>
      <main className="mx-auto max-w-7xl">{children}</main>
    </div>
  );
};

export default Layout;
