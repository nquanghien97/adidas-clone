import React from 'react'
import Festival from './components/Festival'
import Ultraboot from './components/Ultraboot'
import Saleoff from './components/Saleoff'

function Home() {
    return (
        <>
            <Saleoff />
            <Festival /> 
            <Ultraboot />
        </>
    )
}

export default Home
