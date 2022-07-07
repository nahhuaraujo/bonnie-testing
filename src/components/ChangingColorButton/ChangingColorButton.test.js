import { render, screen, fireEvent } from '@testing-library/react';

import ChangingColorButton from './ChangingColorButton';

test('Button and checkbox initial text, color, and display', () => {
  render(<ChangingColorButton />);

  const button = screen.getByRole('button', { name: /change to blue/i });
  const checkbox = screen.getByRole('checkbox', { name: /disable button/i });

  expect(button).toBeEnabled();
  expect(button).toHaveStyle({ backgroundColor: 'red' });

  expect(checkbox).not.toBeChecked();
});

test('Button changes color and text with a click', () => {
  render(<ChangingColorButton />);

  const button = screen.getByRole('button', { name: /change to blue/i });

  fireEvent.click(button);

  expect(button).toHaveStyle({ backgroundColor: 'blue' });
  expect(button.textContent).toBe('Change to red');

  fireEvent.click(button);

  expect(button).toHaveStyle({ backgroundColor: 'red' });
  expect(button.textContent).toBe('Change to blue');
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
  expect(button).toHaveStyle({ backgroundColor: 'grey' });
});
