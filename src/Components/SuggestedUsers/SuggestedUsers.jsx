import { Box, Flex, Link, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import SuggestedHeader from './SuggestedHeader'
import SuggestedUser from './SuggestedUser'

function SuggestedUsers() {
  return (
    <>  
        <VStack py={8} px={6} gap={4}>
            <SuggestedHeader/>

            <Flex alignItems={"center"} justifyContent={"space-between"} w={'full'}>
                <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
                       Suggested for You.. 
                </Text>
                <Text fontSize={12} fontWeight={"bold"} color={"gray.100"} _hover={{color: "gray.300"}} cursor={"pointer"}>
                      See All...
                </Text>
            </Flex>
            
            <SuggestedUser name='Vinit' followers={100} avatar='https://bit.ly/dan-abramove'/>
            <SuggestedUser name='Kalpesh' followers={200} avatar='https://bit.ly/ryan-florence'/>
            <SuggestedUser name='Mayur' followers={190} avatar='https://bit.ly/code-beast'/>
           
            

            <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={'start'}>
            &#169; 2024 Built by {''}
            <Link href='https://rushikeshthakur.netlify.app' target='_blank' color={'green.500' } textDecoration={"none"} fontSize={14}>
                  Rushikesh Thakur
            </Link>
            </Box>
            
        </VStack>
    </>
  )
}

export default SuggestedUsers
