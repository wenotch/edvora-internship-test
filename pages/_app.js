import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "../styles/globals.css";

const colors = {
  brand: {
    background: "#292929",
    gray: "#D0CBCB",
    black: "#101010",
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
