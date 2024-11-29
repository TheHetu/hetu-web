import { Flex, Image } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { PiFacebookLogo, PiInstagramLogo, PiLinkedinLogo, PiTwitterLogo } from 'react-icons/pi';

const Social = () => {
    return (
       <Flex justifyContent={'space-between'} w={'100%'}>
         
         <Link href={'/comingsoon'}><Image h={'60px'} src='/images/googlePlay.png' alt='app'/></Link>
         <Flex gap={"10px"}>
         <Link target='blank' href={'https://www.facebook.com/profile.php?id=61569270026394&sk=reviews'}><PiFacebookLogo size={'60px'}/></Link>
         <Link target='blank' href={'https://www.instagram.com/thehetu01/'}><PiInstagramLogo size={'60px'}/></Link>
         <Link target='blank' href={'https://x.com/Thehetu01'}><PiTwitterLogo size={'60px'}/></Link>
         <Link target='blank' href={'https://www.linkedin.com/company/105073515/admin/dashboard/'}><PiLinkedinLogo size={'60px'}/></Link>
         </Flex>
       </Flex>
    );
}

export default Social;
