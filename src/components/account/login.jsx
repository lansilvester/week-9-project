import { useState } from 'react'
import {Box, TextField, Button, styled, Typography} from '@mui/material'


const Component = styled(Box)`
    width: 400px;
    margin: auto;
    box-shadow: 5px 5px 15px 3px rgba(0 0 0/ 0.15)
`
const Image = styled('img')({
    width: 100,
    margin: 'auto',
    display: 'flex',
    padding: '50px 0 0'
})

const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`
const LoginButton = styled(Button)`
    text-transform: none;
    background: #2e87fa;
    color: #fff;
    height: 48px;
    border-radius: 3px;
`

const SignupButton = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874F0;
    height: 48px;
    border-radius: 3px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%)
`
const Text = styled(Typography)`
    color: #878787;
    font-size: 16px;
`


const Login = () => {

    const imageURL = 'https://miro.medium.com/max/1400/1*psYl0y9DUzZWtHzFJLIvTw.png';

    const [account, toggleAccount] = useState('login')
    const toggleSignup = () => {
        account === 'signup' ?  toggleAccount('login') : toggleAccount('signup')
    }

    return (
        <Component>
            <Box>
                <Image src={imageURL} alt="login" />
                {
                    account === 'login' ?
                
               
                    <Wrapper>
                        <TextField variant="standard" label="Enter Username" />
                        <TextField variant="standard" label="Enter Password" />
                    
                        <LoginButton variant="contained">Login</LoginButton>
                        <Text style={{textAlign: 'center'}}>OR</Text>
                        <SignupButton onClick={() => toggleSignup()}>Create an account</SignupButton>
                    </Wrapper>
                :
                    <Wrapper>
                        <TextField variant="standard" label="Enter Name" />
                        <TextField variant="standard" label="Enter Username" />
                        <TextField variant="standard" label="Enter Password" />

                        <SignupButton variant="contained">Signup</SignupButton>
                        <Text style={{textAlign: 'center'}}>OR</Text>
                        <LoginButton variant="contained" onClick={(()=>toggleSignup())}>Already have an account</LoginButton>
                    </Wrapper>
            }
            </Box>
        </Component>
    )
}

export default Login