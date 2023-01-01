import React from "react";
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
  Button,
} from "@chakra-ui/react";
import data  from "../db.json";


const TableData = ({setTaxAmount}) => {
  const handleCalculate = (e) => {
    if(e.item_type >= 3){
        alert("Item Type more than or equal to 3");
    }
    else{
        let percent = e.item_type == 0 ? 0.05 : e.item_type == 1 ? 0.08 : e.item_type == 2 ? 0.12 : null
        if(percent){
            const calculatedTax = Number(e.amount * percent)
            setTaxAmount(calculatedTax);
        }

    }

  };
  return (
    <div>
      <TableContainer w={"75%"} margin="auto" mt={"111px"}>
        <Table variant="striped" colorScheme="red">
          <Thead>
            <Tr>
              <Th>S.No</Th>
              <Th>Amount</Th>   
              <Th>Item_Type</Th>
              <Th>Tax_rate</Th>
              <Th>Calculate</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.invoices &&
              data.invoices.map((e, i) => {
                return (
                  <Tr>
                    <Td>{e.sno}</Td>
                    <Td>{e.amount}</Td>
                    <Td>{e.item_type}</Td>
                    <Td>
                      {e.item_type == 0
                        ? "5%"
                        : e.item_type == 1
                        ? "8%"
                        : e.item_type == 2
                        ? "12%"
                        : "NA"}
                    </Td>
                    <Td>
                      <Button
                        backgroundColor={"crimson"}
                        color={"white"}
                        _hover={{backgroundColor: "crimson"}}
                        onClick={() => handleCalculate(e)}
                      >
                        Calculate
                      </Button>
                    </Td>
                  </Tr>
                );
              })}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableData;
