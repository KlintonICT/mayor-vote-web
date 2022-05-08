import { ReactNode } from 'react';
import { Button } from '@chakra-ui/react';

interface PrimaryButtonProps {
  children: ReactNode;
  width?: string;
  maxW?: string;
  onClick?: () => void;
  isLoading?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const PrimaryButton = ({
  children,
  width = '100%',
  maxW,
  onClick,
  isLoading,
  type,
}: PrimaryButtonProps) => (
  <Button
    bgColor="primary"
    color="white"
    _hover={{ bgColor: 'primary' }}
    _focus={{ bgColor: 'primary', outline: 'none' }}
    _active={{ bgColor: 'primary', outline: 'none' }}
    width={width}
    maxW={maxW}
    onClick={onClick}
    isLoading={isLoading}
    type={type}
  >
    {children}
  </Button>
);

export default PrimaryButton;
