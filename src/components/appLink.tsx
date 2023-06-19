import { Link, useI18next } from 'gatsby-plugin-react-i18next';
import React, { useState, useEffect } from 'react';

export type Props = {
  /** type */
  type?: 'normal' | 'inline' | 'withoutUnderline';
  /** to */
  to: string;
  /** 子要素 */
  children?: React.ReactNode;
  /** 言語 */
  language?: string;
};

const AppLink: React.FC<Props> = ({
  type = 'normal',
  to,
  children,
  language,
}) => {
  /** location.originを取得 */
  const [currentOrigin, setCurrentOrigin] = useState('');
  /** リンク先が表示画面と同じか */
  const { originalPath, language: pathLanguage } = useI18next();
  const isSameLinkUrl =
    (originalPath === to && !language) ||
    (originalPath === to && pathLanguage === language);
  /** 外部リンクか */
  const regexp = new RegExp(`^(?=https?://)(?!${currentOrigin})`);
  const isExternalUrl = regexp.test(to || '');
  /** 現在いる場所という意味の下線を引くクラス */
  const underlineClasses =
    'after:ease-[cubic-bezier(0.19, 1, 0.22, 1)] relative after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-full after:bg-text-black after:transition';
  /** リンクという意味の下線を引くクラス */
  const clickableUnderlineClasses =
    'after:ease-[cubic-bezier(0.19, 1, 0.22, 1)] relative after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-full after:bg-text-main after:transition hover:after:opacity-60 text-text-main hover:opacity-60 transition';
  /** ホバー時下線を引くクラス */
  const hoverUnderlineClasses =
    'after:ease-[cubic-bezier(0.19, 1, 0.22, 1)] relative after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-full after:scale-0 after:bg-text-black after:transition hover:after:scale-100';
  /** 外部URLのクラス */
  const externalUrlClasses = (function () {
    switch (type) {
      case 'normal':
        return hoverUnderlineClasses;
      case 'inline':
        return clickableUnderlineClasses;
      case 'withoutUnderline':
        return '';
      default:
        return '';
    }
  })();
  /** 今いるページのURLのクラス */
  const sameUrlClasses = (function () {
    switch (type) {
      case 'normal':
        return underlineClasses;
      case 'inline':
        return clickableUnderlineClasses;
      case 'withoutUnderline':
        return '';
      default:
        return '';
    }
  })();
  /** 内部URLのクラス */
  const internalUrlClasses = (function () {
    switch (type) {
      case 'normal':
        return hoverUnderlineClasses;
      case 'inline':
        return clickableUnderlineClasses;
      case 'withoutUnderline':
        return '';
      default:
        return '';
    }
  })();

  useEffect(() => {
    setCurrentOrigin(window.location.origin);
  }, [setCurrentOrigin]);

  if (isExternalUrl) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className={externalUrlClasses}
      >
        {children}
      </a>
    );
  }

  if (isSameLinkUrl || !to) {
    return <span className={sameUrlClasses}>{children}</span>;
  }

  return (
    <Link to={to} className={internalUrlClasses} language={language}>
      {children}
    </Link>
  );
};

export default AppLink;
