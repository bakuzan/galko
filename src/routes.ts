import { html } from 'lit-element';
import Router from './utils/Router';

const baseUrl = process.env.NODE_ENV === 'production' ? '/galko' : '/';

const router = new Router(
  [
    {
      name: 'home',
      render: () =>
        html`
          <glk-home></glk-home>
        `,
      url: baseUrl
    },
    {
      name: 'options',
      render: () =>
        html`
          <glk-options></glk-options>
        `,
      url: '/options'
    },
    {
      name: 'scores',
      render: () =>
        html`
          <glk-scores></glk-scores>
        `,
      url: '/scores'
    }
  ],
  baseUrl
);

export default router;
