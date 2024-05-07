import React from 'react'
import { Stack } from '@mui/material'

const Navigation = () => {
  return (
    <Stack
    direction="row"
    justifyContent="space-between"
    alignItems="center"
    style={{
              "padding": "10px 40px",
              "fontSize": "16px",
              "backgroundColor":"#fff", 
              "boxShadow":"0 0 5px 0 rgba(0,0,0,0.1), 0 0 25px 0 rgba(0,0,0,0.05)"
            }}
    >
      stack
    </Stack>  
  )
}

export default Navigation