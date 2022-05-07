import { ReactNode } from 'react';
import { Button } from '@chakra-ui/react';

interface PrimaryButtonProps {
  children: ReactNode;
  width?: string;
  maxW?: string;
}

const PrimaryButton = ({
  children,
  width = '100%',
  maxW,
}: PrimaryButtonProps) => (
  <Button
    bgColor="primary"
    color="white"
    _hover={{ bgColor: 'primary' }}
    _focus={{ bgColor: 'primary', outline: 'none' }}
    _active={{ bgColor: 'primary', outline: 'none' }}
    width={width}
    maxW={maxW}
  >
    {children}
  </Button>
);

export default PrimaryButton;
