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

const List = styled.li`
    list-style: none;
    padding: 5px 10px;
    color: #5577cc;
    border-radius: 5px;
    vertical-align: middle;
    font-size: ${props => props.size}pt;
`;

class CloudItem extends Component {
    constructor(props) {
        super(props)
    }

    calculateTagSize(score) {
        const tIndex = score,
              min = 1,
              max = 895,
              fMin = 12,
              fMax = 100;

        return tIndex === min ? fMin : (tIndex / max) * (fMax - fMin) + fMin;
    }

    render() {
        const {id, label, sentimentScore } = this.props;
        const size = this.calculateTagSize(sentimentScore)

        console.log('size', size);

        return(
            <LinkBtn to={`/${id}`}>
                <List size={size}>{label}</List>
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
