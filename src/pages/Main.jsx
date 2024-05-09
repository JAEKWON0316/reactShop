import React from 'react'
import { Container } from '@mui/material';
import Carousel from './Carousel'
import Mditem from '../main/Mditem'

const Main = () => {
  return (
    <>
    <Carousel />
    <Container> {/*리액트는 이렇게 container처럼 겹쳐있는게 있으면 대장 큰걸로 싸줘야한다.*/}
        <Mditem />
    </Container>  
    </>
  )
}

export default Main