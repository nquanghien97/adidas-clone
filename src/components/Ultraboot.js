import React from 'react'
import styled from 'styled-components'

function Ultraboot() {
    return (
        <>
            <Container>
                <Video 
                    autoPlay
                    muted
                    loop
                    src={process.env.PUBLIC_URL + '/videos/ultraboot.mp4'} 
                    type ='video/mp4'
                />
            </Container>
        </>
    )
}

const Container = styled.div`
    margin-top: -4px;
`

const Video = styled.video`
    width: 100%;
    height: 100%;
`

export default Ultraboot
