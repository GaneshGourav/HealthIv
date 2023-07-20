import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import {
  Drawer,
  DrawerBody,
  useDisclosure,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const links = [
    { to: "/treatment", title: "Treatement" },
    { to: "/blog", title: "Blog" },
    { to: "/aboutus", title: "AboutUS" },
    { to: "/contact", title: "Contact" },
  ];

  return (
    <>
      <Box
        bg="black"
        p={5}
        color="white"
        display="flex"
        justifyContent="space-between"
      >
        {/* Navbar */}
        <Box>HEALTHIV</Box>
        <Box
          display={{ lg: "flex", md: "flex", sm: "none", base: "none" }}
          border="1px solid red"
          justifyContent="space-around"
          width="500px"
        >
          {links.map((item) => (
            <NavLink key={item.to} to={item.to}>
              {item.title}
            </NavLink>
          ))}
        </Box>

        {/* Draewer */}
        <Box display={{ lg: "none", md: "none", sm: "flex", base: "flex" }}>
          <Button bg="black" color="white" onClick={onOpen}>
            {<HamburgerIcon />}
          </Button>
          <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerBody>
                <Box display="flex" flexDirection="column">
                  {" "}
                  {links.map((item) => (
                    <NavLink key={item.to} to={item.to}>
                      {item.title}
                    </NavLink>
                  ))}
                </Box>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
      </Box>
    </>
  );
};

export { Navbar };
