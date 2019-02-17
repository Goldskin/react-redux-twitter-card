import CardList from '../../components/card-list/Card-list'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => ({
    cards: state.cards
})

export default connect(
    mapStateToProps,
    null
)(CardList)