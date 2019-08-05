declare const compose: (...fns: ((...args: any) => any)[]) => (...args: any) => any;
export default compose;
