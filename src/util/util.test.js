import { replaceCamelCaseWithSpaces } from './util';

describe('Separates camelCase words with spaces between capital letters', () => {
  test('Works for no inner capital letter', () => {
    expect(replaceCamelCaseWithSpaces('Red')).toBe('Red');
  });

  test('Works for one capital letter inside the word', () => {
    expect(replaceCamelCaseWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });

  test('Works for multiple capital letters inside the word', () => {
    expect(replaceCamelCaseWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
});
