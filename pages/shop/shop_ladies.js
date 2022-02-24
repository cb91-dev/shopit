import { baseUrl, fetchApiLadies } from "../../utils/fetchApi";
import Shop from "../../components/Shop";
const shop_ladies = ({ ladiesClothing: { products } }) => {
  console.log(products);
  return (
    <>
      <Shop products={products} />
    </>
  );
};

export default shop_ladies;
export const getStaticProps = async () => {
  const data = await fetchApiLadies(`${baseUrl}/products/v2/list`);

  return {
    props: {
      ladiesClothing: data,
    },
  };
};
