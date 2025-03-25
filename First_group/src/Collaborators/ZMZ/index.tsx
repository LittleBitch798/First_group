import React, { useState } from 'react';

function BoxGenerator(){

  const[count,setcount]=useState(0)  //用useState来定义一个状态，count是状态的名字，setcount是改变状态的方法


  return (
    <div>
      <button onClick={()=>setcount(count+1)}>增加方块</button>
      <div>
       {Array.from({length:count}).map((_,index)=>(
        <div key={index} style={{width:100,height:100,backgroundColor:'red',margin:10}}></div>
        ))}
      </div>
    </div>
  );
};

export default BoxGenerator;