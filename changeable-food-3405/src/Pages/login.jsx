import { Button, Container, Heading, Text } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  useToast,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Components/AuthContext";
export const Signin = () => {
  const [firstname, setFirstname] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const toast = useToast();
  const { login, isAuth, setUserdata } = useContext(AuthContext);
  const [logindata, setLoginData] = useState([]);
  const handlesignup = () => {
    navigate(`/signup`);
  };

  useEffect(() => {
    if (logindata.length > 0) {
      checkEmail();
    }
    document.body.style.backgroundImage =
      "url(https://img.freepik.com/free-vector/white-abstract-background_23-2148817571.jpg?w=1060&t=st=1690173262~exp=1690173862~hmac=6d5cd69733f40fb9db2dd6a46ef7a5a2c437edfdba125f9292746e4bbe5d518d)";
  }, [logindata]);

  const handleSignup = (e) => {
    setLoading(true)
    e.preventDefault();
    axios
      .get(`https://63c6dd544ebaa802854f7005.mockapi.io/megamart/signup`)
      .then((res) => {
        console.log(res.data);
        setLoginData(res.data);
        setLoading(false)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const checkEmail = () => {
    let refdata = logindata.find(
      (el) => el.email === email && el.password === password
    );

    if (refdata) {
      setUserdata(refdata);
      console.log(refdata);
      toast({
        title: "Welcome !",
        description: "Login Success.",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      login();
      navigate(`/`);
    } else {
      toast({
        title: "Login Failed.",
        description: "Wrong Crendentials",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };
  // let refdata = logindata.find((el)=>el.email===email && el.password===password);
  // console.log(refdata)
  console.log(isAuth);

  return (
    <>
      <Container>
        <Heading> Sign in</Heading>
        <form onSubmit={handleSignup}>
          <FormControl isRequired>
            <FormLabel>Email Address</FormLabel>
            <Input
              placeholder="email"
              type="email"
              value={email}
              border="1px solid teal"
              onChange={(e) => setEmail(e.target.value)}
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
        {loading ?  <Button
            type="submit"
            width="100%"
            colorScheme="teal"
            isLoading
            loadingText='Logging'
          >
            Login
          </Button> :<Button
            type="submit"
            width="100%"
            colorScheme="teal"
          >
            Login
          </Button>}
          <br /> <br />
          <Text>
            By login, you agree to HealthIv's Conditions of Use and Privacy
            Notice.
          </Text>
        </form>{" "}
        <br />
        <br />
        <hr /> <br />
        <Text>New to HealthIv</Text> <br />
        <Button
          width="100%"
          // variant="solid"
          // borderColor="green.500"
          colorScheme="teal"
          onClick={handlesignup}
        >
          Create your HealthIv Account
        </Button>
        <br />
        <br />
        <hr />
      </Container>
    </>
  );
};
