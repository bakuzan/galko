interface StyleObject {
  [key: string]: any;
}

export default function objToString(obj: StyleObject) {
  return Object.keys(obj).reduce((p, k) => `${p}${k}: ${obj[k]};`, '');
}
