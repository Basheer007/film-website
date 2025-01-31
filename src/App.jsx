import React from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './App.css'
gsap.registerPlugin(useGSAP, ScrollTrigger);
import LocomotiveScroll from 'locomotive-scroll';
import { useState } from "react";
import Navbar from "./components/Navbar";
import MobileNav from "./components/MobileNav";
import Hero from "./components/Hero";
import About from "./components/About";
import VisitGreenland from "./components/VisitGreenland";
import VistMongolia from "./components/VistMongolia";
import Tiltsection from "./components/Tiltsection";

const locomotiveScroll = new LocomotiveScroll();


export default function App() {

  const [navOpen, setNavOpen] = useState(true);


  return (
    <>
      <Navbar openMenu={navOpen} openMenufunc={setNavOpen} />
      <MobileNav openMenu={navOpen} />
      <Hero />
      <About />
      <VisitGreenland />
      <VistMongolia />
      <Tiltsection />
    </>
  )
}