import { render, screen } from '@testing-library/react';

import { candidateData, candidateResultData } from './data.mock';
import CandidateCard from '.';

test('renders CandidateCard page', () => {
  render(
    <CandidateCard
      {...candidateData}
      onClickVote={jest.fn()}
      isOpeningVote={false}
      isClosedVote={false}
      candidateResult={candidateResultData}
    />
  );

  const name = screen.getByText(candidateData.name, { exact: false });
  const age = screen.getByText(/45 yrs/i);
  const votedCount = screen.getByText(/1/i);
  const policy = screen.getByText(candidateData.policy, { exact: false });

  expect(name).toBeInTheDocument();
  expect(age).toBeInTheDocument();
  expect(votedCount).toBeInTheDocument();
  expect(policy).toBeInTheDocument();
});

test('display vote button if vote is opened', () => {
  render(
    <CandidateCard
      {...candidateData}
      onClickVote={jest.fn()}
      isOpeningVote={true}
      isClosedVote={false}
      candidateResult={candidateResultData}
    />
  );

  const voteBtn = screen.queryByRole('button');

  expect(voteBtn).toBeInTheDocument();
});

test('display percentage and progress bar if vote is closed', () => {
  render(
    <CandidateCard
      {...candidateData}
      onClickVote={jest.fn()}
      isOpeningVote={false}
      isClosedVote={true}
      candidateResult={candidateResultData}
    />
  );

  const progressBar = screen.queryByRole('progressbar');
  const percentageText = screen.getByText(/100%/);

  expect(progressBar).toBeInTheDocument();
  expect(percentageText).toBeInTheDocument();
});
