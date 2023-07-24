import { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Container,
  Flex,
  Heading,
  Spacer,
  Text,
  Image,
  Button,
  Center,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../Components/Footer";

const Cart = () => {
  const [data, setData] = useState([]);
  const [loading, SetLoading] = useState(false);
  const [price, setPrice] = useState(0);
  const navigate = useNavigate();
  const handleCheckout = () => {
    navigate(`/payment`);
  };

  const Cartdata = () => {
    axios
      .get(`https://63c6dd544ebaa802854f7005.mockapi.io/megamart/product`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleCancel = (id) => {
    SetLoading(true);

    axios
      .delete(
        `https://63c6dd544ebaa802854f7005.mockapi.io/megamart/product/${id}`
      )
      .then((res) => {
        console.log(res.data);
        SetLoading(false);
        Cartdata();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const checkPrice = () => {
    let total = 0;
    data.map((el) => (total += Number(el.price)));
    setPrice(total);
  };
  useEffect(() => {
    Cartdata();
    checkPrice();
  }, [data]);
  const handleBook = () => {
    navigate(`/treatment`);
  };

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
              CART
            </Text>{" "}
            <br />
            {/* <Text color="black" fontFamily="Sofia, sans-serif" fontSize="30px">
              contact@HealthIv.com{" "} <br />
              9572016410
            </Text>{" "} */}
            <br />
            <hr marginRight="300px" />
          </Box>
        </Center>
      </Box>
      {data.length > 0 && (
        <Container>
          <br />
          <Heading>Booked Session</Heading>
          <br />
          <Heading size="md">Confirmation</Heading> <br />
          <Text>Review the details before continuing to checkout.</Text>
        </Container>
      )}
      <br />
      <br />
      {data.length == 0 ? (
        <Container>
          <Heading>Your Cart is Empty</Heading> <br />
          <br />
          <Button variant="outline" colorScheme="teal" onClick={handleBook}>
            Book Your Session
          </Button>
        </Container>
      ) : (
        <Container maxW="container.lg">
          <br />
          {data.map((item) => (
            <Flex alignItems="center" border="1px solid teal" p={2}>
              <Box>
                <Image boxSize="100px" src={item.avatar} />
              </Box>
              <Spacer />
              <Box textAlign="left" fontFamily="Open Sans sans-serif">
                <Heading size="sm"> Treatement : {item.title} </Heading>
                <Heading size="sm"> Add booster : {item.booster}</Heading>
                <Heading size="sm"> Service Location : {item.location}</Heading>
                <Heading size="sm"> Booking Date : {item.date}</Heading>
              </Box>
              <Spacer />
              <Box>
                {" "}
                <Heading size="sm"> Price : ${item.price}</Heading> <br />
                <Button
                  // variant="outline"
                  colorScheme="teal"
                  color="black"
                  onClick={() => handleCancel(item.id)}
                >
                  Cancel Appointment
                </Button>
              </Box>
            </Flex>
          ))}

          <br />
        </Container>
      )}
      <Container>
        {data.length > 0 && <Heading>Cart Total : ${price}</Heading>}
      </Container>
      <br />
      <br />
      {data.length > 0 && (
        <Button colorScheme="teal" width="30%" onClick={handleCheckout}>
          CheckOut
        </Button>
      )}{" "}
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};
export { Cart };
