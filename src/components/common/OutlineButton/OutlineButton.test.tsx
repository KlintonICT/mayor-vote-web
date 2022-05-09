import { render, screen } from '@testing-library/react';

import OutlineButton from '.';

test('renders OutlineButton', () => {
  render(<OutlineButton>Click OutlineButton</OutlineButton>);

  const button = screen.getByText(/Click OutlineButton/i);
  expect(button).toBeInTheDocument();
});
