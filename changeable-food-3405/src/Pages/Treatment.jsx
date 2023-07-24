import { useEffect, useState } from "react";
import { Header } from "../Components/Header";
import {
  Box,
  Center,
  Container,
  HStack,
  Text,
  Image,
  Heading,
  Flex,
  Spacer,
  GridItem,
  Grid,
  Input,
  Button,
  FormLabel,
} from "@chakra-ui/react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Footer } from "../Components/Footer";
import { Author } from "../Components/AboutAuthor";
import { Loader } from "./loader";

const Treatement = () => {
  const [data, setData] = useState([]);
  const [loading, SetLoadig] = useState(false);
  const [itemLoading, setItemLoading] = useState(false);
  const navigate = useNavigate();
  const handleproduct = (id) => {
    console.log(id);
    navigate(`/products/${id}`);
  };

  function FectingData() {
    SetLoadig(true);
    axios
      .get(`https://645d4803e01ac61058a174ca.mockapi.io/treatments`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        SetLoadig(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    FectingData();
  }, []);
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <Header /> <br /> <br /> <br />
      <Container
        maxW="container.lg"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Box display="flex" justifyContent="center" alignItems="center">
          <Text
            fontSize="40px"
            fontWeight="500"
            textAlign="left"
            alignItems="center"
            fontFamily="Open Sans sans-serif"
          >
            Schedule online in minutes. Our nurses come to you.
          </Text>
        </Box>
        <br /> <br />
        <Center>
          <Box
            display="flex"
            width="70%"
            flexDirection={{
              sm: "column",
              base: "column",
              lg: "row",
              md: "row",
            }}
            alignItems="center"
            marginBottom="30px"
            gap="20px"
          >
            <Box>
              <Image
                src="https://healthiv.com/wp-content/themes/intra/media/phone_square.png"
                borderRadius="full"
                boxSize="150px"
              />{" "}
              <br />
              Easy online booking
              <br />
            </Box>
            <Spacer />
            <Box>
              <Image
                src="https://healthiv.com/wp-content/themes/intra/media/chair_square.png"
                borderRadius="full"
                boxSize="150px"
              />{" "}
              <br />
              At Home Service
            </Box>
            <Spacer />
            <Box>
              <Image
                src="https://healthiv.com/wp-content/themes/intra/media/test_square.png"
                borderRadius="full"
                boxSize="150px"
              />{" "}
              <br />
              Add a Covid-19 Test
            </Box>
            <br />
            <br />
          </Box>
        </Center>
      </Container>
      <Container maxW="container.lg">
        <br />
        <br />
        <Flex alignItems="center" id="treatment-menu">
          <Heading fontFamily="Open Sans sans-serif">Treatment Menu</Heading>
          <Spacer />
          <Text fontFamily="Open Sans sans-serif" fontSize="20px">
            We offer a wide range of therapies and booster supplements
          </Text>
        </Flex>
        <br />
        <br />
        <br />
        <Grid
          templateColumns={{
            sm: "repeat(1, 1fr)",
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(2, 1fr)",
          }}
          gap={3}
          alignItems="center"
        >
          {data.map((item) => (
            <GridItem
              border="1px solid teal"
              borderRadius="8px"
              alignItems="center"
              key={item.id}
            >
              <Image src={item.image} boxSize="300px" margin="auto" />
              <Text
                fontWeight="700"
                fontSize="20px"
                lineHeight="40px"
                color="#00141a"
                fontFamily="Open Sans sans-serif"
              >
                {item.title}
              </Text>
              <Text fontWeight="500" fontSize="30px">
                {" "}
                ${item.price}
              </Text>{" "}
              <br />
              <Button
                size="md"
                height="48px"
                width="80%"
                colorScheme="teal"
                onClick={() => handleproduct(item.id)}
              >
                View
              </Button>{" "}
              <br />
              <br />
            </GridItem>
          ))}
        </Grid>
      </Container>{" "}
      <br />
      <br />
      <br />
      <Container maxW="container.lg">
        <Heading
          as="h2"
          maxW="md"
          textAlign="left"
          fontFamily="Open Sans sans-serif"
        >
          How does it work?
        </Heading>{" "}
        <br />
        <br />
        <Text
          textAlign="left"
          fontFamily="Open Sans sans-serif"
          fontSize="22px"
        >
          At Health IV everything we do is based on one core principle. That
          health is for everybody. It doesn’t matter <br /> who you are or where
          you are, we want to help you feel rejuvenated.
        </Text>{" "}
        <br />
        <br />
        <br />
        <Grid
          templateColumns={{
            sm: "repeat(1, 1fr)",
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(2, 1fr)",
          }}
          gap={20}
        >
          <Center>
            <GridItem>
              <Image
                src="https://healthiv.com/wp-content/themes/intra/media/phone.png"
                width="300px"
                borderRadius="full"
              />{" "}
              <br />
              <Text fontFamily="Open Sans sans-serif" fontSize="20px">
                Book appointments easily on your phone.
              </Text>
            </GridItem>
          </Center>
          <Center>
            <GridItem>
              <Image
                src="https://healthiv.com/wp-content/themes/intra/media/bag.png"
                width="300px"
                borderRadius="full"
              />{" "}
              <br />
              <Text fontFamily="Open Sans sans-serif" fontSize="20px">
                Choose from a wide selection of <br /> revitalizing treatments.
              </Text>
            </GridItem>
          </Center>
          <Center>
            <GridItem>
              <Image
                src="https://healthiv.com/wp-content/themes/intra/media/test.png"
                width="300px"
                borderRadius="full"
              />
              <br />
              <Text fontFamily="Open Sans sans-serif" fontSize="20px">
                Include an at-home COVID test.
              </Text>
            </GridItem>
          </Center>
          <Center>
            <GridItem>
              <Image
                src="https://healthiv.com/wp-content/themes/intra/media/chair.png"
                width="300px"
                borderRadius="full"
              />
              <br />
              <Text fontFamily="Open Sans sans-serif" fontSize="20px">
                Enjoy the benefits of IV therapy from <br /> the comfort of your
                home.
              </Text>
            </GridItem>
          </Center>
        </Grid>
        <br />
        <br /> <br />
      </Container>
      <Container maxW="container.lg">
        <br />
        <br />
        <Heading
          as="h4"
          maxW="md"
          textAlign="left"
          fontFamily="Open Sans sans-serif"
        >
          Our locations
        </Heading>{" "}
        <br />
        <br />
        <Text
          textAlign="left"
          fontFamily="Open Sans sans-serif"
          fontSize="22px"
        >
          We believe in making wellness mobile. Healthcare shouldn’t be
          stressful. It should be accessible. Schedule an appointment online and
          one of our healthcare professionals will visit you in the comfort of
          your own home.
        </Text>{" "}
        <br />
        <Grid
          templateColumns={{
            sm: "repeat(1, 1fr)",
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(2, 1fr)",
          }}
          gap={20}
          fontFamily="Open Sans sans-serif"
          fontSize="20px"
        >
          <Center>
            <GridItem>
              <Image
                src="https://healthiv.com/wp-content/themes/intra/media/newyork.png"
                borderRadius="full"
                boxSize="150px"
              />{" "}
              <br />
              <Text>Glendale</Text>
              <Text>Valley Stream</Text>
              <Text>East Setauket</Text>
            </GridItem>
          </Center>
          <Center>
            <GridItem>
              <Image
                src="https://healthiv.com/wp-content/themes/intra/media/miami.png"
                borderRadius="full"
                boxSize="150px"
              />{" "}
              <br />
              <Text>Orlanda</Text>
              <Text>Miami</Text>
              <Text>Tampa</Text>
            </GridItem>
          </Center>
          <Center>
            <GridItem>
              <Image
                src="https://healthiv.com/wp-content/themes/intra/media/austin.png"
                borderRadius="full"
                boxSize="150px"
              />{" "}
              <br />
              <Text>Austin</Text>
              <Text>San Antonio</Text>
            </GridItem>
          </Center>
          <Center>
            <GridItem>
              <Image
                src="https://healthiv.com/wp-content/themes/intra/media/austin.png"
                borderRadius="full"
                boxSize="150px"
              />{" "}
              <br />
              <Text>West Hollywood</Text>
            </GridItem>
          </Center>
          <Center>
            <GridItem>
              <Image
                src="https://healthiv.com/wp-content/themes/intra/media/nj.png"
                borderRadius="full"
                boxSize="150px"
              />{" "}
              <br />
              <Text>Atlantic City</Text>
              <Text>Kinnelon</Text>
            </GridItem>
          </Center>
          <Center>
            <GridItem>
              <Image
                src="https://healthiv.com/wp-content/themes/intra/media/az.png"
                borderRadius="full"
                boxSize="150px"
              />{" "}
              <br />
              <Text>Tucson</Text>
            </GridItem>
          </Center>
          <Center>
            <GridItem>
              <Image
                src="https://healthiv.com/wp-content/themes/intra/media/pa.png"
                borderRadius="full"
                boxSize="150px"
              />{" "}
              <br />
              <Text>Bethlehem</Text>
            </GridItem>
          </Center>
        </Grid>
      </Container>
      <br />
      <br />
      <br />
      <Container maxW="container.lg" border="1px solid teal" borderRadius="5px">
        {" "}
        <br />
        <Heading fontFamily="Open Sans sans-serif">Join our waitlist</Heading>
        <Text>
          Don’t see your region on our list? We’ll let you know when our service
          area expands.
        </Text>{" "}
        <br />
        <form>
          <FormLabel>
            Email address
            <Input border="1px solid teal" placeholder="Enter email"></Input>
          </FormLabel>
          <FormLabel>
            Address
            <Input border="1px solid teal" placeholder="Address"></Input>
          </FormLabel>{" "}
          <br /> <br />
          <Button colorScheme="teal" width="100%" color="white">
            submit
          </Button>
        </form>
        <br />
      </Container>{" "}
      <br />
      <br />
      <br />
      <Box
        bg="linear-gradient(to bottom left, #00ffff 0%, #99ff33 100%)"
        height="400px"
        display="flex"
        gap={50}
        justifyContent="center"
        alignItems="center"
      >
        <Box>
          <Text fontSize="30px" fontFamily="Open Sans sans-serif">
            Get up to 34% off a treatment each month
          </Text>
        </Box>
        <Box border="1px solid red">
          <br />
          <Text fontWeight={900}>Membership price</Text>
          <br />
          <Text fontWeight={900}>$199</Text>
          <br />
          <Text fontWeight={900}>1 Credit</Text>
          <br />
          <Text fontFamily="Open Sans sans-serif" fontSize="20px">
            Receive a credit towards any <br /> treatment under $500 each month.
          </Text>{" "}
          <br />
          <Button colorScheme="teal">BACOME A MEMBER </Button>
          <br />
          <br />
        </Box>
      </Box>
      <Author />
      <Footer />
    </>
  );
};
export { Treatement };
