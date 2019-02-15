import CardList from '../../components/card-list/Card-list'
import { connect } from 'react-redux'
import * as action from '../../actions'

const mapStateToProps = (state, ownProps) => ({
    cards: state.cards
})

export default connect(
    mapStateToProps,
    action
)(CardList)