import CardList from '../../components/card-list/Card-list'
import { connect } from 'react-redux'
import { addLike } from '../../actions'

const mapStateToProps = (state, ownProps) => ({
    cards: state.cards
})

const mapDispatchToProps = (dispatch, ownProps) => ({})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CardList)