import { GlkOptions } from 'interfaces/GlkOptions';
export declare class Storage<T> {
    private storeName;
    private defaultValue;
    constructor(storeName: string, defaultValue: T);
    get(): T;
    set(mergeValues: object): T;
    replace(newValue: T): T;
    upgrade(...upgradeFns: Array<(data: any) => any>): void;
}
export declare const optsStore: Storage<GlkOptions>;
