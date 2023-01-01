import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React, { CSSProperties } from "react";
import taxImg from "../images/tax-img.jpg";
import { AiOutlineDownload } from "react-icons/ai";
import { CSVLink } from "react-csv";
import { IconContext } from "react-icons";

import {
  useCSVReader,
  lightenDarkenColor,
  formatFileSize,
} from "react-papaparse";
import { useState } from "react";

const styles = {
  csvReader: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 10,
  },
  browseFile: {
    width: "20%",
  },
  acceptedFile: {
    border: "1px solid #ccc",
    height: 45,
    lineHeight: 2.5,
    paddingLeft: 10,
    width: "80%",
  },
  remove: {
    borderRadius: 0,
    padding: "0 20px",
    backgroundColor: "crimson",
    color: "white",
    fontWeight: "bold",
  },
  progressBarBackgroundColor: {
    backgroundColor: "red",
  },
};

const Problem1 = () => {
  const { CSVReader } = useCSVReader();
  const [calculate, setCalculate] = useState(false);
  const [calData, setCalData] = useState([]);

  const doJSONFormat = (data) => {
    setCalculate(false);
    let res = [];
    res.push(["s.no", "amount", "item_type", "tax"]);
    if (data) {
      for (let i = 1; i < data.length; i++) {
        if (data[i].length == 3) {
          if (data[i][2] == 0) {
            res.push([...data[i], Math.floor(Number(data[i][1]) * 0.05)]);
          } else if (data[i][2] == 1) {
            res.push([...data[i], Math.floor(Number(data[i][1]) * 0.08)]);
          } else if (data[i][2] == 2) {
            res.push([...data[i], Math.floor(Number(data[i][1]) * 0.12)]);
          } else {
            res.push([...data[i], "NA"]);
          }
        }
      }
    }
    setCalData(res);
    setCalculate(true);
  };


  return (
    <div>
      <Heading textAlign={"center"} mt={"111px"}>
        TAX Calculator Portal
      </Heading>
      <SimpleGrid columns={[1, 1, 2, 2]} gap={5} w={"75%"} margin="auto" mt={9}>
        <Box>
          <Image
            border={"2.5px solid crimson"}
            boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"}
            mt={5}
            borderRadius={"10%"}
            w={"35rem"}
            src={taxImg}
          />
        </Box>

        <Box w={"100%"} margin={"auto"}>
          <CSVReader
            onUploadAccepted={(results) => {
              doJSONFormat(results.data);
              console.log(results);
            }}
          >
            {({ getRootProps, acceptedFile, getRemoveFileProps }) => (
              <>
                <div style={styles.csvReader}>
                  <button
                    type="button"
                    {...getRootProps()}
                    style={styles.browseFile}
                  >
                    Browse file
                  </button>
                  <div style={styles.acceptedFile}>
                    {acceptedFile && acceptedFile.name}
                  </div>
                  <Button
                    
                    {...getRemoveFileProps()}
                    onClick={(event) => {
                      getRemoveFileProps().onClick(event);
                      console.log(1);
                      setCalculate(false)
                      setCalData([])
                  }}
                    style={styles.remove}
                  >
                    Remove
                  </Button>
                </div>
              </>
            )}
          </CSVReader>
          {calculate && (
            <CSVLink
              filename={"result.csv"}
              className="btn"
              style={{backgroundColor:"crimson", color: "white", fontWeight: "bold", padding: "7px"}}
              target="_blank"
              data={calData}
            >
              Download file{" "}
            </CSVLink>
          )}
        </Box>
      </SimpleGrid>
    </div>
  );
};

export default Problem1;
