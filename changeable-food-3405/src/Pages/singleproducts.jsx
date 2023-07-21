import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react";
import { Center, Container, Heading,Box, Image, Text, Button } from "@chakra-ui/react";

const SingleProducts = () =>{
    const [item,setItem] = useState([])
    const{ id} = useParams();
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
        <Container>
        <Center>
           {
            <Box border='1px solid red'  >
            <Image src={item.image}  boxSize='300px' margin='auto'/>
            <Text fontWeight="800">{item.title}</Text> <br />
            <Text>{item.description}</Text><br />
            <Button>Book Now</Button><br />
            </Box>
            

           }
        </Center>

        </Container>
        
        
        </>

     
    )
}
export {SingleProducts}