import padNumber from './pad';

const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];

export default function formatDate(t: number) {
  const d = new Date(t);
  return `${padNumber(d.getDate(), 2)} ${
    monthNames[d.getMonth()]
  } ${d.getFullYear()} @ ${padNumber(d.getHours(), 2)}:${padNumber(
    d.getMinutes(),
    2
  )}`;
}
