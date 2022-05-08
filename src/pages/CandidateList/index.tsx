import { useState } from 'react';
import {
  SimpleGrid,
  Box,
  Heading,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';

import { CandidateAPI } from 'api';
import useFetch from 'hooks/useFetch';

import { rem } from 'lib';
import { Candidate } from 'lib/interface';

import CandidateCard from 'components/CandidateCard';
import VoteForm from 'components/VoteForm';
import VoteStatus from 'components/VoteStatus';

const CandidateList = () => {
  const { data } = useFetch(CandidateAPI.getList);
  const candidates = data as unknown as Candidate[];

  const [votingCandidate, setVotingCandidate] = useState({ id: '', name: '' });

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

  const onClickVote = (id: string, name: string) => {
    setVotingCandidate({ id, name });
    onOpenVoteForm();
  };

  const onSubmitVote = ({ nationalId }: any) => {
    console.log(nationalId);
    onCloseVoteForm();
    onOpenVoteStatus();
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

        {data && (
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
