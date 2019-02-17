import React from 'react';
import Card from '../../containers/card/Card';

const Cardlike = props => {
    return <ul className="list-unstyled">
        {props.cards.map(card => (
            <li key={card.id}>
                <Card {...card} />
            </li>
        ))}
    </ul>
}

export default Cardlike;
