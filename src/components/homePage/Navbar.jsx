import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';
import { Badge } from '@material-ui/core';
import FavoriteBorderSharpIcon from '@material-ui/icons/FavoriteBorderSharp';
import {mobile} from '../../responsive'

function Navbar() {
    return (
        <Container>
            <Left>
                NQH
            </Left>
            <Center>
                <MenuItems>
                    Nam
                </MenuItems>
                <MenuItems>
                    Nữ
                </MenuItems>
                <MenuItems>
                    Trẻ em
                </MenuItems>
                <MenuItems>
                    Thể thao
                </MenuItems>
                <MenuItems>
                    Các nhãn hiệu
                </MenuItems>
            </Center>
            <Right>
                <SearchContainer>
                    <Input placeholder="Tìm kiếm" />
                    <IconSearch />
                </SearchContainer>
                <IconContainer>
                    <IconItems>
                        <FavoriteBorderSharpIcon />
                    </IconItems>
                    <IconItems>
                        <Badge badgeContent={4} color="secondary">
                            <ShoppingCartSharpIcon />
                        </Badge>
                    </IconItems>
                </IconContainer>
            </Right>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    padding: 12px;
    min-height: 70px;
    align-items: center;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 4px -2px, rgba(0, 0, 0, 0.3) 0px 3px 4px -3px;
    background-color: white;
    @media (max-width: 720px) {
        flex-direction: column;
    }
`

const Left = styled.h1`
    flex: 1;
    display: flex;
    margin-left: 20px;
    cursor: pointer;
    z-index: 10;
`

const Center = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    ${mobile({marginTop:8, marginBottom:8})};
`

const MenuItems = styled.a`
    padding: 4px 16px;
    text-transform: uppercase;
    cursor: pointer;
    &:hover {
        background-color: #ccc;
        border-radius: 10px;
    }
    ${mobile({padding: 8, backgroundColor:'#ccc',borderRadius: 10, margin:2})};
`

const Right = styled.div`
    width: 100%;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-end;
    z-index: 10;
    ${mobile({justifyContent:'space-between'})};
`

const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    padding: 5px;
    margin-right: 28px;
    justify-content: space-between;
    ${mobile({flex:1})};
`

const Input = styled.input`
    border: none;
    outline: none;
`

const IconSearch = styled(SearchIcon)`
    cursor: pointer;
`

const IconContainer = styled.div`
    display: flex;
    margin-right: 24px;
    ${mobile({marginRight:0})};
`

const IconItems = styled.div`
    margin-right: 28px;
    cursor: pointer;
`


export default Navbar
