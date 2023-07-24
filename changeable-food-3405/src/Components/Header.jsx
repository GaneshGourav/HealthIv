import {
  Box,
  Button,
  Text,
  Flex,
  Heading,
  Spacer,
  ButtonGroup,
  Center,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box
        bg="blackAlpha.900"
        p={10}
        backgroundImage="https://img.freepik.com/premium-photo/experienced-caucasian-heath-care-worker-preparing-dark-haired-female-patient-intravenous-vitamin-therapy_317809-3243.jpg"
        filter="blur"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      >
        <Center>
          {" "}
          <Box p={3}>
            <Text
              color="black"
              fontSize="50px"
              textAlign="left"
              fontFamily="Sofia, sans-serif"
            >
              IV Infusion <br />
              Therapy
            </Text>{" "}
            <br />
            <Text color="black" fontFamily="Sofia, sans-serif" fontSize="30px">
              Delivered to you{" "}
            </Text>{" "}
            <br />
            <hr marginRight="300px" />
          </Box>
        </Center>

        <Box
          display="flex"
          gap="10"
          flexDirection={{ sm: "column", base: "column", lg: "row", md: "row" }}
        >
          <Spacer />
          <Button colorScheme="teal" fontFamily=" sans-serif">
            Become a Memeber
          </Button>
          <Button
            colorScheme="teal"
            fontFamily=" sans-serif"
            onClick={() => navigate(`/treatment#treatment-menu`)}
          >
            Book Session
          </Button>
        </Box>
      </Box>
    </>
  );
};
export { Header };
