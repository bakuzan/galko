export default function classes(...arr: (string | boolean)[]) {
  return arr.filter((x) => !!x).join(' ');
}
