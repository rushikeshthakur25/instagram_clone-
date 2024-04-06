import { Box, Container, Flex, Image, VStack } from '@chakra-ui/react'
import React from 'react'
import AuthFrom from '../../Components/AuthForm/AuthFrom'

function AuthPage() {
  return (
   <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
    <Container maxW={"container.md"} padding={0}>
        <Flex justifyContent={"center"} alignItems={"center"} gap={10}>

        {/* left hand-site */}

        <Box display={{base:"none",md:"block"}}>
            <Image src="/insta_mob.png" h={650} alt='Phone image'/>
        </Box>
        {/* Right hand-site */}

        <VStack spacing={4} align={"stretch"}>
         <AuthFrom/>
            <Box textAlign={"center"}>Get the App...</Box>
            <Flex gap={5} justifyContent={"center"}>

                <Image src='/google.png' h={10} alt='Google image'/>
                <Image src='/ms.png' h={10} alt='Ms image'/>
            </Flex>
        </VStack>
        </Flex>


    </Container>
   </Flex>
  )
}

export default AuthPage
