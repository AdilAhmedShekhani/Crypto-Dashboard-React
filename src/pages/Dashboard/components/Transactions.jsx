import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { CustomCard } from "../../../chakra/CustomCard";
import { FaBtc, FaRupeeSign } from "react-icons/fa6";
import { Fragment } from "react";

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
    <CustomCard h="full">
      <Text mb="6" fontSize="sm" color="b">
        Recent Transactions
      </Text>
      <Stack spacing={4}>
        {transactions.map((transaction, i) => (
          <Fragment key={transaction.id}>
            {i === 0 && <Divider />}
            <Flex gap="4">
              <Grid
                placeItems="center"
                bg="black.5"
                boxSize={10}
                borderRadius="full"
              >
                <Icon as={transaction.icon} />
              </Grid>
              <Flex justify="space-between" w="full">
                <Stack spacing={0}>
                  <Text textStyle="h6">{transaction.text}</Text>
                  <Text fontSize="sm" color="black.40">
                    {transaction.timestamp}
                  </Text>
                </Stack>
                <Text textStyle="h6">{transaction.amount}</Text>
              </Flex>
            </Flex>
          </Fragment>
        ))}
      </Stack>
      <Button w="full" mt="6" colorScheme="gray">
        View All
      </Button>
    </CustomCard>
  );
};

export default Transactions;
