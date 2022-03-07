import { Flex, Grid, Box, GridItem, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";
import stock from "../assets/stock.jpg";
import { fetchApi, baseUrl } from "../utils/fetchApi";

const Home = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <>
      {isMobile ? (
        <Flex>
          <Box>
            <Flex flexDirection="column">
              <Box px="1" pt="1">
                <Image alt="hello" src={stock} h="100" w="100" />
              </Box>
              <Flex justifyContent="space-evenly">
                <Box p="1">
                  <Image alt="hello" src={stock} h="100" w="100" />
                </Box>
                <Box p="1">
                  <Image alt="hello" src={stock} h="100" w="100" />
                </Box>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      ) : (
        <Box>
          <Grid bg="blue.500" col="12" justifyItems="center">
            <GridItem>
              <Image alt="hello" src={stock} h="100" w="100" />
            </GridItem>
            <GridItem>
              <Image alt="hello" src={stock} height="100" w="100" />
            </GridItem>
            <GridItem>
              <Image alt="hello" src={stock} height="100" w="100" />
            </GridItem>
          </Grid>
        </Box>
      )}
    </>
  );
};

export default Home;
