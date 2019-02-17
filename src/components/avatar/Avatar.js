import React from 'react';
import './Avatar.css';

function Avatar (props) {
    return (
        <div className="avatar-container">
            <img
                src={props.url}
                alt="avatar"
            />
        </div>
    )
}

export default Avatar;
