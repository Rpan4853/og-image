import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Box, Text } from "@chakra-ui/react";
import { ParsedRequest } from "../types";
import { StatBox } from "./stat-box";

export const App = (props: ParsedRequest) => {
  const {
    fileType,
    title,
    subtitle,
    naturalStat,
    industrialStat,
    pollutionStat,
    infrastructureStat,
    goodNewsStat,
  } = props;
  console.log(props);
  return (
    <ChakraProvider>
      <Box bg="gray">
        <Text fontSize="xl">TESTING</Text>
      </Box>
    </ChakraProvider>
  );
};
