import React, {Component} from 'react';
import PropTypes from 'prop-types'
import BackBtn from "./BackBtn";

class ItemPage extends Component {
    constructor(props) {
        super(props);
    }

    renderMentions() {
        const {item} = this.props;

        if(!item.sentiment) return '-';

        const map = {
            negative: '#e44337',
            neutral: '#ccb225',
            positive: '#4caf50',
        };

        return (
            Object.keys(item.sentiment).map((val) => {
                return (
                    <span key={val} style={{color: map[val], marginRight: '10px'}}>{item.sentiment[val]}</span>
                )
            })
        )
    }

    renderPageTypes() {
        const {item} = this.props;

        if(!item.pageType) return '-';

        return (
            Object.keys(item.pageType).map((val) => {
                return (
                    <li key={val} style={{display: 'block'}}>{val}: {item.pageType[val]}</li>
                )
            })
        )
    }

    render() {
        const {item} = this.props;

        if(!item) return null;

        return(
            <>
                <BackBtn/>
                <h2>Tag details</h2>
                <div>-Label: {item.label}</div>
                <div>-Total Mentions: {item.volume}</div>
                <div>-Mentions: {this.renderMentions()}</div>
                <div>-Page types:
                    <ul>
                        {this.renderPageTypes()}
                    </ul>
                </div>
            </>
        )
    }
}

ItemPage.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        volume: PropTypes.number,
        sentiment: PropTypes.shape({
            negative: PropTypes.number,
            neutral: PropTypes.number,
            positive: PropTypes.number
        }),
        pageType: PropTypes.shape({
            blog: PropTypes.number,
            facebook: PropTypes.number,
            forum: PropTypes.number,
            general: PropTypes.number,
            image: PropTypes.number,
            news: PropTypes.number,
            review: PropTypes.number,
            twitter: PropTypes.number,
            video: PropTypes.number
        })
    }),
}

export default ItemPage;