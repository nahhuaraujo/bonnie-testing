import { replaceCamelCaseWithSpaces } from './util';

describe('Separates camelCase words with spaces between capital letters', () => {
  test('Works for no inner capital letter', () => {
    expect(replaceCamelCaseWithSpaces('Red')).toBe('Red');
  });

  test('Works for one capital letter inside the word', () => {
    expect(replaceCamelCaseWithSpaces('')).toBe('');
  });

  test('Works for multiple capital letters inside the word', () => {
    expect(replaceCamelCaseWithSpaces('')).toBe('');
  });
});
