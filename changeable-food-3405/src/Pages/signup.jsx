import { Button, Container, Heading } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const Signup = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading,setLoading] = useState(false)
  const handleSignup = (e) => {
    setLoading(true)
    e.preventDefault();
    axios
      .post(`https://63c6dd544ebaa802854f7005.mockapi.io/megamart/signup`, {
        name: firstname,
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res.data);
        setLoading(false)
      })
      .catch((error) => {
        console.log(error);
      });

    toast({
      title: "Account created.",
      description: "We've created your account for you.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    navigate(`/signin`);
  };

  return (
    <>
      <Container>
        <Heading> Create Account </Heading>
        <form onSubmit={handleSignup}>
          <FormControl isRequired>
            <FormLabel>First name</FormLabel>
            <Input
              placeholder="First name"
              type="text"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              border="1px solid teal"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Last Name</FormLabel>
            <Input
              placeholder="Last name"
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              border="1px solid teal"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Email Address</FormLabel>
            <Input
              placeholder="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              border="1px solid teal"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Set Password</FormLabel>
            <Input
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              border="1px solid teal"
            />
          </FormControl>
          <br />
          <br />
        { loading ? <Button
            type="submit"
            width="100%"
         
            borderColor="teal"
            colorScheme="teal"
            isLoading
            loadingText='Signing'
          >
            Sign Up
          </Button>: <Button
            type="submit"
            width="100%"
            colorScheme="teal"
            borderColor="teal"
          >
            Sign Up
          </Button>}
        </form>
        <br />
        <br />
        <hr />
      </Container>
    </>
  );
};
