import {
  Box,
  Input,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import Link from "next/link";

const RegForm = (props) => {
  const [userInput, setUserInput] = useState({});

  const firstNameChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      firstName: event.target.value,
    });
  };
  const lastNameChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      lastName: event.target.value,
    });
  };
  const emailChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      email: event.target.value,
    });
  };
  const passwordChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      password: event.target.value,
    });
  };

  const handlerSubmit = (evt) => {
    evt.preventDefault();
    const newUserData = {
      userInput,
    };
    props.RegFormSubmitData(newUserData);
  };
  return (
    <>
      <Box h="50px" />

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
                Welcome !!!
                <br />
                Please enter your details to make complete account
              </Text>
              <Box h="10" />
              <form id="reg_form" onSubmit={handlerSubmit}>
                <FormControl isRequired>
                  <Box pb="20px">
                    <FormLabel htmlFor="first_name">First Name</FormLabel>
                    <Input
                      id="first_name"
                      onChange={firstNameChangeHandler}
                      placeholder="Please enter first name"
                    />
                  </Box>
                  <Box pb="20px">
                    <FormLabel htmlFor="last_name">Last Name</FormLabel>
                    <Input
                      onChange={lastNameChangeHandler}
                      id="last_name"
                      placeholder="Please enter last name here"
                    />
                  </Box>
                  <Box pb="20px">
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input
                      onChange={emailChangeHandler}
                      id="email"
                      placeholder="please enter email here"
                    />
                  </Box>
                  <Box>
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <Input
                      id="pword"
                      onChange={passwordChangeHandler}
                      placeholder="please enter password here"
                      type="password"
                    />
                  </Box>
                </FormControl>
                <Box w="340px" pt="10px">
                  <Flex justifyContent="flex-end">
                    <Box>
                      <Button onClick={handlerSubmit} colorScheme="blue">
                        Sign Up
                      </Button>
                    </Box>
                    <Box pl="5px">
                      <Link href="/" passHref>
                        <Button colorScheme="red">Back</Button>
                      </Link>
                    </Box>
                  </Flex>
                </Box>
              </form>
            </Box>
          </Box>
        </Flex>
      </Flex>
      <Box h="50px" />
    </>
  );
};

export default RegForm;
