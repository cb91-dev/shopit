import {
  Box,
  Flex,
  Avatar,
  HStack,
  Input,
  Button,
  Text,
  Heading,
} from "@chakra-ui/react";

const ProfileDetails = () => {
  return (
    <>
      <Box h="15px"></Box>
      <Box p="3">
        <Flex bg="blue.50" p="2" w="100">
          <HStack align="stretch" p="3">
            <Box h="10"></Box>
            <Box bg="blue.50" h="400" w="100">
              <Box p="3">
                <Avatar
                  size="2xl"
                  name="Segun Adebayo"
                  src="https://bit.ly/sage-adebayo"
                />
              </Box>
            </Box>
          </HStack>
          <HStack align="stretch" p="3">
            <Box h="10"></Box>
            <Box bg="blue.50" h="400" w="100">
              <Heading fontSize="20">
                Welcome Back <br />
                User
              </Heading>
              <Input variant="unstyled" placeholder="Unstyled" />
            </Box>
          </HStack>
        </Flex>
      </Box>
    </>
  );
};

export default ProfileDetails;
