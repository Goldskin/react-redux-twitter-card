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

    getClass () {
        return classnames({
            "is-animating": this.state.liked,
            "no-hover": this.state.noHover,
            "card-like": true
        })
    }

    formatedLike () {
        if (this.props.like < 1000) {
            return this.props.like
        }

        if (this.props.like < 1000000) {
            return `${Math.floor(this.props.like / 1000)} K`
        }

        return `${Math.floor(this.props.like / 1000)} M`

    }

    render () {
        const className = this.getClass()

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
            >{this.formatedLike()}</button>
        )
    }
}

Cardlike.propTypes = {
    like: PropTypes.number.isRequired,
    action: PropTypes.func.isRequired
}

export default Cardlike;
