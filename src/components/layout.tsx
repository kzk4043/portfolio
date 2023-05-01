import React from 'react';
import { Link } from 'gatsby'
import '@acab/reset.css';

export type Props = {
  /** 子要素 */
  children?: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      {/* <header>{data.site.siteMetadata.title}</header> */}
      <nav>
        <ul>
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about">
              About
            </Link>
          </li>
          <li>
            <Link to="/blog">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout