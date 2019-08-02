/*tslint:disable:no-bitwise*/
import { Card } from '../interfaces/Card';
import { Character } from '../interfaces/Character';

import generateUniqueId from './generateUniqueId';
import shuffleArray from './shuffleArray';
import { optsStore } from './storage';

const characters: Character[] = [
  { id: 2, image: 'https://i.imgur.com/3xdrczj.jpg', name: 'Kagari Ayaka' },
  {
    id: 138,
    image: 'https://i.imgur.com/QPrBt63.jpg',
    name: 'Musashi "Shinmen Takezo" Miyamoto'
  },
  {
    id: 115,
    image: 'https://i.imgur.com/1OUzKib.jpg',
    name: 'Yoshikage "Kosaku Kawajiri" Kira'
  },
  {
    id: 20,
    image: 'https://i.imgur.com/683Ik90.jpg',
    name: 'Satellizer "The Untouchable Queen" el Bridget'
  },
  { id: 48, image: 'https://i.imgur.com/NBxXvev.jpg', name: 'Yato' },
  { id: 32, image: 'https://i.imgur.com/8ymura9.jpg', name: 'Ichigo Kurosaki' },
  { id: 11, image: 'https://i.imgur.com/NTkNb9T.jpg', name: 'Bishamonten' },
  { id: 40, image: 'https://i.imgur.com/gMJAWdX.jpg', name: 'Orochimaru' },
  { id: 21, image: 'https://i.imgur.com/9MEHWVh.jpg', name: 'Miku Okazaki' },
  { id: 3, image: 'https://i.imgur.com/5hLv07N.jpg', name: 'Shiraki Meiko' },
  {
    id: 13,
    image: 'https://i.imgur.com/5VuqVkF.jpg',
    name: 'Yang "Mountain King, Yo Tan Wa" Duanhe'
  },
  {
    id: 239,
    image: 'https://i.imgur.com/Jk6HeCy.jpg',
    name: 'Akira Midousuji'
  },
  { id: 109, image: 'https://i.imgur.com/akFHhlw.jpg', name: 'Dio Brando' },
  { id: 33, image: 'https://i.imgur.com/mGMQOO7.jpg', name: 'Sousuke Aizen' },
  {
    id: 191,
    image: 'https://i.imgur.com/LyZQeYb.jpg',
    name: 'Violet Evergarden'
  },
  { id: 22, image: 'https://i.imgur.com/qRWfMKQ.jpg', name: 'Bayonetta' },
  {
    id: 27,
    image: 'https://i.imgur.com/ZWm3fNe.jpg',
    name: 'Robin "Devil Child, Miss All Sunday" Nico'
  },
  { id: 86, image: 'https://i.imgur.com/7poPX27.jpg', name: 'Rin Okumura' },
  {
    id: 396,
    image: 'https://i.imgur.com/Nf0BJMt.jpg',
    name: 'Diavolo "Boss, Soliddo Nazo"'
  },
  { id: 53, image: 'https://i.imgur.com/YlMZthp.jpg', name: 'Galko' },
  {
    id: 189,
    image: 'https://i.imgur.com/tDlZzmA.jpg',
    name: 'Reinhard von Lohengramm'
  },
  {
    id: 188,
    image: 'https://i.imgur.com/S96jdf0.jpg',
    name: 'Eikichi Onizuka'
  },
  { id: 395, image: 'https://i.imgur.com/AduEgP3.jpg', name: 'Vinegar Doppio' },
  {
    id: 196,
    image: 'https://i.imgur.com/onYbGUZ.jpg',
    name: 'Giorno "Haruno Shiobana" Giovanna'
  },
  { id: 5, image: 'https://i.imgur.com/hwpbszY.jpg', name: 'Kiryuin Satsuki' },
  {
    id: 23,
    image: 'https://i.imgur.com/FT9mPXZ.jpg',
    name: 'Saichi "The Immortal" Sugimoto'
  }
];

const addId = (x: Character): Card => ({
  characterId: x.id,
  id: generateUniqueId(),
  image: x.image,
  name: x.name
});

export default function getData(): Card[] {
  const opts = optsStore.get();
  const randomCharacters = shuffleArray(characters).slice(
    0,
    opts.startingPairs
  );

  const paired = [...randomCharacters, ...randomCharacters];
  return shuffleArray<Character>(paired).map(addId);
}
