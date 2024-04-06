import { Box, Flex, Spinner } from '@chakra-ui/react'
import React from 'react'
import Sidebar from '../../Sidebar/Sidebar'
import { useLocation } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase/firebase';
import Navbar from '../../Navbar/Navbar';

export default function PageLayout({children}) {

    const {pathname} = useLocation();
    const [user, loading] = useAuthState(auth);
    const canRenderSidebar = pathname !== '/auth' && user;
    const canRenderNavbar = !user && !loading && pathname !== '/auth';

    const checkingUserIsAuth = !user && loading
    if(checkingUserIsAuth) return <PageLayoutSpinner/>

  return (
    <>
        <Flex flexDir={canRenderNavbar ? 'column': 'row'}>
            {/* sidebar on left  */}
                {canRenderSidebar   ? (
                    <Box w={{base:"70px",md:"240px"}}>
                    <Sidebar/>
                </Box>
                ) : null }
                {canRenderNavbar ? <Navbar/>: null}
            {/* the page content on the right */}
            <Box flex={1}  mx={'auto'}>
                {children}
            </Box>
        </Flex>
    </>
  )
}

const PageLayoutSpinner = () => {
    return (
    <Flex flexDir={'column'} h={'100vh'} alignItems={'center'} justifyContent={'center'} >
        <Spinner size={'xl'}/>
    </Flex>
    );
};