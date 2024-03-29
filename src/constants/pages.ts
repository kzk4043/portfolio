/**
 * @file ページのURLを定義する
 */

/** サイト内ページのURL */
export const PAGE_URL = {
  /** トップ */
  TOP: '/',
  /** about */
  ABOUT: '/about/',
  /** skills */
  SKILLS: '/skills/',
  /** works */
  WORKS: '/works/',
  /** contact */
  CONTACT: '/contact/',
}

/** サイト外のURL */
export const EXTERNAL_PAGE_URL = {
  /** ポートフォリオ */
  PORTFOLIO: 'https://kzk4043-portfolio.netlify.app',
  /** knowledge base */
  KNOWLEDGE_BASE: 'https://kzk4043-knowledge-base.netlify.app',
  /** Zenn */
  ZENN: 'https://zenn.dev/soma3134',
  /** Github */
  GITHUB: 'https://github.com/kzk4043',
  /** Codepen */
  CODEPEN: 'https://codepen.io/kzk4043',
  /** Twitter */
  TWITTER: 'https://twitter.com/kzk4043',
  /** Stackblitz */
  STACKBLITZ: 'https://stackblitz.com/@kzk4043',
}

/** ページタイトル */
export const PAGE_TITLE = {
  /** トップ */
  [PAGE_URL.TOP]: 'TOP',
  /** about */
  [PAGE_URL.ABOUT]: 'ABOUT',
  /** skills */
  [PAGE_URL.SKILLS]: 'SKILLS',
  /** works */
  [PAGE_URL.WORKS]: 'WORKS',
  /** contact */
  [PAGE_URL.CONTACT]: 'CONTACT',
}