import { Box, Center, Flex, Heading, Image, Spacer, Text } from '@chakra-ui/react';
import React from 'react';

const Future = () => {
    return (
        <Box
        width={'100%'}
        h={{xl:'100vh', md: 'auto', sm: 'auto', base:'auto'}}
        bgImage={'url(/images/home3.png)'}
        bgPos={'left'}
        bgSize={'contain'}
        bgRepeat={'no-repeat'}
        p={'50px'}
        >
            <Center>
        <Heading fontSize={'4xl'}>How we are shaping Future?</Heading>
            </Center>
            <Spacer h={'100px'}/>
            <Flex h={'70%'} gap={'30px'} justifyContent={'space-evenly'} flexDir={{xl:'row',md:'row',sm:'column',base:'column'}} alignItems={'center'}>
              
              <Flex
              maxW={'500px'}
              gap={'30px'}
              h={'100%'}
              flexDir={'column'}
              alignItems={'flex-start'}
              >
                <Image w={'100%'} src='/images/recruiter.png'/>
                <Box>
                    <Heading>For Recruiter</Heading>
                    <Text>Access a pool of skilled professionals nearby ,
save time on searches, and hire quickly with
a simple tap.</Text>
                </Box>
              </Flex>
              
              <Flex
              maxW={'500px'}
              gap={'30px'}
              h={'100%'}
              flexDir={'column'}
              alignItems={'flex-start'}
              >
                <Image  w={'100%'} src='/images/jobseeker.png'/>
                <Box>
                    <Heading>For Jobseeker</Heading>
                    <Text>Showcase your skills to local recruiters, get
matched with jobs in your area, and find work
 that fits your schedule.</Text>
                </Box>
              </Flex>

            </Flex>
        </Box>
    );
}

export default Future;
