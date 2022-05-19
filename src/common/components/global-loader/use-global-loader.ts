import uniqueId from 'lodash/uniqueId';
import { useLayoutEffect, useRef } from 'react';

import { globalLoaderStore } from './global-loader-store';

export const useGlobalLoader = (loaderState) => {
  const loaderKeyRef = useRef(uniqueId());

  useLayoutEffect(() => {
    if (loaderState) {
      globalLoaderStore.showGlobalLoader(loaderKeyRef.current);
    } else {
      globalLoaderStore.hideGlobalLoader(loaderKeyRef.current);
    }
  }, [loaderState]);
};
