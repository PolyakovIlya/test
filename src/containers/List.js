import {connect} from 'react-redux'
import CloudList from '../components/CloudList'

const mapStateToProps = (state) => ({
    clouds: state.clouds
});

export default connect(
    mapStateToProps
)(CloudList)

