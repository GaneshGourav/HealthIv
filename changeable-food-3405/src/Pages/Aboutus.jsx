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
import { Footer } from "../Components/Footer";

const Aboutus = () => {
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
              ABOUT US
            </Text>{" "}
            <br />
            <Text color="black" fontFamily="Sofia, sans-serif" fontSize="30px">
              aboutus@HealthIv.com <br />
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
        maxW="container.lg"
        fontFamily="Sofia, sans-serif"
        fontSize="25px"
      >
        <Text>
          HealthIV, the digital healthcare company focused on improving home
          health outcomes through technology, now brings its in-home infusion
          therapy services to the Los Angeles Metro Area. Helmed in Los Angeles
          by Shawn Ankari, HealthIV's Co-Founder and Business Development
          Director, HealthIV's new availability for Angelenos is part of the
          company's ongoing dedication to changing up the home healthcare space
          by focusing on full digital interoperability between patients,
          doctors, pharmacists, and home healthcare workers.
        </Text>
        <br />
        <br />
        <Text fontFamily="Sofia, sans-serif" fontSize="25px">
          HealthIV's infusions treat everything from light dehydration and the
          occasional hangover to symptoms of chronic illnesses, such as asthma
          and fibromyalgia. Additionally, the company's team of registered
          nurses work 24/7 to provide top-of-the-line at-home care, with Los
          Angeles residents, visitors, and health care practitioners all able to
          schedule in-home infusion therapy treatments quickly and easily
          online.
        </Text>
        <br />
        <br />
        <Text fontFamily="Sofia, sans-serif" fontSize="25px">
          "Infusion therapy can be extremely beneficial to many people, but its
          mainstream adoption has met with numerous challenges," said Shawn
          Ankari, Co-Founder and Business Development Director of HealthIV.
          "HealthIV's mission is to simply provide patients with IV therapy in
          the comfort of their own home at an affordable price. Our infusions
          deliver 100 percent of the vitamins directly into your blood stream,
          making it quicker and easier for your body to use those nutrients to
          support your metabolism and overall health."
        </Text><br /><br />
        <Text fontFamily="Sofia, sans-serif" fontSize="25px">
          "The arrival of HealthIV in the Los Angeles market is part of the
          larger goal to expand our footprint within the Western U.S.'" said
          Humza Khan, CEO of HealthIV. "This comes on the heels of our recent
          availability in Las Vegas and Austin, which was built on our
          long-established presence in New York, New Jersey and Miami. But no
          matter which city you're in, our IV therapies are quick and effective
          – typically only taking 25 to 45 minutes to administer – and with the
          benefits felt soon after the infusions begin."
        </Text>
        <br />
        <br />
        <Text fontFamily="Sofia, sans-serif" fontSize="25px">
          HealthIV's expansion into the Los Angeles market follows its
          successful launch in Las Vegas in November 2021. For a list of current
          locations, visit HealthIV.com. To book your HealthIV therapy
          appointment, visit the online portal or call (877) 381-2190.
        </Text>
        <br />
        <br />
        <Text fontFamily="Sofia, sans-serif" fontSize="25px">
          About HealthIV Health IV is a mobile infusion therapy company striving
          to make healthcare more affordable and accessible. HealthIV was
          founded in 2020 to answer the nationwide call for higher-quality,
          lower-cost healthcare. The company currently offers on-site and
          in-home ambulatory healthcare and infusion therapies with registered
          medical professionals, and is working towards the launch of digital
          and mobile products that will introduce unprecedented interoperability
          to the healthcare space, forever changing the face of home healthcare,
          and giving patients a greater share of voice in their care as they
          coordinate with doctors, hospitals, pharmacies, and home healthcare
          providers. For more information, or to book your own infusion
          therapies, visit www.healthiv.com.
        </Text>{" "}
        <br />
        <br />
        <br />
      </Container>
      <br /><br />
      <Footer/>
    </>
  );
};
export { Aboutus };
