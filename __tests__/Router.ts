import Router, { Route } from '@/utils/Router';

jest.mock('ayaka/generateUniqueId', jest.fn);

import generateUniqueId from 'ayaka/generateUniqueId';

const DEFAULT_ROUTES = [
  {
    name: 'home',
    render: () => 'render home',
    url: '/'
  },
  {
    name: 'options',
    render: () => 'render options',
    url: '/options'
  },
  {
    name: 'scores',
    render: () => 'render scores',
    url: '/scores'
  }
];

function createRouter(routes: Route[] = [], baseUrl = '') {
  const r = routes.length ? routes : DEFAULT_ROUTES;
  const b = baseUrl ? baseUrl : undefined;
  return new Router(r, b);
}

describe('Router', () => {
  // Hide console errors!
  beforeAll(() => jest.spyOn(console, 'error').mockImplementation(() => null));

  beforeEach(() => jest.resetAllMocks());

  it('should create router instance', () => {
    const result = new Router([]);

    expect(result instanceof Router).toBe(true);
  });

  it('should add on popstate listener', () => {
    createRouter();

    expect(window.onpopstate).not.toBe(null);
  });

  it('should return base url', () => {
    const base = 'testbase';
    const router = createRouter([], base);

    const result = router.base;

    expect(result).toEqual(base);
  });

  it('should return current route object', () => {
    const expected = 'home';

    const router = createRouter();

    const result = router.currentRoute;

    if (!result) {
      throw new Error('No route found');
    }

    expect(result.name).toEqual(expected);
  });

  it('should not publish push of unknown route', () => {
    const subMock = jest.fn();

    const router = createRouter();

    router.subscribe(subMock);
    router.push('/unknown-route');

    expect(subMock).not.toHaveBeenCalled();
    expect(generateUniqueId).not.toHaveBeenCalled();
  });

  it('should publish push changes', () => {
    const subMock = jest.fn();

    const router = createRouter();

    router.subscribe(subMock);
    router.push('/');

    expect(subMock).toHaveBeenCalled();
    expect(generateUniqueId).toHaveBeenCalled();
  });

  it('should publish push changes adding base if no leading slash', () => {
    const subMock = jest.fn();

    const router = createRouter();

    router.subscribe(subMock);
    router.push('options');

    const result = subMock.mock.calls[0][0];

    expect(result.toRoute.url).toEqual('/options');
    expect(generateUniqueId).toHaveBeenCalled();
  });

  it('should not publish onpopstate event changes of unknown route', () => {
    const subMock = jest.fn();

    const router = createRouter([
      {
        name: 'home',
        render: () => 'render home',
        url: '/home'
      }
    ]);

    router.subscribe(subMock);
    if (window.onpopstate) {
      window.onpopstate(null as any);
    }

    expect(subMock).not.toHaveBeenCalled();
    expect(generateUniqueId).not.toHaveBeenCalled();
  });

  it('should publish onpopstate event changes', () => {
    const subMock = jest.fn();

    const router = createRouter();

    router.subscribe(subMock);
    if (window.onpopstate) {
      window.onpopstate(null as any);
    }

    expect(subMock).toHaveBeenCalled();
    expect(generateUniqueId).toHaveBeenCalled();
  });

  it('should return baseurl for guarded path', () => {
    const router = createRouter();

    const result = router.guardPath('');

    expect(result).toEqual(router.base);
  });

  it('should return fixed path', () => {
    const expected = '/galko';

    const router = createRouter();

    const result = router.guardPath('//galko/');

    expect(result).toEqual(expected);
  });
});
