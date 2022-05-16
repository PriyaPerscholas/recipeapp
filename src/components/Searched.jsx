import React from 'react'
import {useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import '../App.css'
import styled from 'styled-components'


function Searched() {
const[searched,setSearched]=useState([]);
let params= useParams();
    const getSearched= async (name) => {
        const data = await fetch(
               `https://api.spoonacular.com/recipes/complexSearch?apiKey=60badfad779f4c4dbd2c16534fcce164&query=${name}`);
        const recipes    = await data.json();
      setSearched(recipes.results);
 }
 useEffect(()=>{
     getSearched(params.search)
 },[params.search])


  return (
    <div className='search1'>
        {searched.map((item)=>{
            return(
              <Wrapper>
                <Card>
                <a href={`/recipe/${item.id}`}>
                <img className='search-img' src={item.image}/></a>
                <h5>{item.title}</h5><br/>
                </Card>
                </Wrapper>
            )
        })}
    </div>
  )
}

const Wrapper = styled.div`
margin-top: 2rem ;
`;
const Card = styled.div`
max-height: 350px;
margin: 3rem
img{
       border-radius: 2rem;
       height: 250px;
       width: 200px;
}
h5{
     color:black,
     font-family: Arial, Helvetica, sans-serif;
}`;
export default Searched