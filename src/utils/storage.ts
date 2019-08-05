import { GlkOptions } from 'interfaces/GlkOptions';
import { CardBackType } from '../enums/CardBackType';

export class Storage<T> {
  private storeName: string = '';
  private defaultValue: any = null;

  constructor(storeName: string, defaultValue: T) {
    this.storeName = storeName;
    this.defaultValue = defaultValue;
  }

  public get(): T {
    const item = localStorage.getItem(this.storeName) || '';
    const values = item ? JSON.parse(item) : this.defaultValue;
    return { ...this.defaultValue, ...values };
  }

  public set(mergeValues: object): T {
    const values = this.get();
    const updated = { ...values, ...mergeValues } as T;
    localStorage.setItem(this.storeName, JSON.stringify(updated));
    return updated;
  }

  public replace(newValue: T): T {
    const data = JSON.stringify(newValue);
    localStorage.setItem(this.storeName, data);
    return this.get();
  }

  public upgrade(...upgradeFns: Array<(data: any) => any>) {
    const data = this.get();
    const upgradedData = upgradeFns.reduce((upD, fn) => fn(upD), data);
    this.replace(upgradedData);
  }
}

export const optsStore = new Storage<GlkOptions>('glkOptions', {
  cardBack: CardBackType.subtleDots,
  hideOnMatch: true,
  startingPairs: 15
});
