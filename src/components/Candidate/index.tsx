import { Image, Box, Heading, Stack, Text, Link } from '@chakra-ui/react';

import { age, rem, voteAvg } from 'lib';

import PrimaryButton from 'components/common/PrimaryButton';

export interface CandidateProps {
  id: string;
  name: string;
  dob: string;
  bioLink: string;
  policy: string;
  imageURL: string;
  votedCount: number;
}

const Candidate = ({
  id,
  name,
  dob,
  bioLink,
  policy,
  imageURL,
  votedCount,
}: CandidateProps) => (
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
    <Box textAlign="center">
      <PrimaryButton maxW={rem(200)}>Vote</PrimaryButton>
    </Box>
  </Box>
);

export default Candidate;
