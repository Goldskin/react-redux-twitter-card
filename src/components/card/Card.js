import React, { Component } from 'react';
import Avatar from "../avatar/Avatar";
import CardInfo from "../card-info/Card-info";
import CardLike from "../card-like/Card-like";
import './Card.css';

class Card extends Component {
    render () {
        return (
            <div className="h-100 d-flex justify-content-center align-items-center">
                <div className="card">
                    <div className="row">
                        <div className="col avatar-col">
                            <Avatar url={this.props.user.avatar} />
                        </div>
                        <div className="col">
                            <div className="row">
                                <div className="col">
                                    <CardInfo
                                        name={this.props.user.name}
                                        alias={this.props.user.alias}
                                        date={new Date()}
                                    />
                                    <div className="row">
                                        <div className="col">
                                            <CardLike
                                                action={() => this.props.addLike(this.props.id)}
                                                like={this.props.like}
                                            />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;
