import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
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
      >
        <Box>HEALTHIV</Box>
        <Box textAlign="left">
          <Text>MENU</Text> <br />
          <Text>Treatment</Text>
          <Text>Blogs</Text>
          <Text>About Us</Text>
        </Box>{" "}
        <br />
        <Box textAlign="left">
          <Text>Contact</Text>
          <Text>Phone No: 9572016410</Text>
          <Text>Writes us @customerSupport@HealthIv </Text>
        </Box>
      </Box>

      <Box
        bg="grey"
        p={4}
        display="flex"
        justifyContent="space-around"
        color="white"
      >
        <text>HealthIv 2023. All Right are Reserved.</text>
        <Text>
          Created By: <span>Ganesh Kumar</span>
        </Text>
      </Box>
    </>
  );
};
export { Footer };
