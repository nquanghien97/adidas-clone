import React from 'react';
import styled from 'styled-components'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { shoesItems } from '../data'
import {mobile} from '../responsive'

function Shoes() {

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
        <Container>
            <TextContainer>
                NEW ARRIVALS
            </TextContainer>
            <Wrapper>
                <Carousel 
                    arrows={true} showDots={true}
                    renderDotsOutside={renderButtonGroupOutside}
                    responsive={responsive}>
                        {shoesItems.map((item) => (
                        <Slide key={item.id}>
                            <Img src={item.img} />
                            <TextItem>
                                <Price> {item.price} </Price>
                                <Title>{item.title}</Title>
                                <Des>{item.des}</Des>
                                <Status>{item.status}</Status>
                            </TextItem>
                        </Slide>
                        ))}
                </Carousel>
            </Wrapper>
        </Container>
  );
}

const renderButtonGroupOutside = styled.div`
    position: absolute;
    bottom: 0px;
`

const Container = styled.div`
    padding:  0 15px;
    position: relative;
    padding-bottom: 30px;
    ${mobile({padding:0})};
`

const TextContainer = styled.h1`
    padding: 0 20px 5px 5px;
`

const Wrapper = styled.div`
    
`

const Slide = styled.div`
    margin: 0 10px;
    padding-bottom: 30px;
    cursor: pointer;
    border: 1px solid transparent;
    &:hover {
        border: 1px solid black;
    }
    ${mobile({margin:0})};
`

const Img = styled.img`
    width: 100%;
`

const TextItem = styled.div`
    padding: 0 10px;
`

const Price = styled.p`
    font-size: 20px;
`

const Title = styled.div`

`

const Des = styled.div`
    opacity: 0.8;
`

const Status = styled.div`

`



export default Shoes;
