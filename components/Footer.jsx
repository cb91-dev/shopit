import { Box, Flex } from "@chakra-ui/react";

const Footer = () => (
  <Flex
    justifyContent="space-between"
    mt="1"
    borderTop="1px"
    borderTopColor="blue"
  >
    <Box textAlign="center" p="5" color="gray.600">
      2021 Shop It , Inc
    </Box>
    <Box p="5" color="gray.600">
      Bennett Designs
    </Box>
  </Flex>
);

export default Footer;
