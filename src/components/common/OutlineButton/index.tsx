import { ReactNode } from 'react';
import { Button } from '@chakra-ui/react';

interface OutlineButtonProps {
  children: ReactNode;
  width?: string;
  maxW?: string;
  onClick?: () => void;
}

const OutlineButton = ({
  children,
  width = '100%',
  maxW,
  onClick,
}: OutlineButtonProps) => (
  <Button
    color="textColorGray"
    _hover={{ bgColor: 'none' }}
    _focus={{ bgColor: 'none', outline: 'none' }}
    _active={{ bgColor: 'none', outline: 'none' }}
    variant="outline"
    width={width}
    maxW={maxW}
    onClick={onClick}
  >
    {children}
  </Button>
);

export default OutlineButton;
