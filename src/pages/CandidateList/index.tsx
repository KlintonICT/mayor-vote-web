import { SimpleGrid, Box, Heading, Stack } from '@chakra-ui/react';

import Candidate, { CandidateProps } from 'components/Candidate';

import { rem } from 'lib';
import { CandidateAPI } from 'api';
import useFetch from 'hooks/useFetch';

const CandidateList = () => {
  const { data } = useFetch(CandidateAPI.getList);
  const candidates = data as unknown as CandidateProps[];

  return (
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
          {candidates?.map((candidate: CandidateProps) => (
            <Candidate {...candidate} key={candidate.id} />
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
};

export default CandidateList;
