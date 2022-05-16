import React from 'react'
import { getRecipes } from "../services/recipeapi"
import { useState, useEffect } from 'react'
import '../App.css'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import styled from 'styled-components'
import '@splidejs/react-splide/css'

function Index() {
       const [data, setData] = useState([])
       useEffect(() => {
              getRecipes()
                     .then(res => setData(res.data))
       }, [data])
       return (
              <div>
                     <Wrapper>
                            <h3>Priya's Picks</h3><br />
                            <Splide options={{
                                   perPage: 4,
                                   arrows: false,
                                   pagination: false,
                                   drag: 'free',
                                   gap: '2px',
                            }}>
                                   {data.map((recipe) => {
                                          return (
                                                 <SplideSlide>
                                                        <div>
                                                        
                                                        <br/>
                                                        <h5>{recipe.title}</h5> <br/>
                                                               <Card> 
                                                                      <a href={`/priyarecipes/${recipe._id}`}>
                                                                      <img src={recipe.image} alt={recipe.title} /></a> 
                                                               </Card>
                                                              
                                                        </div>
                                                 </SplideSlide>
                                          )
                                   })}
                            </Splide>
                     </Wrapper>
              </div >
       )
}
const Wrapper = styled.div`
margin: 3rem 0rem;
`;

const Card = styled.div`
min-height: 25rem;
overflow: hidden;
position: relative;
img{
       border-radius: 2rem;
       position: absolute;
       left: 0;
       width:70%;
       height:70%;
       object-fit: cover;
}
h5{
              color:black,
              position: absolute;
              display: flex;
              justify content:center;
              align-items: center;
              text-align:justify
              
}`;


export default Index