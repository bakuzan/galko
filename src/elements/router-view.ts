import { customElement, html, LitElement, property } from 'lit-element';
import '../home';
import '../options';
import router from '../routes';
import '../scores';

@customElement('glk-router-view')
class RouterView extends LitElement {
  @property({ type: String })
  private routeKey: string = '';

  public firstUpdated() {
    router.subscribe(({ key }) => (this.routeKey = key));
  }

  public render() {
    const route = router.currentRoute;

    if (!route) {
      return html`
        <div style="padding: 10px">
          Route not found.
        </div>
      `;
    }

    return route.render(this.routeKey);
  }
}