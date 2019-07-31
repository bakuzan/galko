import { Card } from 'interfaces/Card';
import createStore, { Action } from './createStore';

interface GLKState {
  pairs: Card[];
  choices: string[];
  cards: Card[];
}

function reducer(state: GLKState, action: Action) {
  return state;
}

export default createStore<GLKState>(reducer, {
  cards: [],
  choices: [],
  pairs: []
});
