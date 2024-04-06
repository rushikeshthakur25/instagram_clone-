import { Avatar, Flex, Text,Link, textDecoration, color } from '@chakra-ui/react'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

function SuggestedHeader() {
  return (
    <>
      <Flex justifyContent={"space-between"} alignItems={'center'} w={'full'}  >
        <Flex alignItems={'center'} gap={2}>
            <Avatar name='As a Programmer' size={"sm"} src='/profilepic.png'/>
            <Text fontSize={12} fontWeight={"bold"}>
                Rushikesh_ 
            </Text>
        </Flex>

        <Link 
            as={RouterLink}
            to={'/auth'}
            fontSize={14}   
            fontWeight={"medium"}
            color={"blue.400"}
            cursor={"pointer"}   
            style={{textDecoration: "none"}}  
            >Log Out</Link>
      </Flex>
    </>
  )
}

export default SuggestedHeader
