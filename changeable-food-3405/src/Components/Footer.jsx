import { Box, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate()
  const handletreatment = () =>{
navigate(`/`)
  }
  const handleBlog = () =>{
    navigate(`/blog`)
      }
      const handleAbout = () =>{
        navigate(`/aboutus`)
          }
  return (
    <>
      <Box
        bg="black"
        p={8}
        height='400px'
        color="white"
        display="flex"
        justifyContent={{
          sm: "center",
          lg: "space-around",
          md: "space-around",
        }}
        fontFamily="Open Sans sans-serif"
      >
        <Box >HEALTHIV</Box>
        <Box textAlign="left">
          <Text fontFamily="Open Sans sans-serif">MENU</Text> <br />
          <Text onClick={handletreatment}>Treatment</Text><br />
          <Text onClick={handleBlog}>Blogs</Text><br />
          <Text onClick={handleAbout}>About Us</Text><br />
        </Box>{" "}
        <br />
        <Box textAlign="left">
          <Text fontFamily="Open Sans sans-serif">CONTACT</Text> <br />
          <Text>Phone No: 9572016410</Text><br />
          <Text>Writes us @customerSupport@HealthIv </Text><br />
        </Box>
      </Box>

      <Box
        bg="grey"
        p={4}
        display="flex"
        justifyContent="space-around"
        color="white"
      >
        <Text fontFamily="Sofia, sans-serif">HealthIv 2023. All Right are Reserved.</Text>
        <Text fontFamily="Sofia, sans-serif">
          Created By: <span >Ganesh Kumar</span>
        </Text>
      </Box>
    </>
  );
};
export { Footer };
