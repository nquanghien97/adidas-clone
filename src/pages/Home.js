import React from 'react'
import Navbar from '../components/Navbar'
import Announcements from '../components/Announcements'
import Menu from '../components/Menu'
import Festival from '../components/Festival'
import Ultraboot from '../components/Ultraboot'
import Saleoff from '../components/Saleoff'
import Popular from '../components/Popular'
import Interested from '../components/Interested'
import Trending from '../components/Trending'
import Shoes from '../components/Shoes'
import Shoppingfor from '../components/Shoppingfor'
import Notifications from '../components/Notifications'
import Info from '../components/Info'

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
