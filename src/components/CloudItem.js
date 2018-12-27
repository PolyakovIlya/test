import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const LinkBtn = styled(Link)`
    position: relative;
    display: inline-block;
    margin: 5px;
    text-decoration: none;
`;

const Badge = styled.span`
    position: absolute;
    top: 0;
    right: 0;
    font-size: 13px;
    background-color: #e44337;
    color: #fff;
    border-radius: 50%;
    padding: 1px 2px;
    min-width: 12px;
    text-align: center;
`;

const List = styled.li`
    list-style: none;
    padding: 5px 10px;
    color: #5577cc;
    background-color: #ececec;
    border-radius: 5px;
    vertical-align: middle;
    font-size: ${props => props.size}px;
`;

class CloudItem extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {id, label, sentimentScore, volume } = this.props;

        return(
            <LinkBtn to={`/${id}`}>
                <List size={sentimentScore}>{label}</List>
                <Badge>{volume}</Badge>
            </LinkBtn>
        )
    }
}

CloudItem.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    sentimentScore: PropTypes.number.isRequired,
    volume: PropTypes.number
}

export default CloudItem
