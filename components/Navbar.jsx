import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Menu,
  useDisclosure,
  MenuButton,
  Flex,
  Input,
  InputLeftElement,
  InputGroup,
  Box,
  IconButton,
  Avatar,
  AvatarBadge,
  Text,
} from "@chakra-ui/react";

import { GiMale, GiFemale } from "react-icons/gi";
import { FaUser, FaDollarSign } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import { MdOutlineSearch } from "react-icons/md";
import Image from "next/image";
import shopit from "../assets/shopit.svg";
import Link from "next/link";

import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({ isMobile }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        justifyContent="space-between"
        p="3"
        borderBottom="1px"
        borderBottomColor="blue"
      >
        {/* Menu Icon */}
        <Box>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<GiHamburgerMenu />}
              variant="outline"
              onClick={onOpen}
            />
          </Menu>
        </Box>

        {/* Search Bar */}

        <Box>
          {!isMobile ? (
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<MdOutlineSearch color="gray.300" />}
              />
              <Input type="tel" placeholder="Search Items" />
            </InputGroup>
          ) : (
            ""
          )}
        </Box>

        <Box>
          <Link href="/">
            <a>
              {" "}
              <Image src={shopit} alt="logo" width="97" height="40" />
            </a>
          </Link>
        </Box>
      </Flex>

      {/* Draw menu from left */}
      <Drawer placement={"left"} onClose={onClose} isOpen={isOpen} size="xs">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px" py="2">
            <Flex alignItems="baseline">
              <Avatar
                m="1"
                size="md"
                name="Segun Adebayo"
                src="https://bit.ly/sage-adebayo"
              />

              <Text pl="2" pb="1">
                Profile user
              </Text>
            </Flex>
          </DrawerHeader>
          {isMobile ? (
            <Box className="search-bar-nav" pt="2">
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<MdOutlineSearch color="gray.300" />}
                />
                <Input type="tel" placeholder="Search Items" />
              </InputGroup>
            </Box>
          ) : (
            ""
          )}
          <DrawerBody>
            <Flex flexDirection="column" pt="2">
              <Flex alignItems="baseline" onClick={onClose}>
                <FaUser />
                <Box pr="4" size="20" />
                <Link href="/profile">My Profile</Link>
              </Flex>
              <Flex alignItems="baseline" onClick={onClose}>
                <GiMale />
                <Box pr="4" size="20" />
                <Link href="/shop/shop_men">Shop Mens</Link>
              </Flex>
              <Flex alignItems="baseline" onClick={onClose}>
                <GiFemale size="20" />
                <Box pr="3" />
                <Link href="/shop/shop_ladies">Shop Ladies</Link>
              </Flex>
              <Flex alignItems="baseline" onClick={onClose}>
                <MdShoppingCart size="20" />
                <Box pr="3" />
                <Link href="/cart">Cart</Link>{" "}
              </Flex>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navbar;
