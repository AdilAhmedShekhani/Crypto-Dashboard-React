import { Tag, Text } from "@chakra-ui/react";
import { CustomCard } from "../../../chakra/CustomCard";

const InfoCard = ({ imgUrl }) => {
  return (
    <CustomCard bgImage={imgUrl} bgSize="cover" bgRepeat="no-repeat">
      <Tag bg="p.purple" color={"white"} borderRadius="full">
        Loan
      </Tag>
      <Text textStyle="h5">
        Learn more about Loans - Keep your Bitcoin, access it's value without
        selling it.
      </Text>
    </CustomCard>
  );
};

export default InfoCard;
