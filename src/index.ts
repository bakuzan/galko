import { css, customElement, html, LitElement, property } from 'lit-element';
import './elements/button';
import './elements/router-link';
import './elements/router-view';

import router from './routes';

@customElement('glk-app')
class App extends LitElement {
  static get styles() {
    return css`
      :host,
      main {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      }

      .action-bar {
        display: flex;
        align-items: center;
        background-color: var(--primary-colour);
        min-height: 51px;
        padding: 10px 15px;
        box-shadow: 1px 1px 2px 2px var(--shadow-colour);
        box-sizing: border-box;
      }
      .action-bar__title {
        font-size: 1.25rem;
        margin: 5px 0;
      }

      glk-router-view {
        padding: 0 5px;
      }
      glk-router-link {
        font-size: 1.25rem;
      }

      /* Helpers */
      .flex-spacer {
        display: flex;
        flex: 1;
      }
    `;
  }

  public render() {
    const baseUrl = router.base;

    return html`
      <main>
        <nav class="action-bar">
          <h1 class="action-bar__title">
            <glk-router-link ?buttonise=${true} .href="${baseUrl}"
              >Galko︎</glk-router-link
            >
          </h1>

          <div class="flex-spacer"></div>

          <glk-router-link ?buttonise=${true} .href=${'/scores'}
            >★︎</glk-router-link
          >
          <glk-router-link ?buttonise=${true} .href=${'/options'}
            >⚙︎</glk-router-link
          >
        </nav>
        <glk-router-view></glk-router-view>
      </main>
    `;
  }
}
