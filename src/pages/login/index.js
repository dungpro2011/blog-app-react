import React from 'react'
import { Box, Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
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
    })

    const handleLogin = () => {

    };

    console.log({ data });

    return (
        <Box sx={style} id='simple-modal-title'>
            <form noValidate autoComplete='off' style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignContent: 'center',
            }}>
                <Typography variant='h4' marginBottom='20px' ><strong>Login</strong></Typography>

                <TextField
                    id="outlined-password-input"
                    sx={{ marginBottom: '10px' }}
                    label="Name"
                    type="text"
                    autoComplete="current-password"
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

                <Button onSubmit={handleLogin} variant="contained" color="success" sx={{marginBottom: '10px', width: '30%'}}>
                    Login
                </Button>
                


            </form>
        </Box>
    )
}

export default Login