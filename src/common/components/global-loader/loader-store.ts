import uniqueId from 'lodash/uniqueId';
import type { IObservableArray } from 'mobx';
import { action, makeAutoObservable, observable } from 'mobx';

export class LoaderStore {
  loading = false;
  keyedLoaders: IObservableArray<string> = observable<string>([]);

  constructor() {
    makeAutoObservable(this, {
      showLabelledLoader: action,
      hideLabelledLoader: action,
      hideAllLoaders: action,
      showLoader: action,
      hideLoader: action,
    });
  }

  get isLoading(): boolean {
    return this.keyedLoaders.length > 0 || this.loading;
  }

  showLoader() {
    this.loading = true;
  }

  hideLoader() {
    this.loading = false;
  }

  showLabelledLoader(key?: string): string {
    if (key && this.keyedLoaders.includes(key)) {
      return key;
    }

    const newKey = key ?? uniqueId();

    this.keyedLoaders.push(newKey);
    return newKey;
  }

  hideLabelledLoader(key: string) {
    this.keyedLoaders.remove(key);
  }

  hideAllLoaders() {
    this.keyedLoaders.clear();
  }
}

export const loaderStore = new LoaderStore();
