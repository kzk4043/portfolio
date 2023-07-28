import { useLayoutEffect, useState } from 'react';

export const useWindowSize = (): number[] => {
  const isClient = typeof window !== 'undefined';
  /**
   * 初期値のまま一旦レンダリングされてしまうので、クライアントサイドでは初期値をウィンドウサイズにする
   */
  const [size, setSize] = useState([isClient ? window.innerWidth : 0, isClient ? window.innerHeight : 0]);

  useLayoutEffect(() => {
    const updateSize = (): void => {
      setSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', updateSize);
    updateSize();

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return size;
};
