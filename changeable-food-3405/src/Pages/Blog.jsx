import {Box , Center , Text, Container, Heading,Image } from "@chakra-ui/react"
import { Footer } from "../Components/Footer";

const Blogs = () => {
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
              BLOGS
            </Text>{" "}
            <br />
            <Text color="black" fontFamily="Sofia, sans-serif" fontSize="30px">
              blog@HealthIv.com{" "} <br />
             
            </Text>{" "}
            <br />
            <hr marginRight="300px" />
          </Box>
        </Center>
 </Box><br /><br /><br />
 <Container>
  <Heading fontFamily="Sofia, sans-serif" >Coming Soon....</Heading> <br /><br />
  <Image src="https://www.newlaunches.com/wp-content/uploads/2020/01/Content-marketing.png"   backgroundSize="cover" width="100%"></Image>
 </Container>
 <br /><br />
 <Footer/>
    </>
  );
};
export { Blogs };
