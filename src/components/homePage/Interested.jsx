import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {mobile} from '../../responsive'


function Interested() {
    //Slider
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 2 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
    };

    const ButtonGroup = ({ next, previous}) => {
    return (
        <> 
        <ButtonOne  onClick={() => previous()}>
            <IconItems>
                <NavigateBeforeIcon style={{fontSize: 32}} />
            </IconItems>
        </ButtonOne>
        <ButtonTwo onClick={() => next()}>
            <IconItems>
                <NavigateNextIcon  style={{fontSize: 32}} />
            </IconItems>
        </ButtonTwo>
        </>
    );
    };

    //api
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://62a591d8b9b74f766a3ba5db.mockapi.io/api/clothes")
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setItems(result);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
              }
            )
        }, [])
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
    return(
        <Container>
            <InterestedContainer>
                <InterestedText>
                    STILL INTERESTED?
                </InterestedText>
            </InterestedContainer>
            <Wrapper>
                <Carousel 
                arrows={false} renderButtonGroupOutside={true} customButtonGroup={<ButtonGroup />}
                responsive={responsive}>
                    {items.map((item) => (
                        <Slide key={item.id}>
                            <Image src={item.avatar} />
                            <Price> {item.price} </Price>
                            <Title> {item.name} </Title> 
                            <Des> {item.description} </Des>
                        </Slide>
                    ))}
                </Carousel> 
            </Wrapper>
        </Container>
    )}
}

const ButtonOne = styled.button`
    position: absolute;
    top: 40px;
    right: 100px;
    background-color: transparent;
    border: none;
    ${mobile({top:100, left: 20})};
`
const ButtonTwo = styled.button`
    position: absolute;
    top: 40px;
    right: 40px;
    background-color: transparent;
    border: none;
    ${mobile({top: 100, right: 20})};
`

const Container = styled.div`
    overflow: hidden;
    position: relative;
`

const InterestedContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 48px 0;
`

const InterestedText = styled.h1`
    text-transform: uppercase;
    font-size: 40px;
    margin-left: 135px;
    letter-spacing: 2px;
    ${mobile({marginLeft:0})};
`

const IconItems = styled.div`
    padding: 12px;
    &:hover {
        background-color: black;
        color: white;
        cursor: pointer;
    }
`

const Wrapper = styled.div`
`

const Slide = styled.div`
    margin:0 18px;
    position: relative;
    border: 1px solid transparent;
    cursor: pointer;
    &:hover{
        border: 1px solid black;
    }
    ${mobile({margin: 0, marginTop: 12})};
`

const Image = styled.img`
    width: 100%;
    
`

const Price = styled.div`
    position: absolute;
    bottom: 80px;
    font-size: 20px;
    background-color: white;
    padding: 8px;
`

const Title = styled.div`
    margin: 4px 8px;
`

const Des = styled.p`
    opacity: 0.8;
    font-size: 16px;
    padding-bottom: 32px;
    margin: 0 8px;
`

export default Interested;
