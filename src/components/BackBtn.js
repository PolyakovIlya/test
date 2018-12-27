import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const LinkBtn = styled(Link)`
    display: block;
    text-decoration: none;
`;

const Btn = styled.button`
    display: block;
    padding: 10px 20px;
    background-color: #ccc;
    border-radius: 4px;
    color: #000;
    font-size: 14px;
`;

const BackBtn = () => {
    return (
        <LinkBtn to={`../`}>
            <Btn>{`< Back`}</Btn>
        </LinkBtn>
    )
}

export default BackBtn
