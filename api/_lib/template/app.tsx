import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Flex, Text, Stack, Divider } from "@chakra-ui/react";
import { ParsedRequest } from "../types";
import { Logo } from "./icons";
import { StatBox } from "./stat-box";

export const App = (props: ParsedRequest) => {
  const {
    title,
    subtitle,
    naturalStat,
    industrialStat,
    pollutionStat,
    infrastructureStat,
    goodNewsStat,
  } = props;
  return (
    <ChakraProvider>
      <Flex
        w="1200px"
        h="630px"
        direction="column"
        bgGradient="linear(to-r, green.50,  blue.100)"
        p="30px"
        justify="space-between"
      >
        <Logo width="2xs" ml="auto" />
        <Stack pl="3rem" direction="column" width="max-content" mb="5rem">
          <Text fontSize="6xl" fontWeight="bold">
            {title}
          </Text>
          <Divider height=".25rem" background="black" />
          <Text fontSize="5xl" color="gray.700" fontWeight="bold">
            {subtitle}
          </Text>
        </Stack>
        <Flex
          height="3xs"
          direction="row"
          align="center"
          justify="space-between"
          p="5rem"
        >
          {[
            naturalStat,
            industrialStat,
            pollutionStat,
            infrastructureStat,
            goodNewsStat,
          ].map((stat: string, idx: number) => {
            return <StatBox key={idx} stat={stat} />;
          })}
        </Flex>
      </Flex>
    </ChakraProvider>
  );
};
