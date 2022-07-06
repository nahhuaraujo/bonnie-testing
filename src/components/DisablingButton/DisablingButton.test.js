import { render, screen, fireEvent } from '@testing-library/react';

import DisablingButton from './DisablingButton';

test('Component starts enabled and toggles whenever checkbox is clicked', () => {
  render(<DisablingButton />);

  const checkbox = screen.getByRole('checkbox');
  const button = screen.getByRole('button', { name: /send/i });

  expect(checkbox).not.toBeChecked();
  expect(button).toBeEnabled();

  fireEvent.click(checkbox);

  expect(checkbox).toBeChecked();
  expect(button).toBeDisabled();

  fireEvent.click(checkbox);

  expect(checkbox).not.toBeChecked();
  expect(button).toBeEnabled();
});
