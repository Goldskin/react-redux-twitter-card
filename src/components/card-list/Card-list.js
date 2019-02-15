import React from 'react';
import Card from '../card/Card';

const Cardlike = props => {
    console.log(props)
    return <ul>
        {props.cards.map(card => (
            <li key={card.id}>
                <Card
                    {...card}
                    onLike={() => props.addLike(card.id)}
                />
            </li>
        ))}
    </ul>
}

export default Cardlike;
