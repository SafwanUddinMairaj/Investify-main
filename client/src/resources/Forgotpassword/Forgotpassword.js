import { ChakraProvider } from '@chakra-ui/react'
import React, { useEffect, useState } from "react";
import {
  Button,
  FormControl,
  Flex,
  Heading,
  Input,
  Stack,
  Text,Image,
  useColorModeValue,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


// type ForgotPasswordFormInputs = {
//   email: string
// }
const ForgotPassword =()=>{

  const [email, setEmail] = useState("");
  const navigate=useNavigate()

  axios.defaults.withCredentials=true;
  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3000/forgot-password',{email})
    .then(res=>{
      if(res.data.Status==="Success"){
        navigate('/user-login')
      }
    })
    .catch(err=>console.log(err))
  }



    return(
    <>
        <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}>
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
          Forgot your password?
        </Heading>
        <Text
          fontSize={{ base: 'sm', sm: 'md' }}
          color={useColorModeValue('gray.800', 'gray.400')}>
          You&apos;ll get an email with a reset link
        </Text>
        <FormControl id="email">
          <Input
            placeholder="your-email@example.com"
            _placeholder={{ color: 'gray.500' }}
            type="email"
          />
        </FormControl>
        <Stack spacing={6}>
          <Button
          bgColor={"#001F44"}
            //</Stack></Stack>bg={'blue.400'}
            color={'white'}
            _hover={{
              bg: 'blue.900',
            }}>
            Request Reset
          </Button>
        </Stack>
      </Stack>
    </Flex>

    </>
    )
}
export default ForgotPassword;