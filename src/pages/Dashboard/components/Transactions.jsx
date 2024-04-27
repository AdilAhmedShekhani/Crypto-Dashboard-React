import { Box, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import { CustomCard } from "../../../chakra/CustomCard";
import { FaBtc, FaRupeeSign } from "react-icons/fa6";

const Transactions = () => {
  const transactions = [
    {
      id: "1",
      icon: FaRupeeSign,
      text: "PKR Deposit",
      amount: "+ Rs.85,625.45",
      timestamp: "2024-05-09 7:06 PM",
    },
    {
      id: "2",
      icon: FaBtc,
      text: "BTC Sell",
      amount: "- 12.48513391 BTC",
      timestamp: "2024-05-09 7:06 PM",
    },
    {
      id: "3",
      icon: FaRupeeSign,
      text: "PKR Deposit",
      amount: "+ Rs.85,625.45",
      timestamp: "2024-05-09 7:06 PM",
    },
  ];
  return (
    <CustomCard>
      <Text fontSize="sm" color="b">
        Recent Transactions
      </Text>
      <Stack>
        {transactions.map((transaction) => (
          <Flex key={transaction.id}>
            <Box boxSize={10} borderRadius="full">
              <Icon as={transaction.icon} />
            </Box>
          </Flex>
        ))}
      </Stack>
    </CustomCard>
  );
};

export default Transactions;
