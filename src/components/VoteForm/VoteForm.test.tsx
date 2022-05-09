import { render, screen } from '@testing-library/react';

import VoteForm from '.';

test('renders VoteForm', () => {
  render(
    <VoteForm
      candidateName="My name"
      isOpen={true}
      onClose={jest.fn()}
      onSubmitVote={jest.fn()}
    />
  );

  const formTitle = screen.getByText(
    /please enter your national ID to vote for/i
  );
  const candidateName = screen.getByText(/my name/i);
  const confirmBtn = screen.queryByRole('button', { name: 'Confirm' });
  const cancelBtn = screen.queryByRole('button', { name: 'Cancel' });

  expect(formTitle).toBeInTheDocument();
  expect(candidateName).toBeInTheDocument();
  expect(confirmBtn).toBeInTheDocument();
  expect(cancelBtn).toBeInTheDocument();
});

test('should have input field to input national id', () => {
  render(
    <VoteForm
      candidateName="My name"
      isOpen={true}
      onClose={jest.fn()}
      onSubmitVote={jest.fn()}
    />
  );

  const input = screen.getByPlaceholderText('X-XXXX-XXXXX-XX-X');
  expect(input).toBeInTheDocument();
});
