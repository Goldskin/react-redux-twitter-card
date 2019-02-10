import Cardlike from '../../components/card-like/Card-like'
import { connect } from 'react-redux'
import { addLike } from '../../actions'

const mapStateToProps = (state, ownProps) => {
    return {
        like: state.cards[0].like
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    debugger
    return {
        action: () => dispatch(addLike(ownProps.id))
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cardlike)