import { Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import TableData from "./TableData";

const Problem2 = () => {
    const [tax, setTax] = useState(null);
    const setTaxAmount = (data) => {
        setTax(data);
    }
    
  return (
    <div>
        <TableData setTaxAmount={setTaxAmount}/>
        <Text fontSize={"1.5rem"} fontWeight={"bold"} textAlign={"center"} mt={5} marginBottom={5}>Calculated Tax Value: {tax == null ? "Click on calculate Btn" : `₹${tax}`}</Text>
    </div>
  );
};

export default Problem2;
