import { render, screen } from '@testing-library/react';

import VoteStatus from '.';

test('renders VoteStatus', () => {
  render(<VoteStatus onClose={jest.fn()} isOpen={true} />);

  const content = screen.getByText(/You have already voted/i);
  const button = screen.queryByRole('button');

  expect(content).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});
