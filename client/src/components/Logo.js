import { Stack } from '@chakra-ui/react'
import React from 'react'
import { Link } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom"; 

const Logo = () => {
  const navigate = useNavigate(); 

  const handleLogoClick = () => {
    navigate("/"); 
  };
  return (
    <Link onClick={handleLogoClick} display="block" w={{ base: "30px", md: "50px", lg: "50px" }}>
      <Stack
        height={{ base: "30px", md: "60px", lg: "60px" }}
        backgroundImage="url('/images/logo.png')"
        //backgroundImage="url('/images/logoblack.png')"
        backgroundSize="100% 100%"
      ></Stack>
    </Link>
  );
};

export default Logo