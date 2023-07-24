import {
  Box,
  Center,
  Text,
  Spacer,
  Button,
  Container,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import { Footer } from "../Components/Footer";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
              CONTACT US
            </Text>{" "}
            <br />
            <Text color="black" fontFamily="Sofia, sans-serif" fontSize="30px">
              contact@HealthIv.com <br />
            </Text>{" "}
            <br />
            <hr marginRight="300px" />
          </Box>
        </Center>
      </Box>
      <br />
      <br />
      <br />
      <Container
        border=".5px solid teal"
        borderRadius="5px"
        textAlign="left"
        maxW="container.lg"
      >
        <br />
        <Heading fontFamily="Sofia, sans-serif">Get In Touch</Heading>
        <br />
        <br />

        <Box>
          {/* onSubmit={handleSignup} */}
          <form>
            <FormControl isRequired>
              <FormLabel>First Name</FormLabel>
              <Input
                placeholder="First Name"
                type="Text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                border="1px solid teal"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Last Name</FormLabel>
              <Input
                placeholder="Last Name"
                type="Text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                border="1px solid teal"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                placeholder="Email"
                type="email"
                value={email}
                border="1px solid teal"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Phone</FormLabel>
              <Input
                placeholder="Phone"
                type="tel"
                value={email}
                border="1px solid teal"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Zip</FormLabel>
              <Input
                placeholder="Zip Code"
                type="number"
                value={email}
                border="1px solid teal"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Message</FormLabel>
              <Textarea
                placeholder="write your comment"
                border="1px solid teal"
              ></Textarea>
            </FormControl>
            <br />
            <br />
            <Button
              type="submit"
              width="100%"
              colorScheme="teal"
              borderColor="green.500"
              fontFamily="Sofia, sans-serif"
            >
              Send Message
            </Button>
            <br /> <br />
            <br />
            <br />
          </form>{" "}
        </Box>
      </Container>
      <br />
      <br />
      <br />

      <Footer />
    </>
  );
};
export { Contact };
