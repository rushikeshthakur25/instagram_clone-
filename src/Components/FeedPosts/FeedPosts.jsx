import { Box, Container, Flex, Skeleton, SkeletonCircle, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import FeedPost from './FeedPost'

function FeedPosts() {

  const [isLoading,setIsLoading] = useState((true));

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    },2000)
  },[])

  return (
    <>
        <Container maxW={"container.sm"} py={10} px={2}>
          {isLoading && [0,1,2,3].map((_,idx) => (
            <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
                <Flex gap={2}>
                  <SkeletonCircle size={10}/>
                    <VStack gap={2} alignItems={'flex-start'}>
                      <Skeleton height={"10px"} width={"200px"}/>
                      <Skeleton height={"10px"} width={"200px"}/>
                    </VStack>
                </Flex>
                <Skeleton w={"full"}>
                  <Box h={"500px"}>Contents wrapped</Box>
                </Skeleton>
            </VStack>
          ))}
            {!false && (
              <>
                  <FeedPost img='/man2.png' username='rushikesh' avatar='/man2.png'/> 
            <FeedPost img='/man.png' username='sager' avatar='/man.png'/> 
            <FeedPost img='/man3.png' username='rahul' avatar='/man3.png'/> 
            <FeedPost img='/woman.png' username='neha' avatar='/woman.png'/> 
            <FeedPost img='/woman2.png' username='rani' avatar='/woma2.png'/> 
            <FeedPost img='/woman3.png' username='nikita' avatar='/woma3.png'/> 
              </>
            )}
            
        </Container>
    </>
  )
}

export default FeedPosts
