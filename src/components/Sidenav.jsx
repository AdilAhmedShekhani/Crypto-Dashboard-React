import {
  Box,
  Center,
  HStack,
  Heading,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { BsArrowDownUp } from "react-icons/bs";
import { RxDashboard } from "react-icons/rx";

const Sidenav = () => {
  const navLinks = [
    {
      icon: RxDashboard,
      text: "Dashboard",
      Link: "/",
    },
    {
      icon: BsArrowDownUp,
      text: "Transactions",
      Link: "/transactions",
    },
  ];
  return (
    <Stack boxShadow="sm" maxW="16rem" h="100vh">
      <Heading textAlign="center" fontSize="20px" as="h1" pt="3.5rem">
        Crypto Dashboard
      </Heading>
      <Box mt="6" mx="3">
        {navLinks.map((nav) => (
          <HStack
            key={nav.text}
            py="3"
            px="4"
            _hover={{
              bg: "#F3F3F7",
            }}
          >
            <Icon as={nav.icon} />
            <Text fontSize="14px">{nav.text}</Text>
          </HStack>
        ))}
      </Box>
    </Stack>
  );
};

export default Sidenav;
