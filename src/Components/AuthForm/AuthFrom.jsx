import { Box, VStack, Image, Flex, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import Login from './Login';
import Signup from './Signup';
import GoogleAuth from './GoogleAuth';

function AuthFrom() {

    const [isLogin, setIsLogin] = useState(true)
    

  
  return (
    <>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <VStack spacing={4}>
            <Image src="/instaName.png" h={20} cursor={"pointer"} alt='instaname'  />
      
              {isLogin ? <Login/> : <Signup/>}

            <Flex alignItems={"center"} justifyContent={"center"} my={4} gap={1} w={"full"}>
              <Box flex={2} h={"1px"} bg={"gray.400"}/>
              <Text mx={1} color={"white"} >OR</Text>
              <Box flex={2} h={"1px"} bg={"gray.400"}/>
            </Flex>
              
              <GoogleAuth/>
        </VStack>
      </Box>

      <Box border={"1px solid gray "} borderRadius={4} padding={5}> 
              <Flex alignItems={"center"} justifyContent={"center"}>
                <Box mx={2} fontSize={14} >
                  {isLogin ? "Don't have an Account " : "Already have an Account"}
                </Box>
                <Box onClick={() => setIsLogin(!isLogin)} color={"blue.700"} cursor={"pointer"}>
                {isLogin ? "Sign Up " : "Log In"}
                </Box>
              </Flex>
      </Box>
    </>
  )
}

export default AuthFrom
