import { render, screen } from '@testing-library/react';

import CandidateList from '.';

test('renders CandidateList page', () => {
  render(<CandidateList />);

  const lineTownText = screen.getByText(/LINE TOWN/i);
  const electionText = screen.getByText(/election/i);

  expect(lineTownText).toBeInTheDocument();
  expect(electionText).toBeInTheDocument();
});
