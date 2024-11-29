import { Box, Button, Center, Heading } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

const Comingsoon = () => {
    return (
        <Box
        w={'100%'}
        h={'100vh'}
        bgImage={'url(/images/commingHetu.jpg)'}
        bgRepeat={'no-repeat'}
        bgPos={'center'}
        bgColor={'#3d82a6'}
        >
        <Center>
            <Heading mt={'100px'} size={'5xl'} color={'white'}>Coming Soon..</Heading>
        </Center>
        <Link href={'/'}>
        <Button px={"50px"} pos={'fixed'} left={"40%"} right={'40%'} bottom={"80px"}>
         Home
        </Button>
        </Link>
        </Box>
    );
}

export default Comingsoon;
