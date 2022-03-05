import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../../styles/theme';
import { SidebarDrawerProvider } from '../context/SidebarDrawerContext';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <SidebarDrawerProvider>
        <Component {...pageProps} />
      </SidebarDrawerProvider>
    </ChakraProvider>
  );
}

export default MyApp;
