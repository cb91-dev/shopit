import Head from "next/head";
import { Flex, Box } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children, isMobile, brand }) {
  return (
    <>
      <Head>
        <title>Shop It</title>
      </Head>
      <Flex
        className="test"
        flexDirection="column"
        minH="100vh"
        width="100%"
        p="0"
        m="0"
      >
        <header>
          {" "}
          <Navbar brand={brand} isMobile={isMobile} />
        </header>
        <Box flex="1">{children}</Box>
        <footer className="footer">
          <Footer />
        </footer>
      </Flex>
    </>
  );
}
