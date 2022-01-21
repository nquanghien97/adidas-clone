import React from 'react'
import Navbar from './components/Navbar'
import Announcements from './components/Announcements'
import Menu from './components/Menu'

function Header() {
    return (
        <div>
            <Announcements />
            <Menu />
            <Navbar />
        </div>
    )
}

export default Header
