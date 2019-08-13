import generateUniqueId from './generateUniqueId';

interface Route {
  name: string;
  url: string;
  render: (key: string) => any;
}

interface RouteUpdate {
  key: string;
  fromRoute?: Route;
  toRoute: Route;
}

class Router {
  private appRoutes: Route[] = [];
  private baseUrl: string = '/';
  private listeners: Array<(update: RouteUpdate) => void> = [];

  constructor(routes: Route[], baseUrl = '/') {
    this.appRoutes = routes;
    this.baseUrl = baseUrl;

    this.listenToPopState();
  }

  get currentRoute() {
    const path = `/${window.location.pathname.replace(this.baseUrl, '')}`;

    return this.appRoutes.find((x) => x.url === path);
  }

  public subscribe(fn: (update: RouteUpdate) => void) {
    this.listeners.push(fn);
  }

  public push(location: string) {
    const fromRoute = this.currentRoute;
    const toRoute = this.appRoutes.find((x) => x.url === location);

    if (!toRoute) {
      // TODO
      // Handle unknown route ??
      return;
    }

    const rawUrl = `${this.baseUrl}${location}`.replace(/\/\//g, '/');
    const targetUrl = `${window.location.origin}${rawUrl}`;

    window.history.pushState(null, '', targetUrl);
    this.publishChange(toRoute, fromRoute);
  }

  private listenToPopState() {
    window.onpopstate = (event) => {
      const path = `/${window.location.pathname.replace(this.baseUrl, '')}`;
      const toRoute = this.appRoutes.find((x) => x.url === path);
      if (!toRoute) {
        // TODO
        // Handle unknown route ??
        return;
      }

      this.publishChange(toRoute);
    };
  }

  private publishChange(toRoute: Route, fromRoute?: Route) {
    const key = generateUniqueId();
    const payload = { key, fromRoute, toRoute };

    this.listeners.forEach((fn) => fn(payload));
  }
}

export default Router;
