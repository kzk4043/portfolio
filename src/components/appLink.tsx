import { Link, useI18next } from 'gatsby-plugin-react-i18next';
import React, { useState, useEffect } from 'react';

export type Props = {
  /** to */
  to: string;
  /** 子要素 */
  children?: React.ReactNode;
  /** 言語 */
  language?: string;
  /** 下線なし */
  withoutUnderline?: boolean;
};

const AppLink: React.FC<Props> = ({
  to,
  children,
  language,
  withoutUnderline,
}) => {
  /** location.originを取得 */
  const [currentOrigin, setCurrentOrigin] = useState('');
  /** リンク先が表示画面と同じか */
  const { path, language: pathLanguage } = useI18next();
  const isSameLinkUrl =
    (path === to && !language) || (path === to && pathLanguage === language);
  /** 外部リンクか */
  const regexp = new RegExp(`^(?=https?://)(?!${currentOrigin})`);
  const isExternalUrl = regexp.test(to || '');
  /** 下線を引くクラス */
  const underlineClasses =
    'after:ease-[cubic-bezier(0.19, 1, 0.22, 1)] relative after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-full after:bg-text-black after:transition';
  /** ホバー時下線を引くクラス */
  const hoverUnderlineClasses =
    'after:ease-[cubic-bezier(0.19, 1, 0.22, 1)] relative after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-full after:scale-0 after:bg-text-black after:transition hover:after:scale-100';

  useEffect(() => {
    setCurrentOrigin(window.location.origin);
  }, [setCurrentOrigin]);

  if (isExternalUrl) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className={withoutUnderline ? '' : hoverUnderlineClasses}
      >
        {children}
      </a>
    );
  }

  if (isSameLinkUrl) {
    return (
      <span className={withoutUnderline ? '' : underlineClasses}>
        {children}
      </span>
    );
  }

  return (
    <Link
      to={to}
      className={withoutUnderline ? '' : hoverUnderlineClasses}
      language={language}
    >
      {children}
    </Link>
  );
};

export default AppLink;
