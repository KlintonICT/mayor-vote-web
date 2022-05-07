import { ChakraProvider } from '@chakra-ui/react';

import theme from 'theme';

import Fonts from 'theme/Fonts';
import CandidateList from 'pages/CandidateList';

const App = () => (
  <ChakraProvider theme={theme}>
    <Fonts />
    <CandidateList />
  </ChakraProvider>
);

export default App;
