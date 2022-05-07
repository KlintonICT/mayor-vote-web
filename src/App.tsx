import { ChakraProvider } from '@chakra-ui/react';

import theme from 'styles/theme';

import Fonts from 'styles/Fonts';
import CandidateList from 'pages/CandidateList';

const App = () => (
  <ChakraProvider theme={theme}>
    <Fonts />
    <CandidateList />
  </ChakraProvider>
);

export default App;
