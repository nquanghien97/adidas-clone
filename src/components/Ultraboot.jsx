import React from 'react'
import styled from 'styled-components'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

function Ultraboot() {
    return (
        <>
            <Container>
                <Video 
                    autoPlay
                    muted
                    loop
                    src={process.env.PUBLIC_URL + '/videos/ultraboot.mp4'} 
                    type ='video/mp4'
                />
                <Wrapper>
                    <Title>
                        Say hello to ultraboot 2022
                    </Title>
                    <TextItem>
                        Được cải thiện với 360˚ cải thiện độ ôm cho nữ để hoản trả năng lượng tối ưu
                    </TextItem>
                    <ButtonContainer>
                        <Button>
                            Mua ngay
                            <IconArrow />
                        </Button>
                    </ButtonContainer>
                </Wrapper>
            </Container>
        </>
    )
}

const Container = styled.div`
    position: relative;
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
`

const Video = styled.video`
    width: 100%;
    height: 100%;
`

const Wrapper = styled.div`
    position: absolute;
    width: 30%;
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
        border: 1px solid white;
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
    &:hover { 
        color: #7a7676;
    }
`

const IconArrow = styled(ArrowRightAltIcon)`
    font-size: 32px !important;
    margin-left: 8px;
`

export default Ultraboot
