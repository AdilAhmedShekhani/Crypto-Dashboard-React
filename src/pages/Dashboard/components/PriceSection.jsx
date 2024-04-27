import {
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";
import { CustomCard } from "../../../chakra/CustomCard";
import { FaArrowTrendUp, FaCirclePlus } from "react-icons/fa6";
import { FaMinusCircle } from "react-icons/fa";

const PriceSection = () => {
  const timestamps = ["7:15 PM", "7:55 PM", "8:55 PM", "9:55 PM", "10:55 PM", "11:55 PM"];

  return (
    <CustomCard>
      <Flex justify="space-between" align="start">
        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Wallet Balances</Text>
          </HStack>
          <HStack
            spacing={2}
            align={{
              base: "flex-start",
              sm: "start",
            }}
            flexDir={{
              base: "column",
              sm: "row",
            }}
          >
            <HStack>
              <Text textStyle="h2" fontWeight="medium">
                22.39401000
              </Text>{" "}
              <HStack fontWeight="medium" color="green">
                <Icon as={FaArrowTrendUp} />
                <Text fontSize="sm" fontWeight="medium">
                  22%
                </Text>
              </HStack>{" "}
            </HStack>
          </HStack>
        </Stack>
        <HStack>
          <Button leftIcon={<Icon as={FaCirclePlus} />}>Buy</Button>
          <Button leftIcon={<Icon as={FaMinusCircle} />}>Sell</Button>
        </HStack>
      </Flex>
      <Image w="100%" src="/graph.svg" mt="3rem" />
      <HStack justify="space-between">
        {timestamps.map((timestamp) => (
          <Text key={timestamp} fontSize="sm" color="black.80">
            {timestamp}
          </Text>
        ))}
      </HStack>
    </CustomCard>
  );
};

export default PriceSection;
