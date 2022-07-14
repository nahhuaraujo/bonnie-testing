import { render, screen, fireEvent } from '@testing-library/react';

import ChangingColorButton from './ChangingColorButton';

import { replaceCamelCaseWithSpaces } from '../../util/util';
import { COLORS } from '../../constants/constants';

test('Button and checkbox initial text, color, and display', () => {
  render(<ChangingColorButton />);

  const button = screen.getByRole('button', { name: `Change to ${replaceCamelCaseWithSpaces(COLORS.MIDNIGHT_BLUE)}` });
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });

  expect(button).toBeEnabled();
  expect(button).toHaveStyle({ backgroundColor: COLORS.MEDIUM_VIOLET_RED });

  expect(checkbox).not.toBeChecked();
});

test('Button changes color and text with a click', () => {
  render(<ChangingColorButton />);

  const button = screen.getByRole('button', { name: `Change to ${replaceCamelCaseWithSpaces(COLORS.MIDNIGHT_BLUE)}` });

  fireEvent.click(button);

  expect(button).toHaveStyle({ backgroundColor: COLORS.MIDNIGHT_BLUE });
  expect(button.textContent).toBe(`Change to ${replaceCamelCaseWithSpaces(COLORS.MEDIUM_VIOLET_RED)}`);

  fireEvent.click(button);

  expect(button).toHaveStyle({ backgroundColor: COLORS.MEDIUM_VIOLET_RED });
  expect(button.textContent).toBe(`Change to ${replaceCamelCaseWithSpaces(COLORS.MIDNIGHT_BLUE)}`);
});

test('Button is disabled while checkbox is marked', () => {
  render(<ChangingColorButton />);

  const checkbox = screen.getByRole('checkbox');
  const button = screen.getByRole('button');

  fireEvent.click(checkbox);

  expect(checkbox).toBeChecked();
  expect(button).toBeDisabled();

  fireEvent.click(checkbox);

  expect(checkbox).not.toBeChecked();
  expect(button).toBeEnabled();
});

test('Button is grey while checkbox is marked', () => {
  render(<ChangingColorButton />);

  const checkbox = screen.getByRole('checkbox');
  const button = screen.getByRole('button');

  fireEvent.click(checkbox);

  expect(checkbox).toBeChecked();
  expect(button).toHaveStyle({ backgroundColor: COLORS.GREY });
});
