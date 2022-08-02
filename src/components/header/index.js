import React from 'react'
import { Typography } from '@mui/material';



export default function Header() {

  return (

    <Typography variant='h4' align='center'
      sx={{
        backgroundColor: 'blue',
        color: 'white',
        marginBottom: 1,
        fontWeight: 'lighter',
        padding: '5px 0',
      }}>
      Blog
    </Typography>
  );
}
