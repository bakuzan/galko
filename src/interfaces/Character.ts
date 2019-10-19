import { CharacterImage } from './CharacterImage';

export interface Character {
  id: number;
  name: string;
  image: string;
  images: CharacterImage[];
  seriesId: number;
}
