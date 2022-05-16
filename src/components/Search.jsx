import React from 'react'
import {useState} from 'react'
import  App from '../App.css'
import {useNavigate} from 'react-router-dom'

function Search() {
  const[input,setInput]=useState('');
  const navigate =useNavigate();
  const submitHandler=(e)=>{
    e.preventDefault();
    navigate('/searched/'+input)
  }
  return (
 <form onSubmit={submitHandler} className='search'>
     <input onChange={(event)=>{
       setInput(event.target.value)
     }}
     type ="text" placeholder='search' className='searchform' value={input}/>
 </form>
  )
}
// const FormStyle=styled.form`
// margin: 1rem 20rem;
// position: relative;
// width:100%;
// input{
//     border: none;
//     background:linear-gradient(35 degree,#494949,#313131)
//     font-size: 1.5 rem;
//     color:white;
//     padding: 1rem 3rem;
//     border-radius: 1rem;
//     outline: none;
// }
// svg{
//     position: absolute;
//     top: 50%;
//     left: 0%;
//     transform: translate(100% ,-50%);
//     color: white;

// }`

export default Search