import '@/decks';
import '@/decks-builder';
import '@/home';
import '@/options';
import router from '@/routes';
import '@/scores';
import { customElement, html, LitElement, property } from 'lit-element';

@customElement('glk-router-view')
class RouterView extends LitElement {
  @property({ type: String })
  private routeKey: string = '';

  public firstUpdated() {
    router.subscribe(({ key }) => (this.routeKey = key));
  }

  public render() {
    let route = router.currentRoute;

    if (!route) {
      route = {
        name: '404',
        render: () => html`
          <h2>We couldn't find what you were looking for.</h2>
          <div>
            <glk-router-link .href=${router.base}
              >Return to Home</glk-router-link
            >
          </div>
        `,
        url: ''
      };
    }

    return route.render(this.routeKey);
  }
}
