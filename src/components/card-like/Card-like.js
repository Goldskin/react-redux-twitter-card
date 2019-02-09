import React from 'react';
import './Card-like.css';

const Cardlike = props => (
    <button type="button" onClick={() => props.action()}>{props.like}</button>
)

export default Cardlike;
