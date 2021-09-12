import React from 'react'
import { Image } from 'react-bootstrap'

const Logo = (props) => {
    return (
        <div>
            <Image src={props.logo.src}
            fluid/>
        </div>
    )
}

export default Logo