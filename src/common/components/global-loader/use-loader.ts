import uniqueId from 'lodash/uniqueId';
import { useLayoutEffect, useRef } from 'react';

import { loaderStore } from './loader-store';

export const useLoader = (loaderState) => {
  const loaderKeyRef = useRef(uniqueId());

  useLayoutEffect(() => {
    const loaderId = loaderKeyRef.current;

    if (loaderState) {
      loaderStore.showLabelledLoader(loaderId);
    } else {
      loaderStore.hideLabelledLoader(loaderId);
    }
    return () => {
      loaderStore.hideLabelledLoader(loaderId);
    };
  }, [loaderState]);
};
