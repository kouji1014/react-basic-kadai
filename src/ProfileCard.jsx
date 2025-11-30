import { useState } from 'react'

export function ProfileCard({count,setCount,name,age,bio}) {
  const handleClick=()=>{
    if(count>=4){
        count=0;
        setCount(count);
    }else{
        setCount(count+1);
    }
  };
  return (
    <>
    <p>{name}</p>
    <p>{age}</p>
    <p>{bio}</p>
    <button onClick={handleClick}>次へ</button>
    </>
  )
}