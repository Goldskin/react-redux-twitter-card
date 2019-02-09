import Cardlike from '../../components/card-like/Card-like'
import { connect } from 'react-redux'
import { addLike } from '../../actions'

const mapStateToProps = (state, ownProps) => ({
    like: state.likeCounter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    action: () => dispatch(addLike(ownProps.filter))
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cardlike)