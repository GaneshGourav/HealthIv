import {
  Container,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  useDisclosure,
  Center,
  Text,
} from "@chakra-ui/react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "../Components/AuthContext";
import { useNavigate } from "react-router-dom";

export const Payment = () => {
  const userdata = useContext(AuthContext);
  const { name, email } = userdata;
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  console.log(userdata);
  const handlePayment = (e) => {
    e.preventDefault();
    onOpen();
    setInterval(() => {
      navigate(`/treatment`);
    }, 3000);
  };
  return (
    <>
      {" "}
      <br />
      <br />
      <br />
      <Container border="1px solid teal" maxW="container.lg" borderRadius="5px">
        <Heading fontFamily="Sofia, sans-serif">
          Billing Invoice Details:
        </Heading>

        <form onSubmit={handlePayment}>
          <FormControl isRequired>
            <FormLabel>First name</FormLabel>
            <Input
              placeholder="First name"
              type="text"
              value={userdata.name}
              border="1px solid teal"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Last name</FormLabel>
            <Input
              placeholder="Last name"
              type="text"
              border="1px solid teal"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Email Address</FormLabel>
            <Input
              placeholder="Email Address"
              type="email"
              value={userdata.email}
              border="1px solid teal"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Phone number</FormLabel>
            <Input
              placeholder="Phone Number"
              type="tel"
              border="1px solid teal"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Address</FormLabel>
            <Input placeholder="Address" type="text" border="1px solid teal" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Zip code</FormLabel>
            <Input placeholder="Zip code" type="text" border="1px solid teal" />
          </FormControl>
          <br /> <hr />
          <Heading size="md" fontFamily="Sofia, sans-serif">
            Payment Details :
          </Heading>
          <FormControl isRequired>
            <FormLabel>Card Number</FormLabel>
            <Input
              placeholder="XXXX-XXXX-XXXX"
              type="number"
              border="1px solid teal"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Expiry Date</FormLabel>
            <Input type="date" border="1px solid teal" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>CVV</FormLabel>
            <Input placeholder="CVV" type="number" border="1px solid teal" />
          </FormControl>
          <br />
          <br />
          <br />
          <Button type="submit" width="100%" colorScheme="teal">
            Place Order
          </Button>
        </form>
        <br />
        <br />
        <br />

        <Modal isOpen={isOpen}>
          <ModalOverlay />
          <ModalContent>
            <ModalBody>
              <Center>
                <br />
                <br />
                <Heading color="teal" size="md" fontFamily="Sofia, sans-serif">
                  Congratulation !
                </Heading>
                <br />
                <br />
              </Center>
              <Center>
                <Text fontFamily="Sofia, sans-serif">
                  Your order SuccessFully placed
                </Text>
              </Center>
              <br />
              <Center>
                <Text fontFamily="Sofia, sans-serif">
                  Keep Visiting again !
                </Text>
              </Center>
              <br />
              <Center>
                <Text fontFamily="Sofia, sans-serif" color="teal">
                  Thank you !
                </Text>
              </Center>
              <br />
            </ModalBody>
          </ModalContent>
        </Modal>
      </Container>
      <br />
      <br />
      <br />
    </>
  );
};
