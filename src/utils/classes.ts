export default function classes(...arr: Array<string | boolean>) {
  return arr.filter((x) => !!x).join(' ');
}
