import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'

function Login() {
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
    })
    const [showPassword, setShowPassword] = useState(false);
    return (
        <>
            <Input
                placeholder='Enter Email'
                fontSize={14}
                type='email'
                size={'sm'}
                value={inputs.email}
                onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
            />

            <InputGroup>

                <Input
                    placeholder='Enter Password'
                    fontSize={14}
                    type={showPassword ? 'text' : 'password'}
                    value={inputs.password}
                    size={'sm'}
                    onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                />

                <InputRightElement>
                    <Button variant={'ghost'} size={'sm'} onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                </InputRightElement>
            </InputGroup>


            <Button w={"full"} colorScheme='blue' size={"sm"} fontSize={14}>Login</Button>

        </>
    )
}

export default Login
