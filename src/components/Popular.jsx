import { useEffect, useState } from "react"
import { getPopular } from "../services/recipeapi"
import { Splide, SplideSlide } from '@splidejs/react-splide'
import styled from 'styled-components'
import '@splidejs/react-splide/css'

function Popular() {
       const [popular, setPopular] = useState([])

       useEffect(() => {
              getPopular()
                     .then(res =>
                            setPopular(res.data.recipes))
       }, [])

       return (
              <div>
                     <Wrapper>
                            <h3>Popular Picks</h3><br />
                            <Splide options={{
                                   perPage: 4,
                                   arrows: false,
                                   pagination: false,
                                   drag: 'free',
                                   gap: '2%',
                            }}>
                                   {popular.map((recipe) => {
                                          return (
                                                 <SplideSlide key={recipe.id}>
                                                        <div>
                                                               <Card>
                                                                      <a href={`/recipe/${recipe.id}`}>
                                                                      <img src={recipe.image} alt={recipe.title} /></a> <br/>
                                                                      <h5>{recipe.title}</h5>      
                                                               </Card>
                                                        </div>
                                                 </SplideSlide>
                                          );
                                   })}
                            </Splide>
                     </Wrapper>
              </div >
       );
}
const Wrapper = styled.div`
margin: 4rem 0rem;
`;

const Card = styled.div`
max-height: 350px;
img{
       border-radius: 2rem;
       height: 250px;
       width: 200px;
}
h5{
     color:black,
     font-family: Arial, Helvetica, sans-serif;
}`;
// const Wrapper = styled.div`
// margin: 0rem;
// `;
// const Card = styled.div`
// min-height: 25rem;
// overflow: hidden;
// position: relative;
// img{
//        border-radius: 2rem;
//        position: absolute;
//        left: 0;
//        width:70%;
//        height:70%;
//        object-fit: cover;
// }
// h5{
//               color:black,
//               position: absolute;
//               display: flex;
//               justify content:center;
//               align-items: center;
//               text-align:justify
              
// }`;

export default Popular