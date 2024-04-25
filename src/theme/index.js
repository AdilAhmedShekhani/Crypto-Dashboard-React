import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    p: {
      purple: "#5F00D9",
      black: "#171717",
    },
    black: {
      5: "#F3F3F7",
      10: "#EEEEF4",
      20: "#D8DDE2",
      40: "#BABAC4",
      60: "#797E82",
      80: "#535D66",
    },
  },
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
