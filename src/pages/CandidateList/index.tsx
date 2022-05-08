import { useState, useEffect } from 'react';
import {
  SimpleGrid,
  Box,
  Heading,
  Stack,
  useDisclosure,
  Text,
} from '@chakra-ui/react';

import { CandidateAPI, ElectionAPI, VoteAPI } from 'api';
import useFetch from 'hooks/useFetch';

import { rem } from 'lib';
import { Candidate, CandidateResult, ElectionStatus } from 'lib/interface';

import CandidateCard from 'components/CandidateCard';
import VoteForm from 'components/VoteForm';
import VoteStatus from 'components/VoteStatus';

const CandidateList = () => {
  const { data } = useFetch(CandidateAPI.getList);
  const { data: dataElectionStatus } = useFetch(ElectionAPI.getStatus);
  const { data: dataElectionResult } = useFetch(ElectionAPI.getResult);
  const candidates = data as unknown as Candidate[];
  const candidateResult = dataElectionResult as unknown as CandidateResult[];
  const electionStatus = dataElectionStatus as unknown as ElectionStatus;

  const isOpeningVote = electionStatus?.enable;
  const isClosedVote = !electionStatus?.enable && candidateResult?.length > 0;

  const [votingCandidate, setVotingCandidate] = useState({ id: '', name: '' });
  const [newMayor, setNewMayor] = useState<any[]>([]);

  const {
    isOpen: isOpenVoteForm,
    onOpen: onOpenVoteForm,
    onClose: onCloseVoteForm,
  } = useDisclosure();
  const {
    isOpen: isOpenVoteStatus,
    onOpen: onOpenVoteStatus,
    onClose: onCloseVoteStatus,
  } = useDisclosure();

  useEffect(() => {
    if (isClosedVote) {
      const maxVote = Math.max(...candidates.map((item) => item.votedCount));
      const maxMayorVote = candidates
        .map((item) => {
          if (item.votedCount === maxVote) {
            return item;
          }
        })
        .filter((item) => item !== undefined);

      setNewMayor(maxMayorVote);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isClosedVote]);

  const getSameHighestMayorVote = () =>
    newMayor.map((item: any) => item.name).join(', ');

  const onClickVote = (id: string, name: string) => {
    setVotingCandidate({ id, name });
    onOpenVoteForm();
  };

  const onSubmitVote = async (nationalId: string) => {
    try {
      const { data: vote } = await VoteAPI.post({
        nationalId,
        candidateId: votingCandidate.id,
      });

      onCloseVoteForm();
      setVotingCandidate({ id: '', name: '' });
      if (vote?.status === 'error' && vote?.message === 'Already voted') {
        onOpenVoteStatus();
      }
    } catch (error) {
      console.log(error);
      onCloseVoteForm();
      setVotingCandidate({ id: '', name: '' });
    }
  };

  return (
    <>
      <Box
        py={{ base: rem(30), md: rem(40) }}
        px={rem(15)}
        d="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Stack direction={['column', 'row']}>
          <Heading size="xl" color="primary" textAlign="center">
            LINE TOWN
          </Heading>
          <Heading size="xl" color="primary" textAlign="center">
            Election
          </Heading>
        </Stack>

        {newMayor.length === 1 && (
          <Box mt={{ base: rem(30), md: rem(40) }}>
            <Stack
              direction={['column', 'row']}
              justifyContent="center"
              alignItems="center"
            >
              <Heading size="md" color="textColor">
                The new mayor is:
              </Heading>
              <Heading size="lg" color="primary" textAlign="center">
                {`#${newMayor[0].id} ${newMayor[0].name}`}
              </Heading>
            </Stack>
          </Box>
        )}

        {newMayor.length > 1 && (
          <Box mt={{ base: rem(30), md: rem(40) }} d="flex">
            <Stack
              direction={['column', 'row']}
              justifyContent="center"
              alignItems="center"
            >
              <Heading size="md" color="textColor">
                {getSameHighestMayorVote()}
              </Heading>
              <Text size="md">are having the same highest number of votes</Text>
            </Stack>
          </Box>
        )}

        {candidates?.length > 0 && (
          <SimpleGrid
            w="100%"
            maxW={rem(1240)}
            mt={{ base: rem(30), md: rem(40) }}
            columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
            spacing={rem(30)}
          >
            {candidates?.map((candidate: Candidate) => (
              <CandidateCard
                {...candidate}
                key={candidate.id}
                onClickVote={onClickVote}
                isOpeningVote={isOpeningVote}
                isClosedVote={isClosedVote}
                candidateResult={candidateResult}
              />
            ))}
          </SimpleGrid>
        )}
      </Box>

      <VoteForm
        isOpen={isOpenVoteForm}
        onClose={onCloseVoteForm}
        onSubmitVote={onSubmitVote}
        candidateName={votingCandidate.name}
      />
      <VoteStatus isOpen={isOpenVoteStatus} onClose={onCloseVoteStatus} />
    </>
  );
};

export default CandidateList;
