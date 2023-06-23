declare global {
  /** window */
  interface Window {
    /** reCAPTCHA */
    grecaptcha: any;
    /** reCAPTCHA成功時 */
    onRecaptchaSuccess: any;
    /** reCAPTCHA失敗時 */
    onRecaptchaError: any;
    /** reCAPTCHA期限切れ時 */
    onRecaptchaExpired: any;
  }
}

export {};
