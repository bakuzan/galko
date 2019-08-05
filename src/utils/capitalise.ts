import compose from './compose';

export const fromCamelCase = (str: string, separator = ' ') =>
  str
    .replace(/([a-z\d])([A-Z])/g, '$1' + separator + '$2')
    .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + separator + '$2')
    .toLowerCase();

export const capitalise = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const separateAndCapitalise = compose(
  capitalise,
  fromCamelCase
);
