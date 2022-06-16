import * as React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

export const StatBox = (props: { stat: string }) => {
  const { stat } = props;
  return (
    <Flex
      bg="white"
      direction="column"
      width="9rem"
      height="9rem"
      borderRadius=".75rem"
      p="1rem"
      align="center"
      justify="space-between"
    >
      <CheckCircleIcon boxSize="1.9rem" color="blue.700" />
      <Text fontSize="2rem" fontWeight="medium">
        {stat}
      </Text>
      <Text fontSize="1rem" align="center" lineHeight=" 1.25rem">
        placeholder description
      </Text>
    </Flex>
  );
};
