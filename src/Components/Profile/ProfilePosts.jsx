import { Box, Grid, Skeleton, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useState } from 'react'
import ProfilePost from '../Profile/ProfilePost'

function ProfilePosts() {

    const [isLoading, setIsLoading] = useState(true)
 

    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false)
      },2000)
    },[])

  return (
    <>
       <Grid
        templateColumns={{
          sm:'repeat(1, 1fr)',
          md:"repeat(3, 1fr)",
        }}
        gap={1}
        columnGap={1}
       >
        {isLoading && [0,1,2].map((_,idx)=> (
          <VStack key={idx} alignItems={'flex-start'} gap={4}>
              <Skeleton w={'full'}>
                <Box h={'300px'}>Contents Wrapped</Box>
              </Skeleton>
          </VStack>
        ))}

          {!isLoading && (
            <>
            <ProfilePost img='man2.png'/>
            <ProfilePost img='man3.png'/>
            <ProfilePost img='man.png'/>
            <ProfilePost img='woman.png'/>
            </>
          )}

        </Grid>
    </>
  )
}

export default ProfilePosts
