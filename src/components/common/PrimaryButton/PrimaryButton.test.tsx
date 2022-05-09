import { render, screen } from '@testing-library/react';

import PrimaryButton from '.';

test('renders PrimaryButton', () => {
  render(<PrimaryButton>Click PrimaryButton</PrimaryButton>);

  const button = screen.getByText(/Click PrimaryButton/i);
  expect(button).toBeInTheDocument();
});
