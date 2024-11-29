import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

const Menu = () => {
    return (
        <Flex 
        minW={"250px"}
        w={"50%"}
        justifyContent={'space-evenly'}
        maxW={'500px'}
        >
         <Text>
            Home
         </Text>
         <Text>
            About us
         </Text>
         <Text>
            Featured
         </Text>
         <Text>
            Testimonial
         </Text>
        </Flex>
    );
}

export default Menu;
