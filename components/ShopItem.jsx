import { Image, Box, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import ImageItemScroll from "./ImageItemScroll";

let ShopItem = ({ ItemDetails }) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const aboutMe = ItemDetails.info.aboutMe;

  return (
    <>
      {!isMobile ? (
        <Box bg="blue.50">
          <Flex flexDirection="column" justifyContent="center">
            <Box maxWidth={1000} p="5">
              <ImageItemScroll ItemDetails={ItemDetails} />
            </Box>
            <Box>
              <Text>{ItemDetails.brand.name}</Text>
              <Text>{ItemDetails.name}</Text>
              <Text>{ItemDetails.info.aboutMe}</Text>
            </Box>
          </Flex>
        </Box>
      ) : (
        <Box bg="blue.50">
          <Flex flexDirection="column" justifyContent="center">
            <Box maxWidth={500} p="5">
              <ImageItemScroll ItemDetails={ItemDetails} />
            </Box>
            <Box>
              <Text>{ItemDetails.brand.name}</Text>
              <Text>{ItemDetails.name}</Text>
              <Text>{ItemDetails.info.aboutMe}</Text>
            </Box>
          </Flex>
        </Box>
      )}
    </>
  );
};

export default ShopItem;
