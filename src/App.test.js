import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('Button has correct initial color', () => {
  render(<App />);

  // De este modo no solo nos aseguramos de que este renderizado, sino tambien que tenga el texto correcto
  const button = screen.getByRole('button', { name: /change to blue/i });

  // expect the background color to be red
  expect(button).toHaveStyle({ backgroundColor: 'red' });

  // click button
  fireEvent.click(button);

  // expect the background color to have changed to blue
  expect(button).toHaveStyle({ backgroundColor: 'blue' });

  // expect the button text to be 'Change to red'
  expect(button.textContent).toBe('Change to red');
});

test('Initial conditions', () => {
  // dont forget to render the component!
  render(<App />);

  // check that the button starts out enabled
  const button = screen.getByRole('button', { name: /change to blue/i });
  expect(button).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});
