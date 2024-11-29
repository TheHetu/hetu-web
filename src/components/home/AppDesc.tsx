import { Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';

const AppDesc = () => {
    return (
       <Flex 
       h={{xl:'80vh', md: 'auto', sm: 'auto', base:'auto'}}
       w={'100%'}
       justifyContent={'space-between'}
       alignItems={'center'}
       flexDir={{xl:'row-reverse', md: 'column', sm: 'column', base:'column'}}
       >
       <Flex
       flexDir={'column'}
       gap={'30px'}
       justifyContent={'center'}
       w={{xl:'50%', md: '100%', sm: '100%', base:'100%'}}
       px={'100px'}
       bgImage={'url(/images/home4.png)'}
       bgPos={'right'}
       h={{xl:'100%', md: '80vh', sm: '80vh', base:'80vh'}}
       bgSize={'contain'}
       bgRepeat={'no-repeat'}
       >
        <Heading fontSize={'4xl'}>
        Bridging gaps, creating opportunities
        </Heading>
        <Text>
        Simplifying workforce connections with a tap, shaping a future where 
        skilled professionals are just a click away.
        </Text>
       </Flex>
       <Image alt='mobile app' h={'100%'} src='/images/home2.png'/>
       </Flex>
    );
}

export default AppDesc;
