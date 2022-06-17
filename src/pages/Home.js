import React from 'react'
import Navbar from '../components/homePage/Navbar'
import Announcements from '../components/homePage/Announcements'
import Menu from '../components/homePage/Menu'
import Festival from '../components/homePage/Festival'
import Ultraboot from '../components/homePage/Ultraboot'
import Saleoff from '../components/homePage/Saleoff'
import Popular from '../components/homePage/Popular'
import Interested from '../components/homePage/Interested'
import Trending from '../components/homePage/Trending'
import Shoes from '../components/homePage/Shoes'
import Shoppingfor from '../components/homePage/Shoppingfor'
import Notifications from '../components/homePage/Notifications'
import Info from '../components/homePage/Info'

function Home() {
    return (
        <>
            <Announcements />
            <Menu />
            <Navbar />
            <Saleoff />
            <Festival /> 
            <Ultraboot />
            <Interested />
            <Popular />
            <Trending />
            <Shoes />
            <Shoppingfor />
            <Notifications />
            <Info />
        </>
    )
}

export default Home
