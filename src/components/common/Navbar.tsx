import { Flex, Image } from '@chakra-ui/react';
import React from 'react';
const Navbar = () => {
    return (
       <Flex
       h={"70px"}
       w={"100%"}
       bg={"white"}
       py={"15px"}
       color={"black"}
       px={"15px"}
       alignItems={'center'}
       justifyContent={'space-between'}
       >
        {/* <Text>THE HETU</Text> */}
        <Image alt='The Hetu' src='/images/logo2.png' h='100%'/>
        {/* <Menu/> */}
        {/* <Language/> */}
       </Flex>
    );
}

export default Navbar;
