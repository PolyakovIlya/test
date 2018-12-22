import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

let style = {
    link: {
        position: 'relative',
        display: 'inline-block',
        margin: '5px',
        textDecoration: 'none'
    },
    badge: {
        position: 'absolute',
        top: 0,
        right: 0,
        fontSize: '13px',
        backgroundColor: '#e44337',
        color: '#fff',
        borderRadius: '50%',
        padding: '1px 2px',
        minWidth: '12px',
        textAlign: 'center'
    },
    list: {
        listStyle: 'none',
        padding: '5px 10px',
        color: '#5577cc',
        backgroundColor: '#ececec',
        borderRadius: '5px',
        verticalAlign: 'middle'
    }
}

class CloudItem extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {id, label, sentimentScore, volume } = this.props;

        return(
            <Link to={`/${id}`} style={style.link}>
                <li style={{...style.list, fontSize: sentimentScore}}>{label}</li>
                <span style={style.badge}>{volume}</span>
            </Link>
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