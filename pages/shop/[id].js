import { baseUrl, fetchApiItemDetails } from "../../utils/fetchApi";
import ShopItem from "../../components/ShopItem";
import ReactDOM from "react-dom";

const ItemDetails = ({ ItemDetails }) => {
  const SLIDE_COUNT = 5;
  const slides = Array.from(Array(SLIDE_COUNT).keys());
  console.log(ItemDetails);
  return (
    <>
      <ShopItem ItemDetails={ItemDetails} slides={slides} />
    </>
  );
};

export default ItemDetails;
export const getServerSideProps = async ({ params: { id } }) => {
  const data = await fetchApiItemDetails(
    `${baseUrl}/products/v3/detail?id=${id}`
  );

  return {
    props: {
      ItemDetails: data,
    },
  };
};
