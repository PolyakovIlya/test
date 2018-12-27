import React from 'react'
import PropTypes from 'prop-types'
import CloudItem from './CloudItem'

class CloudList extends React.Component {
    constructor(props) {
        super(props);
    }

    renderList() {
        const {clouds} = this.props;

        const arr = this.getSentimentScores(clouds);
        const max = Math.max(...arr),
              min = Math.min(...arr);

        return clouds.map((cloud) => {
            return <CloudItem key={cloud.id} {...cloud} max={max} min={min} />
        })
    }

    getSentimentScores(clouds) {
        return clouds.map((cloud) => (cloud.sentimentScore));
    }

    render() {
        return (
            <ul>
                {this.renderList()}
            </ul>
        )
    }
}

CloudList.propTypes = {
    clouds: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            sentimentScore: PropTypes.number.isRequired,
            volume: PropTypes.number,
        }).isRequired
    ).isRequired
}

export default CloudList
