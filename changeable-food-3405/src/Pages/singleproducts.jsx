import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react";
import { Center, Container, Heading,Box, Image, Text, Button,Card,Stack,CardBody,CardFooter,CardHeader,Input, Select, Spacer } from "@chakra-ui/react";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react'
import { Footer } from "../Components/Footer";



const SingleProducts = () =>{
    const [item,setItem] = useState([])
    const navigate = useNavigate()
const [location , setLocation] = useState("")
const [booster , setBooster] = useState("");
const [date , setDate] = useState("");
    const{ id} = useParams();
    const handlesubmit=(e)=>{
        e.preventDefault()
        console.log(booster,date,location)
        navigate(`/cart`)
    }
    function fextingSingleproduct(){
        axios.get(`https://645d4803e01ac61058a174ca.mockapi.io/treatments/${id}`)
        .then((res)=>{
            console.log(res.data)
            setItem(res.data)
        }).catch((error)=>{
            console.log(error)
        })
    }
useEffect(()=>{
    fextingSingleproduct()
},[])
    return (
        <>
        <br /><br />
        <Center>
        <Card align='center' maxW='lg'>
            
  <CardHeader>
    <Heading size='md'> {item.title}</Heading>
   
  </CardHeader>
  <CardBody>
    <Image  src={item.image} borderRadius='lg'    boxSize='300px'
    objectFit='cover' margin='auto'/><br />
    <Text fontFamily='Open Sans sans-serif' fontSize='18px'>{item.description}</Text> <br />
    <Heading size='md' fontFamily='Open Sans sans-serif' > ${item.price}</Heading> 
  </CardBody>
  <CardFooter>
    <Button colorScheme='blue'>Book Now</Button>
  </CardFooter>
</Card>
</Center>
<br /><br /> <br /><br />

<Heading>Fill out the forms below to book your session</Heading> <br /> <br />
<Container border="1px solid red"  maxW='container.lg'>

{/* <Heading>Fill out the forms below to book your session</Heading> */}
<br /> <br />

<form onSubmit={handlesubmit} >
<FormLabel> 1. Location</FormLabel>
<FormControl isRequired>

  <FormLabel>Service Location</FormLabel>
  <Input placeholder='Location' value={location} onChange={(e)=>setLocation(e.target.value)}  />
</FormControl>
<FormLabel> 2. Adds On</FormLabel>
<FormControl isRequired>
  <FormLabel>Add boster</FormLabel>
  <Select placeholder="Select" value={booster} onChange={(e)=>setBooster(e.target.value)}>
    <option value='zinc' >Zinc</option>
    <option value="Vitamin B complex" >Vitamin B complex</option>
    <option value="Vitamin B12" >Vitamin B12</option>
    <option  value='Magnesium'>Magnesium</option>
    </Select>
</FormControl>
<FormLabel> 3. Schedule</FormLabel>
<FormControl isRequired>
<FormLabel>  Schedule</FormLabel>
 <Input placeholder='First name' type="date" value={date} onChange={(e)=>setDate(e.target.value)} />
 </FormControl>
<br /><br /> <br />
<Button width="100%" bg='black' color='white' type="submit">CONTINUE TO CART</Button>
</form> <br /><br />
</Container> <br /><br /><br />


<Footer/>
 </>

     
    )
}
export {SingleProducts}