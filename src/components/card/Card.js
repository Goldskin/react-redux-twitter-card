import React, { Component } from 'react';
import Avatar from "../avatar/Avatar";
import CardInfo from "../card-info/Card-info";
import CardLike from "../../containers/card-like/Card-like";
import './Card.css';

class Card extends Component {
    render () {
        return (
            <div className="h-100 d-flex justify-content-center align-items-center">
                <div className="card">
                    <div className="row">
                        <Avatar
                            url="https://www.myquickidea.com/wp-content/uploads/2017/09/image-29.jpg"
                        />
                        <div className="col">
                            <div className="row">
                                <CardInfo
                                    name="Goldskin"
                                    alias="@goldskin"
                                    date={new Date()}
                                />

                                <CardLike />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;
