import React from 'react'
import Festival from './components/Festival'
import Ultraboot from './components/Ultraboot'
import Saleoff from './components/Saleoff'
import Popular from './components/Popular'
import Interested from './components/Interested'
import Trending from './components/Trending'

function Home() {
    return (
        <>
            <Saleoff />
            <Festival /> 
            <Ultraboot />
            <Interested />
            <Popular />
            <Trending />
        </>
    )
}

export default Home
