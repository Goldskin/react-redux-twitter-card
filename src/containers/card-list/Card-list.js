import CardList from '../../components/card-list/Card-list'
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state, ownProps) => ({
    cards: state.cards
})

class OrderedCardList extends React.Component {
    render () {
        return (
            <CardList cards={this.props.cards.sort((a, b) => {
                return new Date(b.date).getTime() - new Date(a.date).getTime()
            })} />
        )
    }
}

export default withRouter(connect(
    mapStateToProps,
    null
)(OrderedCardList))