import {
  Modal,
  ModalOverlay,
  ModalContent,
  HStack,
  Heading,
  Text,
  useBreakpointValue,
  Box,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import { rem } from 'lib';

import NationalIDInput from 'components/common/NationalIDInput';
import PrimaryButton from 'components/common/PrimaryButton';
import OutlineButton from 'components/common/OutlineButton';

export interface VoteFormProps {
  candidateName: string;
  isOpen: boolean;
  onClose: () => void;
  onSubmitVote: (nationalId: string) => void;
}

const VoteForm = ({
  candidateName,
  isOpen,
  onClose,
  onSubmitVote,
}: VoteFormProps) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const size = useBreakpointValue({ base: 'sm', md: 'md' });

  const onSubmit = (data: any) => {
    onSubmitVote(data.nationalId);
    reset({ nationalId: '' });
  };

  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered size={size}>
      <ModalOverlay />
      <ModalContent p={rem(30)}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <HStack d="inline">
            <Text color="textColor" d="inline">
              Please enter your national ID to vote for
            </Text>
            <Heading size="md" color="textColor" d="inline">
              {candidateName}
            </Heading>
          </HStack>
          <Box mb={rem(10)} />
          <NationalIDInput
            errors={errors}
            register={register}
            validation={{ required: true }}
          />

          <Box mt={rem(100)} d="flex">
            <PrimaryButton isLoading={isSubmitting} type="submit">
              Confirm
            </PrimaryButton>
            <Box width={rem(50)} />
            <OutlineButton onClick={onClose}>Cancel</OutlineButton>
          </Box>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default VoteForm;
