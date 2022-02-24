import { baseUrl, fetchApiMen } from "../../utils/fetchApi";
import Shop from "../../components/Shop";
import { Box } from "@chakra-ui/react";

const shop_men = ({ mensClothing: { products } }) => {
  console.log(products);
  return (
    <>
      <Box h="15"></Box>
      <Shop products={products} />
    </>
  );
};

export default shop_men;
export const getStaticProps = async () => {
  const data = await fetchApiMen(`${baseUrl}/products/v2/list`);

  return {
    props: {
      mensClothing: data,
    },
  };
};
