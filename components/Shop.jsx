import { Box, Flex, Text, Button, Badge, Image } from "@chakra-ui/react";
import NextLink from "next/link";
import { MdAddShoppingCart } from "react-icons/md";

const Shop = ({ products }) => {
  return (
    <>
      <Flex flexWrap="wrap">
        {products.map((item) => (
          <Flex key={item.id} justifyContent="center" alignItems="center">
            <Box mx={12}>
              <Box
                p="2"
                bg="blue.50"
                style={{ borderRadius: "10px", overflow: "hidden" }}
                mb="4"
              >
                <Image src={`https://${item.imageUrl}`} alt="" />
                <Box p="1" maxWidth="300px" w="280px">
                  <Text fontWeight="bold">{item.brandName}</Text>
                  <Text fontSize="10px" isTruncated>
                    {item.name}
                  </Text>
                  <Text pb="1">{item.price.current.text}</Text>
                  <Flex justifyContent="space-between">
                    <MdAddShoppingCart fontSize="25px" />
                    <NextLink href={`/shop/${item.id}`} passHref bg="gray.200">
                      <Button colorScheme="blue" size="sm">
                        View More
                      </Button>
                    </NextLink>
                  </Flex>
                </Box>
              </Box>
            </Box>
          </Flex>
        ))}
      </Flex>
    </>
  );
};

export default Shop;
