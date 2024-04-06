import { Avatar, Box, Button, Flex, Link, Tooltip } from '@chakra-ui/react'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai'
import { BiLogOut } from 'react-icons/bi'
import {CreatePostLogo, InstagramLogo, InstagramMobileLogo, NotificationsLogo, SearchLogo} from '../../assets/contants'
import useLogout from '../../hooks/useLogout'

function Sidebar() {

  const sidebarItems = [
    {
      icon: <AiFillHome size={25} />,
      Text: 'Home',
      link: '/'
    },
    {
      icon: <SearchLogo/>,
      Text: 'Search',
    },
    {
      icon: <NotificationsLogo />,
      Text: 'Notifications',
    },
    {
      icon: <CreatePostLogo/>,
      Text: 'CreatePost',
    },
    {
      icon: <Avatar size={"sm"} name='Rushikesh Thakur' src='/profilepic.png' />,
      Text: 'Profile',
      link: '/pofile_page'
    },
  ];

  const   {handleLogout,isLogginOut} = useLogout()

  return (
    <>
        <Box 
        height={"100vh"} 
        borderRight={"1px solid"}
        borderColor={"whiteAlpha.300"}
        py={8}
        position={"sticky"}
        top={0}
        left={0}
        px={{base:2,md:4}}
        >
            <Flex direction={"column"} gap={10} w={"full"} height={"full"}>
                <Link top={"/"} as={RouterLink} pl={2} display={{base:"none",md:"block"}} cursor="pointer">
                  <InstagramLogo/>
                </Link>

                <Link top={"/"} as={RouterLink} p={2} display={{base:"block",md:"none"}} cursor="pointer"
                  borderRadius={6}
                  _hover={{
                    bg:"whiteAlpha.200"
                  }}
                  w={10}
                >
                  <InstagramMobileLogo/>
                </Link>
                <Flex direction={'column'} gap={5} cursor={"pointer"} >
                    {sidebarItems.map((item, index) => (
                      <Tooltip
                        key={index}
                        hasArrow
                        label={item.Text}
                        placement='right'
                        ml={1}
                        openDelay={600}
                        display={{base:'block', md: 'none'}}
                      >
                        <Link
                          display={'flex'}
                          to={item.link || null}
                          as={RouterLink}
                          alignItems={'center'}
                          gap={4}
                          _hover={{bg:"whiteAlpha.400"}}
                          borderRadius={6}
                          p={2}
                          w={{ base: 10, md: 'full'}}
                          justifyContent={{base: "center", md:"flex-start"}}          
                        >
                          {item.icon}
                          <Box display={{base: 'none',md:'block'}}>
                              {item.Text}
                          </Box>  
                        </Link>
                      </Tooltip>
                    ))}
                </Flex>
                <Tooltip
                        hasArrow
                        label={"Logout"}
                        placement='right'
                        ml={1}
                        openDelay={600}
                        display={{base:'block', md: 'none'}}
                      >
                        <Flex
                          onClick={handleLogout}  
                          alignItems={'center'}
                          gap={4}
                          _hover={{bg:"whiteAlpha.400"}}
                          borderRadius={6}
                          p={2}
                          w={{ base: 10, md: 'full'}}
                          mt={"auto"}
                          justifyContent={{base: "center", md:"flex-start"}}          
                        >
                          <BiLogOut size={25} />
                          <Button display={{base: 'none',md:'block'}}
                              variant={'ghost'}
                              _hover={{bg:"transparent"}}
                              isLoading={isLogginOut}
                          >
                            Logout
                          </Button>  
                        </Flex>
                      </Tooltip>
            </Flex>

        </Box>
    </>
  )
}

export default Sidebar
