import { render, screen, fireEvent } from '@testing-library/react';

import ChangingColorButton from './ChangingColorButton';

test('Components initial conditions are ok', () => {
  // No olvidemos renderizar el componente!
  render(<ChangingColorButton />);

  // Verificamos que el boton este 'enabled' al iniciar
  const button = screen.getByRole('button', { name: /change to blue/i });
  expect(button).toBeEnabled();

  // Verificamos que el checkbox no este checkeado al iniciar
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

test('Components has correct initial color and changes with a click', () => {
  // Renderizamos el componente
  render(<ChangingColorButton />);

  // Seleccionamos al boton con una query
  // De este modo verificamos el renderizado, y tambien que tenga el texto correcto
  const button = screen.getByRole('button', { name: /change to blue/i });

  // Verificamos que el background sea 'red'
  expect(button).toHaveStyle({ backgroundColor: 'red' });

  // Disparamos el evento de click en el boton
  fireEvent.click(button);

  // Verificamos que luego del click haya cambiado a 'blue'
  expect(button).toHaveStyle({ backgroundColor: 'blue' });

  // Con el cambio de color, verificamos el texto del boton haya cambiado a 'red'
  expect(button.textContent).toBe('Change to red');
});
