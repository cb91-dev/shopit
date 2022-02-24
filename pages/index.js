import { Flex, Grid, Box, GridItem, useMediaQuery } from "@chakra-ui/react";

import { fetchApi, baseUrl } from "../utils/fetchApi";

const Home = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <p>home</p>
    </>
  );
};

export default Home;
