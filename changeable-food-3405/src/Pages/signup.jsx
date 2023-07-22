import { Button, Container, Heading } from "@chakra-ui/react"
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input
  } from '@chakra-ui/react'
import { useState } from "react"
export const Signup = ()=>{
    const [firstname , setFirstname] = useState("");
    const[lastname , setLastname] = useState("");
    const [email,setEmail] = useState("");
    const [password , setPassword] = useState("")
const handleSignup = () =>{

}

return (
<>

<Container>
    <Heading> Registered Yourself here !</Heading>
    <form onSubmit={handleSignup} >

<FormControl isRequired>
  <FormLabel>First name</FormLabel>
  <Input placeholder='First name' type="text" />
</FormControl>
<FormControl isRequired>
  <FormLabel>Last Name</FormLabel>
  <Input placeholder='Last name' type="text" />
</FormControl>
<FormControl isRequired>
  <FormLabel>Email Address</FormLabel>
  <Input placeholder='email' type="email" />
</FormControl>
<FormControl isRequired>
  <FormLabel>Set Password</FormLabel>
  <Input placeholder='password' type="password" />
</FormControl>
<Button type="submit">Sign Up</Button>

    </form>
</Container>



</>



)
}