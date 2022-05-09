import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import NationalIDInput from '.';

test('renders NationalIDInput', () => {
  render(
    <NationalIDInput
      errors={{}}
      register={jest.fn()}
      validation={{ required: true }}
    />
  );

  const input = screen.getByPlaceholderText('X-XXXX-XXXXX-XX-X');
  expect(input).toBeInTheDocument();
});

test('input should produce hyphen in format X-XXXX-XXXXX-XX-X', async () => {
  render(
    <NationalIDInput
      errors={{}}
      register={jest.fn()}
      validation={{ required: true }}
    />
  );

  const thaiIdInput = screen.getByPlaceholderText('X-XXXX-XXXXX-XX-X');

  userEvent.type(thaiIdInput, '2370431614541');

  await waitFor(() => {
    expect(thaiIdInput).toHaveValue('2-3704-31614-54-1');
  });
});
