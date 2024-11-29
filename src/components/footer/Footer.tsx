import { Box, Center, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import Social from './Social';
import Link from 'next/link';

const Footer = () => {
    return (
       <Box px={"50px"} display={'flex'} flexDir={'column'} justifyContent={'space-between'} pt={'50px'} pb={'10px'} h={"200px"} bg={'gray.200'} w={'100%'}>
        <Social/>
        <Center>

        <Flex gap={'10px'}>
        <Link href={'mailto:info@thehetu.com'}><Text>info@thehetu.com</Text></Link>
        <Text>|</Text>
        <Text>© 2024 The Hetu. All rights reserved.</Text>
        </Flex>
        </Center>
       </Box>
    );
}

export default Footer;
