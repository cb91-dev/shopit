import React from "react";
import Shop from "../../components/Shop";
import { useMediaQuery } from "@chakra-ui/react";
import { fetchApi, baseUrl } from "../../utils/fetchApi";
const Store = ({ brand }) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  return (
    <>
      <Shop brand={brand} isMobile={isMobile} />
    </>
  );
};

export default Store;
