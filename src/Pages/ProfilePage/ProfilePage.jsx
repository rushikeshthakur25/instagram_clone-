import { Container, Flex } from '@chakra-ui/react'
import React from 'react'
import ProfileHeader from '../../Components/Profile/ProfileHeader'
import ProfileTabs from '../../Components/Profile/ProfileTabs'
import ProfilePosts from '../../Components/Profile/ProfilePosts'

function ProfilePage() {
  return (
    <>
          <Container maxW={'container.lg'} py={5}>
            <Flex py={10} px={4} pl={{base: 4 ,md:10}} w={'full'} mx={'auto'} flexDirection={'column'}>
              <ProfileHeader/>
            </Flex>

            <Flex 
              px={{base:2 , ms: 4}}
              maxW={'full'}
              mx={'auto'}
              borderTop={'1px solid'}
              borderColor={'whiteAlpha.300'}
              direction={'column'}
            >
              <ProfileTabs/>
              <ProfilePosts/> 
            </Flex>            
          </Container> 
    </>
  )
}

export default ProfilePage
ProfilePage