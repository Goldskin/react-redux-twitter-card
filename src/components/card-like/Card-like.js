import React from 'react';
import './Card-like.scss';
import PropTypes from 'prop-types'
import classnames from 'classnames'

class Cardlike extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            liked: false,
            noHover: false
        }
    }
    render () {
        const className = classnames({
            "is-animating": this.state.liked,
            "no-hover": this.state.noHover,
            "card-like": true
        })

        return (
            <button
                type="button"
                onClick={() => {
                    this.setState({
                        liked: !this.state.liked,
                        noHover: this.state.liked
                    })
                    return this.props.action()
                }}
                onMouseLeave={() => this.setState({
                    noHover: false
                })}
                className={className}
            >{this.props.like}</button>
        )
    }
}

Cardlike.propTypes = {
    like: PropTypes.number.isRequired,
    action: PropTypes.func.isRequired
}

export default Cardlike;
