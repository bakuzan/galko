import { css, customElement, html, LitElement } from 'lit-element';
import './elements/button';
import './elements/router-link';
import './elements/router-view';
import './elements/tooltip';

import router from './routes';

@customElement('glk-app')
class App extends LitElement {
  static get styles() {
    return css`
      :host,
      main {
        --action-bar-height: 51px;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      }

      .action-bar {
        display: flex;
        align-items: center;
        background-color: var(--primary-colour);
        min-height: var(--action-bar-height);
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
            <glk-tooltip .text=${'Home'}>
              <glk-router-link ?buttonise=${true} .href="${baseUrl}"
                >Galko︎</glk-router-link
              >
            </glk-tooltip>
          </h1>

          <div class="flex-spacer"></div>

          <glk-tooltip .text=${'Scores'}>
            <glk-router-link ?buttonise=${true} .href=${'/scores'}
              >★︎</glk-router-link
            >
          </glk-tooltip>
          <glk-tooltip .text=${'Decks'}>
            <glk-router-link ?buttonise=${true} .href=${'/decks'}
              >🂠︎</glk-router-link
            >
          </glk-tooltip>
          <glk-tooltip .text=${'Options'}>
            <glk-router-link ?buttonise=${true} .href=${'/options'}
              >⚙︎</glk-router-link
            >
          </glk-tooltip>
        </nav>
        <glk-router-view></glk-router-view>
      </main>
    `;
  }
}
