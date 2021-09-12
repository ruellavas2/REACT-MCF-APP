import React from 'react'
import { Image } from 'react-bootstrap'
import './styles.css'

const Picture = (props) => {
    return (
        <div className='Picture'>
            <Image src={props.picture.src}
            fluid/>
        </div>
    )
}

export default Picture