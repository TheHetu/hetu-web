import Navbar from "@/components/common/Navbar";
import Footer from "@/components/footer/Footer";
import HomePage from "@/components/home";
import AppDesc from "@/components/home/AppDesc";
import Future from "@/components/home/Future";
import Joinus from "@/components/joinus/Joinus";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
     {<Navbar></Navbar>}
     {<Box height={"60px"}></Box>}
     {<HomePage></HomePage>}
     {<Box height={"100px"}></Box>}
     {<AppDesc/>}
     {<Box height={"100px"}></Box>}
     {<Future/>}
     {<Box height={"100px"}></Box>}
     {<Joinus/>}
     {<Box height={"100px"}></Box>}
     {<Footer/>}
    </>
  );
}
