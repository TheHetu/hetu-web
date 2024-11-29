import Navbar from "@/components/common/Navbar";
import Footer from "@/components/footer/Footer";
import HomePage from "@/components/home";
import AppDesc from "@/components/home/AppDesc";
import Future from "@/components/home/Future";
import Joinus from "@/components/joinus/Joinus";
import { Box } from "@chakra-ui/react";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

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
