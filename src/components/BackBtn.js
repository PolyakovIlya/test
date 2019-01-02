import React from 'react'
import styled from 'styled-components'
import history from '../history';

const LinkBtn = styled.div`
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
        <LinkBtn onClick={history.goBack}>
            <Btn>{`< Back`}</Btn>
        </LinkBtn>
    )
}

export default BackBtn
