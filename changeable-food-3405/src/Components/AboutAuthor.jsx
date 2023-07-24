import { Avatar, Box, Stack, Text, useColorModeValue } from '@chakra-ui/react';

export const Author=()=> {
  return (
    <Stack
      bg={useColorModeValue('gray.50', 'gray.800')}
      py={16}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={'center'}
      direction={'column'}>
      <Text
        fontSize={{ base: 'xl', md: '2xl' }}
        textAlign={'center'}
        maxW={'3xl'}  fontFamily="Sofia, sans-serif">
        I had an incredible experience working with Recat FrameWork and  Chakra Templates and were
        impressed i made such a big difference in only 6 Months. Our Masai School
        is so grateful for the wonderful improvements they made and my
        ability to get familiar with the product concept so quickly.
      </Text>
      <Box textAlign={'center'}>
        <Avatar
          src={
            'https://www.canva.com/design/DAFpiZ54mm8/aCqIflXx68w1LAF5az7HQw/edit?utm_content=DAFpiZ54mm8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'
          }
          alt={'Jenny Wilson'}
          mb={2}
        />

        <Text fontWeight={600}  fontFamily="Sofia, sans-serif">Ganesh Kumar</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.400', 'gray.400')}  fontFamily="Sofia, sans-serif">
          FrontEnd Developer
        </Text>
      </Box>
    </Stack>
  );
}