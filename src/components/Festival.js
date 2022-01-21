import React from 'react'
import styled from 'styled-components'


function Festival() {
    return (
        <React.Fragment>
            <Container>
                <Intro 
                    autoPlay
                    muted
                    loop
                    src={process.env.PUBLIC_URL + '/videos/intro.mp4'} 
                    type ='video/mp4' 
                />
            </Container>
        </React.Fragment>
    )
}

const Container = styled.div`
    overflow-x: hidden;
    margin-top: -4px;
    
`
const Intro = styled.video`
    width: 100%;
    height: 100%;
    
`

export default Festival
