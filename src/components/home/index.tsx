import { Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

const HomePage = () => {
    return (
       <Flex 
       h={{xl:'80vh', md: 'auto', sm: 'auto', base:'auto'}}
       w={'100%'}
       justifyContent={'space-between'}
       alignItems={'center'}
       flexDir={{xl:'row', md: 'column', sm: 'column', base:'column'}}
       >
       <Flex
       flexDir={'column'}
       gap={'30px'}
       justifyContent={'center'}
       w={{xl:'50%', md: '100%', sm: '100%', base:'100%'}}
       px={'100px'}
       bgImage={'url(/images/home3.png)'}
       bgPos={'left'}
       h={{xl:'100%', md: '80vh', sm: '80vh', base:'80vh'}}
       bgSize={'contain'}
       bgRepeat={'no-repeat'}
       >
        <Heading fontSize={'4xl'}>
        India connects with The Hetu!
        </Heading>
        <Text>
        The app that turns finding skilled workers into a hassle-free experience, 
        Connecting you with trusted professionals in your area and making every job effortless.
        </Text>
        <Link href={'/comingsoon'}>
        <Button
        w={'50%'}
        borderRadius={'10px'}
        bgColor={'orange.400'}
        >Download Our App</Button>
        </Link>
       </Flex>
       <Image alt='welcome' h={'100%'} src='/images/home1.png'/>
       </Flex>
    );
}

export default HomePage;
