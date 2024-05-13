import React from 'react'

const MditemDetail = ({datas}) => {
  console.log(datas.length);
  return (
    <div>
        <ul className="d-flex flex-wrap">
          {
            datas.map((item, index) =>(
               <li key={index}>
                   {item.title}
               </li> 
            ))
          } 
       </ul>
    </div>
  )
}

export default MditemDetail