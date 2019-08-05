import { TemplateResult } from 'lit-html';

function buildString(temp: TemplateResult) {
  const { strings, values } = temp;
  const len = strings.length;

  let str = '';

  for (let i = 0; i < len; i++) {
    str += strings[i] + (values[i] || '');
  }

  return str;
}

export default function svgToBase64Image(svg: TemplateResult) {
  const div = document.createElement('div');
  div.innerHTML = buildString(svg);

  const b64 = window.btoa(div.innerHTML);

  return 'data:image/svg+xml;base64,' + b64;
}
