import Router from 'ayaka/Router';
import { html } from 'lit-element';

const baseUrl = process.env.NODE_ENV === 'production' ? '/galko' : '/';
const baseTitle = 'Galko';

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
      title: 'Options',
      url: '/options'
    },
    {
      name: 'scores',
      render: () =>
        html`
          <glk-scores></glk-scores>
        `,
      title: 'Scores',
      url: '/scores'
    },
    {
      name: 'decks',
      render: () =>
        html`
          <glk-decks></glk-decks>
        `,
      title: 'Decks',
      url: '/decks'
    },
    {
      name: 'decks-builder',
      render: () =>
        html`
          <glk-decks-builder></glk-decks-builder>
        `,
      title: 'Deck Builder',
      url: '/decks-builder'
    }
  ],
  { baseUrl, baseTitle }
);

export default router;
