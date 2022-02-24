import axios from "axios";

export const baseUrl = "https://asos2.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "asos2.p.rapidapi.com",
      "x-rapidapi-key": "f5ab3ccc0bmsh48a8eec2e8cd6a9p1e0e3djsnc82898955780",
    },
    params: {
      store: "US",
      offset: "0",
      categoryId: "1001",
      limit: "48",
      country: "US",
      sort: "freshness",
      currency: "USD",
      sizeSchema: "US",
      lang: "en-US",
    },
  });
  return data;
};
export const fetchApiMen = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "asos2.p.rapidapi.com",
      "x-rapidapi-key": "f5ab3ccc0bmsh48a8eec2e8cd6a9p1e0e3djsnc82898955780",
    },
    params: {
      store: "US",
      offset: "0",
      categoryId: "1001",
      limit: "48",
      country: "US",
      sort: "freshness",
      currency: "USD",
      sizeSchema: "US",
      lang: "en-US",
    },
  });
  return data;
};
export const fetchApiLadies = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "asos2.p.rapidapi.com",
      "x-rapidapi-key": "f5ab3ccc0bmsh48a8eec2e8cd6a9p1e0e3djsnc82898955780",
    },
    params: {
      store: "US",
      offset: "0",
      categoryId: "1000",
      limit: "48",
      country: "US",
      sort: "freshness",
      currency: "USD",
      sizeSchema: "US",
      lang: "en-US",
    },
  });
  return data;
};
export const fetchApiItemDetails = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "asos2.p.rapidapi.com",
      "x-rapidapi-key": "f5ab3ccc0bmsh48a8eec2e8cd6a9p1e0e3djsnc82898955780",
    },
    params: {
      lang: "en-US",
      store: "US",
      sizeSchema: "US",
      currency: "USD",
    },
  });
  return data;
};

// categoryId: "4208" === 'Jeans'
// categoryId: "4209" === 'Shoes'
// categoryId: "4210" === 'Accessories'
// categoryId: "4213" === "Features"
// categoryId: "1000" === "Women"
// categoryId: "1001" ===  "Men"
// categoryId: "8000" ==="G-Star"
// categoryId: "4650" ==="Dr Martens"
// categoryId: "4280" ==="Polo Ralph Lauren"
