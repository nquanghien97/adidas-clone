import React from 'react'
import styled from 'styled-components'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';


function Festival() {
    return (
        <React.Fragment>
            <Container>
                <Intro 
                    autoPlay
                    muted
                    loop
                    src={process.env.PUBLIC_URL + '/videos/intro.mp4'} 
                    type ='video/mp4' 
                />
                <Wrapper>
                    <Title>
                        Never change your stripes
                    </Title>
                    <TextItem>
                        Our Festival-ready collection has arrived
                    </TextItem>
                    <ButtonContainer>
                        <Button>
                            Shop now
                            <IconArrow />
                        </Button>
                    </ButtonContainer>
                </Wrapper>
            </Container>
        </React.Fragment>
    )
}

const Container = styled.div`
    overflow-x: hidden;
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
`
const Intro = styled.video`
    width: 100%;
    height: 100%;
`

const Wrapper = styled.div`
    position: absolute;
    width: 33.33%;
    margin-left: 130px;
`

const Title = styled.h1`
    margin-bottom: 32px;
    font-size: 42px;
    font-weight: 600;
    text-transform: uppercase;
`

const TextItem = styled.p`
    font-size: 20px;
    margin-bottom: 20px;
    font-weight: lighter;
`

const ButtonContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    &:before {
        content: '';
        position: absolute;
        border: 1px solid black;
        width: 153px;
        height: calc(100% - 3px) ;
        top: 4px;
        left: 5px;
        right: -3px;
        z-index: -1;
`

const Button = styled.button`
    margin-top: 4px;
    padding: 10px 12px;
    text-transform: uppercase;
    font-size: 16px;
    letter-spacing: 2px;
    display: flex;
    align-items: center;
    cursor: pointer;  
    background-color: black;
    color: white;
    border: none;
    &:hover {
        color: #ccc;
    }
`

const IconArrow = styled(ArrowRightAltIcon)`
    font-size: 32px !important;
    margin-left: 8px;
`

export default Festival
