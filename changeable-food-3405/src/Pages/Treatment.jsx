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
} from "@chakra-ui/react";
import axios from "axios";

const Treatement = () => {
  const [data, setData] = useState([]);

  function FectingData() {
    axios
      .get(`https://645d4803e01ac61058a174ca.mockapi.io/treatments`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    FectingData();
  }, []);
  return (
    <>
      <Header /> <br /> <br /> <br />
      <Container
        maxW="container.lg"
        border="1px solid blue"
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
          >
            Schedule online in minutes. Our nurses come to you.
          </Text>
        </Box>
        <br /> <br />
        <Center>
          <Box
            display="flex"
            border="1px solid red"
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
      <Container maxW="container.lg" border="1px solid blue">
        <br />
        <br />
        <Flex alignItems="center">
          <Heading>Treatment Menu</Heading>
          <Spacer />
          <Text>
            We offer a wide range of therapies and booster supplements
          </Text>
        </Flex>

        <Grid
          templateColumns={{
            sm: "repeat(1, 1fr)",
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(2, 1fr)",
          }}
          border="1px solid red"
          gap={3}
          alignItems="center"
        >
          {data.map((item) => (
            <GridItem border="1px solid red" alignItems="center">
              <Image src={item.image} boxSize="300px" margin="auto" />
              <p>{item.title}</p>
            </GridItem>
          ))}
        </Grid>
      </Container>{" "}
      <br />
      <br />
      <br />
      <Container maxW="container.lg" border="1px solid red">
        <Heading as="h4" size="md" maxW="md" textAlign="left">
          How does it work?
        </Heading>{" "}
        <br />
        <br />
        <Text textAlign="left">
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
              <Text>Book appointments easily on your phone.</Text>
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
              <Text>
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
              <Text>Include an at-home COVID test.</Text>
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
              <Text>
                Enjoy the benefits of IV therapy from <br /> the comfort of your
                home.
              </Text>
            </GridItem>
          </Center>
        </Grid>
        <br /><br /> <br />
      </Container>
      
<Container maxW="container.lg" border="1px solid red">
<br /><br />

<Heading as="h4" size="md" maxW="md" textAlign="left">Our locations</Heading>  <br /><br />
<Text textAlign='left'>We believe in making wellness mobile. Healthcare shouldn’t be stressful. It should be accessible. Schedule an appointment online and one of our healthcare professionals will visit you in the comfort of your own home.</Text>

<Grid  templateColumns={{
            sm: "repeat(1, 1fr)",
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(2, 1fr)",
          }}
          gap={20}>
<Center>
  <GridItem>
    <Image src="https://healthiv.com/wp-content/themes/intra/media/newyork.png"  borderRadius='full'
  boxSize='150px'/> <br />
    <Text>Glendale</Text>
    <Text>Valley Stream</Text>
    <Text>East Setauket</Text>
  </GridItem>
</Center>
<Center>
  <GridItem>
    <Image src="https://healthiv.com/wp-content/themes/intra/media/miami.png"  borderRadius='full'
  boxSize='150px'/> <br />
    <Text>Orlanda</Text>
    <Text>Miami</Text>
    <Text>Tampa</Text>
  </GridItem>
</Center>
<Center>
  <GridItem>
    <Image src="https://healthiv.com/wp-content/themes/intra/media/austin.png"  borderRadius='full'
  boxSize='150px'/> <br />
    <Text>Austin</Text>
    <Text>San Antonio</Text>
    
  </GridItem>
</Center>
<Center>
  <GridItem>
    <Image src="https://healthiv.com/wp-content/themes/intra/media/austin.png"  borderRadius='full'
  boxSize='150px'/> <br />
    <Text>West Hollywood</Text>
  
    
  </GridItem>
</Center>
<Center>
  <GridItem>
    <Image src="https://healthiv.com/wp-content/themes/intra/media/nj.png"  borderRadius='full'
  boxSize='150px'/> <br />
    <Text>Atlantic City</Text>
    <Text>Kinnelon</Text>
    
  </GridItem>
</Center>
<Center>
  <GridItem>
    <Image src="https://healthiv.com/wp-content/themes/intra/media/az.png"  borderRadius='full'
  boxSize='150px'/> <br />
    <Text>Tucson</Text>
  </GridItem>
</Center>
<Center>
  <GridItem>
    <Image src="https://healthiv.com/wp-content/themes/intra/media/pa.png"  borderRadius='full'
  boxSize='150px'/> <br />
    <Text>Bethlehem</Text>
  </GridItem>
</Center>
</Grid>
</Container>

<Container maxW="container.lg" border="1px solid red">
<Heading>Join our waitlist</Heading>


</Container>


    </>
  );
};
export { Treatement };
