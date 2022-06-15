import * as React from "react";
import ReactDOMServer from "react-dom/server";
import { ParsedRequest } from "../types";
import { ChakraProvider } from "@chakra-ui/react";
import { Box, Text } from "@chakra-ui/react";

export default function getHtml(parsedReq: ParsedRequest) {
  const {
    fileType,
    title,
    subtitle,
    naturalStat,
    industrialStat,
    pollutionStat,
    infrastructureStat,
    goodNewsStat,
  } = parsedReq;
  return `<!DOCTYPE html>
      ${ReactDOMServer.renderToStaticMarkup(
        <ChakraProvider>
          <Box bg="gray">
            <Text fontSize="xl">TESTING</Text>
          </Box>
        </ChakraProvider>
      )}`;
}
