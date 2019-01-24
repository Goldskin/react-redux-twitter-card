import React from 'react';
import moment from 'moment';
import './Card-info.css';

const CardInfo = props => (
    <div className="card-info">
        <h1>{props.name}</h1>
        <p><span>{props.alias}</span> - <span>{moment(props.date).format('D MMM')}</span></p>
    </div>
)


export default CardInfo;
