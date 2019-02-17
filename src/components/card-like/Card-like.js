import React from 'react';
import './Card-like.css';
import PropTypes from 'prop-types'

const Cardlike = props => (
    <button type="button" onClick={() => props.action()}>{props.like}</button>
)

Cardlike.propTypes = {
    like: PropTypes.number.isRequired,
    action: PropTypes.func.isRequired
}

export default Cardlike;
