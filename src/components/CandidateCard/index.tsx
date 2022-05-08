import {
  Image,
  Box,
  Heading,
  Stack,
  Text,
  Link,
  Progress,
} from '@chakra-ui/react';

import { age, rem, voteAvg } from 'lib';
import { Candidate, CandidateResult } from 'lib/interface';

import PrimaryButton from 'components/common/PrimaryButton';

export interface CandidateCardProps extends Candidate {
  onClickVote: (candidateId: string, name: string) => void;
  isOpeningVote: boolean;
  isClosedVote: boolean;
  candidateResult: CandidateResult[];
}

const CandidateCard = ({
  id,
  name,
  dob,
  bioLink,
  policy,
  imageURL,
  votedCount,
  onClickVote,
  isOpeningVote,
  isClosedVote,
  candidateResult,
}: CandidateCardProps) => {
  const getPercentage = (): number => {
    const candidate = candidateResult.find(
      (item: CandidateResult) => item.id === id
    );

    return candidate ? +candidate.percentage.replace(/%/g, '') : 0;
  };

  return (
    <Box
      w="100%"
      boxShadow="md"
      rounded="lg"
      p={rem(10)}
      d="flex"
      flexDirection="column"
    >
      <Link
        href={bioLink}
        isExternal
        _hover={{ textDecoration: 'none' }}
        _focus={{ outline: 'none' }}
      >
        <Stack
          direction={['row', 'row', 'column']}
          justify={{ base: 'space-between' }}
        >
          <Box
            position="relative"
            width={{ base: '48%', md: '100%' }}
            mb={{ md: rem(10) }}
          >
            <Image
              width="100%"
              height={{ base: rem(100), md: rem(200) }}
              objectFit="cover"
              src={imageURL}
              alt={name}
              rounded="lg"
            />
            <Heading
              position="absolute"
              top="0"
              right="0"
              bgColor="#E6E6E6"
              padding={rem(10)}
              roundedBottomLeft="lg"
              roundedTopRight="lg"
            >
              {id}
            </Heading>
          </Box>

          <Stack
            width={{ base: '48%', md: '100%' }}
            direction={['column', 'column', 'row']}
            justify={{ md: 'space-between' }}
          >
            <Box>
              <Heading size="md" color="color">
                {name}
              </Heading>
              <Text color="colorGray">{age(dob)}</Text>
            </Box>

            <Box textAlign={{ base: 'left', md: 'center' }}>
              <Heading size="md" color="color">
                {voteAvg(votedCount)}
              </Heading>
              <Text color="colorGray">votes</Text>
            </Box>
          </Stack>
        </Stack>
      </Link>

      <Heading size="md" my={rem(20)} textAlign="center" fontStyle="italic">
        {`"${policy}"`}
      </Heading>

      <Box flexGrow={1} />
      {isOpeningVote && (
        <Box textAlign="center">
          <PrimaryButton onClick={() => onClickVote(id, name)} maxW={rem(200)}>
            Vote
          </PrimaryButton>
        </Box>
      )}
      {isClosedVote && (
        <Box>
          <Text>{`${getPercentage()}%`}</Text>
          <Progress height={rem(30)} value={getPercentage()} />
        </Box>
      )}
    </Box>
  );
};

export default CandidateCard;
