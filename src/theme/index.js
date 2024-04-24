import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: `Ubuntu`,
    body: "Ubuntu",
  },
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "#F3F3F7",
      },
    },
  },
});
