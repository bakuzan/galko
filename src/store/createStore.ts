export interface Action {
  type: string;
  [key: string]: any;
}

export default function createStore<T>(
  reducer: (state: T, action: Action) => T,
  initialState: T
) {
  let currentReducer = reducer;
  let currentState = initialState;
  let isDispatching = false;
  const listeners: Array<() => void> = [];

  function getState() {
    return currentState;
  }

  function subscribe(listener: () => void) {
    listeners.push(listener);

    return function unsubscribe() {
      const index = listeners.indexOf(listener);
      listeners.splice(index, 1);
    };
  }

  function dispatch(action: Action) {
    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    listeners.slice().forEach((listener) => listener());
    return action;
  }

  function replaceReducer(nextReducer: (state: T, action: Action) => T) {
    currentReducer = nextReducer;
    dispatch({ type: 'GLK/INIT' });
  }

  dispatch({ type: 'GLK/INIT' });

  return { dispatch, subscribe, getState, replaceReducer };
}
