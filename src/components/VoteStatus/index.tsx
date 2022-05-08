import {
  Modal,
  ModalOverlay,
  ModalContent,
  Text,
  useBreakpointValue,
  Box,
} from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

import { rem } from 'lib';
import PrimaryButton from 'components/common/PrimaryButton';

export interface VoteStatusProps {
  isOpen: boolean;
  onClose: () => void;
}

const VoteStatus = ({ isOpen, onClose }: VoteStatusProps) => {
  const size = useBreakpointValue({ base: 'sm', md: 'md' });

  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered size={size}>
      <ModalOverlay />
      <ModalContent p={rem(30)}>
        <Box d="flex" flexDirection="column" alignItems="center">
          <CheckCircleIcon color="primary" w={rem(100)} h={rem(100)} />
          <Text mt={rem(20)} mb={rem(50)}>
            You have already voted
          </Text>
          <PrimaryButton onClick={onClose}>Done</PrimaryButton>
        </Box>
      </ModalContent>
    </Modal>
  );
};

export default VoteStatus;
