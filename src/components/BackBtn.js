import React from 'react'
import {Link} from 'react-router-dom'

const style = {
    link: {
        display: 'block',
        textDecoration: 'none'
    },
    btn: {
        display: 'block',
        padding: '10px 20px',
        backgroundColor: '#ccc',
        borderRadius: '4px',
        color: '#000',
        fontSize: '14px',
    }
}

const BackBtn = () => {
    return (
        <Link to={`../`} style={style.link}>
            <button style={style.btn}>{`< Back`}</button>
        </Link>
    )
}

export default BackBtn