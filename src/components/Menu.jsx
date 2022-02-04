import React from 'react'
import styled from 'styled-components'

function Menu() {
    return (
        <Container>
            <MenuItems>
                trợ giúp
            </MenuItems>
            <MenuItems>
                trình theo dõi đơn hàng
            </MenuItems>
            <MenuItems>
                đăng ký bản tin
            </MenuItems>
            <MenuItems>
                đăng nhập
            </MenuItems>
            <Flag src='https://seeklogo.com/images/V/viet-nam-logo-3D78D597F9-seeklogo.com.png' />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 30px;
    background-color: #ccc;
`

const MenuItems = styled.a`
    margin-right: 20px;
    cursor: pointer;
    font-weight: 300;
`

const Flag = styled.img`
    height: 12px;
    margin-right: 28px;
    cursor: pointer;
`





export default Menu
