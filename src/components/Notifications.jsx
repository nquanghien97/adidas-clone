import React from 'react';
import styled from 'styled-components'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

function notifications() {
  return(
      <Container>
          <Wrapper>
            <TextContainer>
              ĐĂNG KÝ NHẬN THÔNG TIN CẬP NHẬT VÀ ƯU ĐÃI QUA EMAIL
            </TextContainer>
            <ButtonContainer>
              <Button>
                Đăng ký nhận bản tin
                <IconArrow />
              </Button>
            </ButtonContainer>
          </Wrapper>
      </Container>
  );
}

const Container = styled.div`
    background-color: #ede734;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Wrapper = styled.div`
    padding: 40px 20px;
    max-width: 960px;
    display: flex;
`

const TextContainer = styled.h2`
  margin-right: 20px;
  font-size: 30px;
`

const ButtonContainer = styled.div`
    margin-left: 20px;
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    // &:after {
    //     content: '';
    //     position: absolute;
    //     border-right: 1px solid black;
    //     border-top: 1px solid black;
    //     height: calc(100% - 3px) ;
    //     top: 4px;
    //     left: 5px;
    //     right: -3px;
    //     z-index: -1;
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

export default notifications;
