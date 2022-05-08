import { extendTheme } from '@chakra-ui/react';

const colors = {
  primary: '#07B53B',
  textColor: '#1E1E1E',
  textColorGray: '#777777',
};

const fonts = {
  heading: 'Noto Sans JP, sans-serif',
  body: 'Noto Sans JP, sans-serif',
};

const components = {
  Progress: {
    baseStyle: {
      filledTrack: {
        bg: '#07B53B',
      },
    },
  },
};

export default extendTheme({ colors, fonts, components });
