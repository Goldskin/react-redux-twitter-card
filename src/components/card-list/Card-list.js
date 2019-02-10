import React from 'react';
import Card from '../card/Card';

const Cardlike = props => (
    <ul>
        {props.cards.map(card => (
            <li key={card.id} >
                <Card card={card}/>
            </li>
        ))}
    </ul>
)

export default Cardlike;
