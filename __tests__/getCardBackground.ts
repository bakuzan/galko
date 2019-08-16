import { CardBackType } from '@/enums/CardBackType';
import getCardBackground from '@/utils/getCardBackground';

jest.mock('@/utils/svgToBase64Image', () =>
  jest.fn().mockImplementation(() => 'test')
);

jest.mock('lit-element', () => ({
  html: jest.fn(() => 'lit-element__html')
}));

import { html } from 'lit-element';
import svgToBase64Image from '@/utils/svgToBase64Image';

describe('getCardBackground', () => {
  it('should process svgs to base64 with svgToBase64Image', () => {
    Object.values(CardBackType).forEach((cbt: CardBackType) => {
      getCardBackground(cbt);

      expect(html).toHaveBeenCalled();
      expect(svgToBase64Image).toHaveBeenCalled();

      jest.resetAllMocks();
    });
  });
});
