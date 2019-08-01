import { CSSResult } from 'lit-element';
export declare enum Size {
    XS = "xs",
    SM = "sm",
    MD = "md",
    LG = "lg"
}
export declare function mediaOn(key: Size, style: CSSResult): CSSResult;
