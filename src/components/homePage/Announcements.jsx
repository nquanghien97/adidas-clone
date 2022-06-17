import React from 'react'
import styled from 'styled-components'
import {mobile} from '../../responsive'

function Announcements() {
    return (
        <Container>
            <Items>
                Miễn phí giao hàng trên 1.300.000 VNĐ
            </Items>
            <Items>
                Trả hàng dễ dàng
            </Items>
            <Items>
                Nay đã có thể thanh toán qua thẻ tín dụng
            </Items>
        </Container>
    )
}

const  Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-height: 30px;
    background-color: black;
    ${mobile({display:'none'})};
`

const Items = styled.a`
    color: white;
    text-transform: uppercase;
    cursor: pointer;
    font-size: 14px;
    letter-spacing: 2px;
    &:hover {
        text-decoration: underline;
    }
`

export default Announcements
