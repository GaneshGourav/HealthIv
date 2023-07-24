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
        We had an incredible experience working with Chakra Templates and were
        impressed they made such a big difference in only three weeks. Our team
        is so grateful for the wonderful improvements they made and their
        ability to get familiar with the product concept so quickly.
      </Text>
      <Box textAlign={'center'}>
        <Avatar
          src={
            'https://drive.google.com/file/d/152zx61xZPagai2XTWCqj2zBkj-mFUZtn/view?usp=drive_link'
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