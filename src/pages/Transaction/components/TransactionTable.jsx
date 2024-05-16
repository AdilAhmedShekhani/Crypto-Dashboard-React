import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

const TransactionTable = () => {
  const tableData = [
    {
      id: "HD82NA2H",
      date: "2024-05-20",
      time: "09:10 AM",
      type: {
        name: "PKR Deposit",
        tag: "E-Transfer",
      },
      amount: "+Rs.81,123",
      status: "pending",
    },
    {
      id: "HD82NA4H",
      date: "2024-06-18",
      time: "09:10 AM",
      type: {
        name: "PKR Widthdraw",
        tag: "Wire Transfer",
      },
      amount: "-Rs.55,123",
      status: "processing",
    },
    {
      id: "HD82NA5H",
      date: "2024-05-18",
      time: "09:10 AM",
      type: {
        name: "Buy",
        tag: "BTC",
      },
      amount: "12.0554484 BTC",
      status: "cancelled",
    },
    {
      id: "HD82NA6H",
      date: "2024-05-18",
      time: "09:10 AM",
      type: {
        name: "Sell",
        tag: "BTC",
      },
      amount: "-2.0554484 BTC",
      status: "completed",
    },
    {
      id: "HD82NA7H",
      date: "2024-05-20",
      time: "09:10 AM",
      type: {
        name: "BTC Deposit",
      },
      amount: "+15.5000000",
      status: "pending",
    },
    {
      id: "HD82NA8H",
      date: "2024-05-18",
      time: "09:10 AM",
      type: {
        name: "BTC Widthdraw",
      },
      amount: "-5.05555544",
      status: "completed",
    },
  ];

  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td isNumeric>25.4</Td>
          </Tr>
          <Tr>
            <Td>feet</Td>
            <Td>centimetres (cm)</Td>
            <Td isNumeric>30.48</Td>
          </Tr>
          <Tr>
            <Td>yards</Td>
            <Td>metres (m)</Td>
            <Td isNumeric>0.91444</Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

export default TransactionTable;
