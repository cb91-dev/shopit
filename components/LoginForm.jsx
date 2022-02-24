import {
  Box,
  Input,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";

const LoginForm = () => {
  return (
    <>
      <Box h="100px" />

      <Flex justifyContent="center" p="1">
        <Flex
          p="2"
          justifyContent="center"
          bg="blue.100"
          style={{ borderRadius: "10px", overflow: "hidden" }}
          flexDirection="column"
        >
          <Box p="1" bg="blue.50">
            <Box w="340px">
              <Text size="lg" fontWeight="bold">
                Welcome back friend
              </Text>
              <Box h="10" />
              <FormControl isRequired>
                <Box pb="20px">
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input id="email" placeholder="please enter email here" />
                </Box>
                <Box>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Input id="pword" placeholder="please enter password here" />
                </Box>
              </FormControl>
            </Box>
            <Box w="340px" pt="10px">
              <Flex justifyContent="flex-end">
                <Box>
                  <Button colorScheme="blue">Login</Button>
                </Box>
                <Box pl="5px">
                  <Link href="/" passHref>
                    <Button colorScheme="red">Back</Button>
                  </Link>
                </Box>
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default LoginForm;
