import svgToBase64Image from '@/utils/svgToBase64Image';

// Appease typescript gods
function html(strings: TemplateStringsArray, ...values: any[]) {
  return {
    strings,
    values
  } as any;
}

describe('svgToBase64Image', () => {
  it('should return base 64 string', () => {
    const expected =
      'data:image/svg+xml;base64,CiAgICAgIDxkaXY+dGVzdDwvZGl2PgogICAg';

    const input = html`
      <div>test</div>
    `;

    const result = svgToBase64Image(input);

    expect(result).toEqual(expected);
  });

  it('should return base 64 string with template variables', () => {
    const expected =
      'data:image/svg+xml;base64,CiAgICAgIDxkaXY+b3RoZXIgdGVzdDwvZGl2PgogICAg';

    const test = 'other test';
    const input = html`
      <div>${test}</div>
    `;

    const result = svgToBase64Image(input);

    expect(result).toEqual(expected);
  });

  it('should use window.btoa', () => {
    const winSpy = jest.spyOn(window, 'btoa');

    const input = html`
      <div>test</div>
    `;

    svgToBase64Image(input);

    expect(winSpy).toHaveBeenCalled();
  });
});
