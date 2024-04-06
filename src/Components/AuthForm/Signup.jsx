import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Alert, AlertIcon, Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import  { useState } from 'react'
import useSignupemailpassword from '../../hooks/useSignupemailpassword';

function Signup () {
    const [inputs, setInputs] = useState({
        fullname:'',
        username:'',
        email:'',
        password:'',
    });

    const [showPassword, setShowPassword] = useState(false);
    const {loading, error, signup} = useSignupemailpassword() 
  return (
    <>
       <Input 
                placeholder='Enter Email'
                fontSize={14}    
                type='email'
                value={inputs.email}
                size={'sm'}
                onChange={(e) => setInputs({...inputs,email:e.target.value})}
            />
       <Input 
                placeholder='Enter Username'
                fontSize={14}    
                type='text'
                value={inputs.username}
                size={'sm'}
                onChange={(e) => setInputs({...inputs,username:e.target.value})}
            />
       <Input 
                placeholder='Enter Full Name'
                fontSize={14}    
                type='text'
                value={inputs.fullname}
                size={'sm'}
                onChange={(e) => setInputs({...inputs,fullname:e.target.value})}
            />
      
            <InputGroup>
            <Input 
                placeholder='Enter Password'
                fontSize={14}    
                type={showPassword ? 'text' : 'password'}
                value={inputs.password}
                size={'sm'}
                onChange={(e) => setInputs({...inputs,password:e.target.value})}
            />
            
                <InputRightElement>
                    <Button variant={'ghost'} size={'sm'} onClick={() => setShowPassword(!showPassword)}>
                           {showPassword ? <ViewIcon/> : <ViewOffIcon/>} 
                    </Button>
                </InputRightElement>

            </InputGroup>

            {error && (
                <Alert status='error' fontSize={13} p={2} borderRadius={4}>
                    <AlertIcon fontSize={12}/>
                    {error.message}
                </Alert>
            )}

            <Button w={"full"} colorScheme='blue' size={"sm"} fontSize={14} 
             isLoading={loading}   
            onClick={() => signup(inputs)}
            >Sign Up</Button>

    </>
  )
}

export default Signup;
