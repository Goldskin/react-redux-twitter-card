import React from 'react';
import './Avatar.css';

function Avatar (props) {
    return (
        <div className="col avatar-col">
            <div className="avatar-container">
                <img
                    src={props.url}
                    alt="avatar"
                />
            </div>
        </div>
    )
}

export default Avatar;
