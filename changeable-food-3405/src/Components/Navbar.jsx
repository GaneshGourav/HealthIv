import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Button } from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Drawer,
  DrawerBody,
  useDisclosure,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Text,Heading
} from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Treatement } from "../Pages/Treatment";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isAuth, userdata, logout } = useContext(AuthContext);
  const navigate = useNavigate()
  const handleLogout = () => {
    logout();
  };
const handleHome=()=>{
navigate(`/`)
}
  const links = [
    { to: "/", title: "Treatement" },
    { to: "/blog", title: "Blog" },
    { to: "/aboutus", title: "AboutUS" },
    { to: "/contact", title: "Contact" },
    { to: "/cart", title: "Cart" },
  ];

  return (
    <>
      <Box
        bg="blackAlpha.500"
        filter="transparent"
        p={5}
        color="black"
        display="flex"
        justifyContent="space-between"
      >
        {/* Navbar */}
        <Box fontFamily="Open Sans sans-serif"> <Heading size='md' onClick={handleHome}>HEALTHIV</Heading> </Box>
        <Box
          display={{ lg: "flex", md: "flex", sm: "none", base: "none" }}
          // border="1px solid red"
          justifyContent="space-around"
          width="500px"
        >
          {links.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              fontFamily="Open Sans sans-serif"
              style={({ isActive, isPending }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isPending ? "red" : "black",
                };
              }}
            >
              {item.title}
            </NavLink>
          ))}
          {isAuth && (
            <Text fontFamily="Open Sans sans-serif">{userdata.name}</Text>
          )}

          {isAuth ? (
            <Text fontFamily="Open Sans sans-serif" onClick={handleLogout}>
              Logout
            </Text>
          ) : (
            <NavLink
              to="/signin"
              style={({ isActive, isPending }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isPending ? "red" : "black",
                };
              }}
            >
              Signin
            </NavLink>
          )}
        </Box>

        {/* Draewer */}
        <Box display={{ lg: "none", md: "none", sm: "flex", base: "flex" }}>
          <Button bg="blackAlpha.500" color="white" onClick={onOpen}>
            {<HamburgerIcon />}
          </Button>
          <Drawer isOpen={isOpen} placement="Right" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerBody>
                <Box display="flex" flexDirection="column">
                  {" "}
                  {links.map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      fontFamily="Open Sans sans-serif"
                      style={({ isActive, isPending }) => {
                        return {
                          fontWeight: isActive ? "bold" : "",
                          color: isPending ? "red" : "black",
                        };
                      }}
                    >
                      {item.title}
                    </NavLink>
                  ))}
                  {isAuth && (
                    <Text fontFamily="Open Sans sans-serif" color="red">
                      {userdata.name}
                    </Text>
                  )}
                  {isAuth ? (
                    <Text
                      fontFamily="Open Sans sans-serif"
                      border="1px solid blue"
                      onClick={handleLogout}
                    >
                      Logout
                    </Text>
                  ) : (
                    <NavLink
                      to="/signin"
                      fontFamily="Open Sans sans-serif"
                      border="2px solid red"
                      style={({ isActive, isPending }) => {
                        return {
                          fontWeight: isActive ? "bold" : "",
                          color: isPending ? "red" : "black",
                        };
                      }}
                    >
                      Signin
                    </NavLink>
                  )}
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
