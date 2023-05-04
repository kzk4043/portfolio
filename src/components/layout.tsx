import React, { useState } from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { clsx } from 'clsx';
import '@acab/reset.css';

export type Props = {
  /** 子要素 */
  children?: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleClick = () => {
    setIsMenuOpen((current) => !current);
  };

  return (
    <div>
      <header className="container mx-auto flex h-24 items-center justify-between">
        <div className="flex">
          <div
            className={clsx(
              'ease-[cubic-bezier(0.19, 1, 0.22, 1)] relative h-9 w-9 cursor-pointer transition duration-500',
              {
                'rotate-180': isMenuOpen,
              }
            )}
            onClick={handleClick}
          >
            <span
              className={clsx(
                'cubic-bezier(0.19, 1, 0.22, 1)] absolute left-1 top-2 inline-block h-1 w-7 bg-text-black transition duration-300',
                { 'translate-y-[8px] rotate-[-45deg]': isMenuOpen }
              )}
            ></span>
            <span
              className={clsx(
                'absolute left-1 top-4 inline-block h-1 w-7 bg-text-black transition duration-300',
                { 'opacity-0': isMenuOpen }
              )}
            ></span>
            <span
              className={clsx(
                'absolute left-1 top-6 inline-block h-1 w-7 bg-text-black transition duration-300',
                { 'translate-y-[-8px] rotate-[45deg]': isMenuOpen }
              )}
            ></span>
          </div>
          <h1 className="ml-6 flex h-9 items-center">
            <div>
              <Link to="/">kzk4043's PORTFOLIO</Link>
            </div>
          </h1>
        </div>
        <div className="flex">
          <div className="mr-6">
            <a href="https://zenn.dev/soma3134">
              <StaticImage
                alt="zenn icon"
                src="../images/icon_zenn.png"
                className="mr-1 w-6"
              />
            </a>
            <a href="https://github.com/kzk4043">
              <StaticImage
                alt="github icon"
                src="../images/icon_github.png"
                className="mr-1 w-6"
              />
            </a>
            <a href="https://codepen.io/kzk4043">
              <StaticImage
                alt="codepen icon"
                src="../images/icon_codepen.png"
                className="w-6"
              />
            </a>
          </div>
          <div className="flex">
            <div className="w-10 border-r border-text-black text-center">
              <Link to="/">JA</Link>
            </div>
            <div className="w-10 text-center">
              <Link to="/">EN</Link>
            </div>
          </div>
        </div>
      </header>
      <main className="container mx-auto">{children}</main>
    </div>
  );
};

export default Layout;
