import React, { useState, useEffect } from 'react'
import { Container } from '@mui/material';
import axios from 'axios'
import Carousel from './Carousel'
import Mditem from '../main/Mditem';
import WeeklyBest from '../components/WeeklyBest';
const Main = () => {

  const [activeKey, setActiveKey] = useState('best');  
  const [datas, setDatas] = useState({});

  useEffect(()=>{
     const myData = async () => {
        try{
           const res = await axios.get('./data/data.json');
           setDatas(res.data);
        }catch(error){
            console.error('Error : ', error);
        }
     };
     myData();
  }, []);

  console.table(datas.best);

  return (
    <>
      <Carousel />
      <Container> {/*리액트는 이렇게 container처럼 겹쳐있는게 있으면 대장 큰걸로 싸줘야한다.*/}
         <Mditem datas={datas} activeKey={activeKey} setActiveKey={setActiveKey} />
         <WeeklyBest />
      </Container>
    </>  
  )
}

export default Main