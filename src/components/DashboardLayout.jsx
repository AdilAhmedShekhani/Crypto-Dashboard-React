import { Box, Flex } from "@chakra-ui/react";
import Sidenav from "./Sidenav";
import TopNav from "./TopNav";

const DashboardLayout = ({ title, children }) => {
  return (
    <Box>
      <Flex>
        <Sidenav />
        <Box flexGrow={1}>
          <TopNav title={title} />
          <Box px="4">{children}</Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default DashboardLayout;
