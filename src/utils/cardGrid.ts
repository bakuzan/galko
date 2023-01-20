export function getElementWidth<
  T extends Pick<HTMLElement, 'getBoundingClientRect'>
>(element: T) {
  return element.getBoundingClientRect().width;
}

export function getCardWidth() {
  const screenWidth = window.innerWidth;

  if (screenWidth > 767) {
    return 103;
  }

  if (screenWidth >= 479 && screenWidth <= 767) {
    return 83;
  }

  return 64;
}

export function getHighestEvenColumns(cards: number, maxColumns: number) {
  let columns = maxColumns;

  while (cards % columns !== 0) {
    columns -= 1;
  }

  return columns;
}
