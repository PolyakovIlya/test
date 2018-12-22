import {connect} from 'react-redux'
import ItemPage from '../components/ItemPage'

const getItemList = (items, id) => (
    items.find(item => item.id === id)
)

const mapStateToProps = (state, props) => {
    return {item: getItemList(state.clouds, props.match.params['itemId'])}
};

export default connect(
    mapStateToProps
)(ItemPage)

