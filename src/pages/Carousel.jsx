import React, { useState, useEffect } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const imgs = [   //images라는 배열에 사진들을 저장
    './images/main05.jpg',
    './images/main04.jpg',
    './images/main03.jpg',
    './images/main02.jpg',
    './images/main01.jpg'
]

const Carousel = () => {  // == function Carouser(){} 
  const [imgIndex, setImgIndex] = useState(0); //앞에것을 set으로 꼭 써주는게 좋다.
  
  useEffect(()=>{
    //imgIndex를 일정간격을 두고 업데이트 한다.
    const timer = setInterval(()=>{
      setImgIndex( prevIndex => (prevIndex + 1) % imgs.length);  
    }, 5000); //5초 마다 이미지 변경
    return () => clearInterval(timer);
  }, [imgs.length]); //userEffect의 대괄호는 시작할 떄 끝날 때 렌더링하라는 뜻.
                    //컴포넌트 언마운트시 자동실행 제거
                    
  return (
    <div className="carousel">
        <TransitionGroup>
          <CSSTransition
              key={imgs[imgIndex]}
              timeout={500}
              classNames="slide">
              <img src={imgs[imgIndex]} alt="slideImg" />
        </CSSTransition>
        </TransitionGroup>
    </div>
  )
}

export default Carousel