/* tslint:disable:object-literal-sort-keys */
import orderBy from 'ayaka/orderBy';

import { GameResultView } from '@/interfaces/GameResult';

export const resultFields = [
  'timeElapsed',
  'datetime',
  'pairs',
  'longestStreak',
  'matchAttemptsRatio'
] as const;

export type ResultField = typeof resultFields[number];

type SortOrder = 'asc' | 'desc';

interface ResultOrder {
  props: ResultField[];
  orders: (direction: number) => SortOrder[];
}

const orders = new Map<ResultField, ResultOrder>([
  [
    'timeElapsed',
    {
      props: ['timeElapsed', 'pairs'],
      orders: (i) => (i > 0 ? ['asc', 'desc'] : ['desc', 'asc'])
    }
  ],
  [
    'datetime',
    { props: ['datetime'], orders: (i) => (i > 0 ? ['asc'] : ['desc']) }
  ],
  [
    'pairs',
    {
      props: ['pairs', 'timeElapsed'],
      orders: (i) => (i > 0 ? ['asc', 'asc'] : ['desc', 'desc'])
    }
  ],
  [
    'longestStreak',
    {
      props: ['longestStreak', 'pairs', 'timeElapsed'],
      orders: (i) => (i > 0 ? ['asc', 'desc', 'desc'] : ['desc', 'asc', 'asc'])
    }
  ],
  [
    'matchAttemptsRatio',
    {
      props: ['matchAttemptsRatio', 'timeElapsed', 'longestStreak'],
      orders: (i) => (i > 0 ? ['asc', 'desc', 'asc'] : ['desc', 'asc', 'desc'])
    }
  ]
]);

export default function orderGameHistory(
  history: GameResultView[],
  key: ResultField,
  order: number
) {
  const args = orders.get(key) as ResultOrder;
  return orderBy(history, args.props, args.orders(order)) as GameResultView[];
}
