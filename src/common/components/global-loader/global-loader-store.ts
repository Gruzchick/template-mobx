import uniqueId from 'lodash/uniqueId';
import type { IObservableArray } from 'mobx';
import { action, makeAutoObservable, observable } from 'mobx';

export class GlobalLoaderStore {
  // TO FIND OUT: Не будет ли два раза обёрнуто в прокси если так делать и одновременно использовать makeAutoObservable
  globalLoaders: IObservableArray<string> = observable<string>([]);

  constructor() {
    makeAutoObservable(this, {
      showGlobalLoader: action,
      hideGlobalLoader: action,
      hideAllLoaders: action,
    });
  }

  get isLoading(): boolean {
    return this.globalLoaders.length > 0;
  }

  showGlobalLoader(key?: string): string {
    if (this.globalLoaders.includes(key)) {
      return key;
    }

    const newKey = key ?? uniqueId();

    this.globalLoaders.push(newKey);
    return newKey;
  }

  hideGlobalLoader(key: string) {
    this.globalLoaders.remove(key);
  }

  hideAllLoaders() {
    this.globalLoaders.clear();
  }
}

export const globalLoaderStore = new GlobalLoaderStore();
