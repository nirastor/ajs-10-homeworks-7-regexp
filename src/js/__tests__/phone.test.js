import Phone from '../pnone';

test('should format', () => {
  expect(Phone.format('8 (927) 000-00-00')).toBe('+79270000000');
  expect(Phone.format('+7 960 000 00 00')).toBe('+79600000000');
  expect(Phone.format('+86 000 000 0000')).toBe('+860000000000');
});
