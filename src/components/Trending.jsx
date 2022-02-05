import React from 'react';
import { trendingItems } from '../data';
import styled from 'styled-components'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {mobile} from '../responsive'
 

function Trending() {
    // Slider
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
          slidesToSlide: 2 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
      
    return(
        <>
            <Text>What's Hot</Text>
            <Container>
                <Wrapper>
                    <Carousel 
                    responsive={responsive}>
                        {trendingItems.map((item) => (
                        <Slide key={item.id}>
                            <Img src={item.img} />
                            <TextContainer>
                                <Title>{item.title}</Title>
                                <Des>{item.des}</Des>
                                <BuyButton>Buy now</BuyButton>
                            </TextContainer>
                        </Slide>
                        ))}
                    </Carousel>
                </Wrapper>
            </Container>
        </>
    ) 
}

const Text = styled.h1`
    padding: 10px 25px;
    text-transform: uppercase;
`

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: 0 15px;
    margin-bottom: 100px;
    ${mobile({padding:0, marginBottom:20})};
`

const Wrapper = styled.div`
    width: 100%;
    @media(min-width: 464px) {
        width: 100%
    }
`

const Slide = styled.div`

`

const Img = styled.img`
    width: 100%;
    padding: 10px;
    ${mobile({padding:0})};
`

const TextContainer = styled.div`
    height: 180px;
    position: relative;
    ${mobile({height:120})};
`

const Title = styled.h1`
    font-size: 18px;
    margin: 0 8px 8px 8px;
    
`

const Des = styled.p`
    font-size: 16px;
    margin: 0 8px 8px 8px;
    opacity: 0.8;
`

const BuyButton = styled.a`
    margin: 0 8px 8px 8px;
    position: absolute;
    bottom: 0;
    text-decoration: underline;
    font-size: 18px;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
    &:hover{
        background-color: black;
        color: white;
    }
    ${mobile({bottom:0})};
`



export default Trending;
