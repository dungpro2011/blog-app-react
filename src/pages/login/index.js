import React from 'react'
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginState$, nameState$ } from '../../redux/selectors'
import { login } from '../../redux/actions';
import HomePage from '../HomePage';


const style = {
    display: 'block',
    position: 'absolute',
    marginTop: '10%',
    left: '35%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    border: '1px solid gray',
    boxShadow: 14,
    p: 4,
};


function Login() {
    const [data, setData] = useState({
        name: '',
        password: ''
    });

    const dispatch = useDispatch();
    const { isLogin } = useSelector(loginState$);
    const nameState = useSelector(nameState$);

    console.log(nameState);

    const handleLogin = () => {
        if (data.name === '' && data.password === '') {
            return alert("Nhập thông tin đăng nhập");
        }
        dispatch(login.loginRequest(data));
    };



    const signIn = (
        <Container>

            <Box sx={style} id='simple-modal-title'>
                <form noValidate autoComplete='off' style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignContent: 'center',
                }}>
                    <Typography variant='h4' marginBottom='20px' ><strong>Login</strong></Typography>

                    <TextField
                        autoFocus={true}
                        name='username'
                        sx={{ marginBottom: '10px' }}
                        label="Username"
                        type="text"
                        value={data.name}
                        onChange={e => setData({ ...data, name: e.target.value })}

                    />

                    <TextField
                        id="outlined-password-input"
                        sx={{ marginBottom: '20px' }}
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        value={data.password}
                        onChange={e => setData({ ...data, password: e.target.value })}

                    />

                    <Button onClick={handleLogin} variant="contained" color="success" sx={{ marginBottom: '10px', width: '30%' }}>
                        Login
                    </Button>
                </form>
            </Box>
        </Container>


    );


    return (
        <Container >
            {console.log("render: ", isLogin)}
            {isLogin ? <HomePage name={nameState} /> : signIn}
        </Container>
    )
}

export default Login