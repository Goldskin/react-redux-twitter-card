import Card from '../../components/card/Card'
import { connect } from 'react-redux'
import { getUser } from '../../reducers/user'
import * as action from '../../actions'

const mapStateToProps = (state, ownProps) => ({
    user: getUser(state, ownProps.userId)
})

export default connect(
    mapStateToProps,
    action
)(Card)