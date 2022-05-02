import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "../styles/globals.css";

const colors = {
  brand: {
    yellow: "red",
  },
};

const theme = extendTheme({ colors });

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
