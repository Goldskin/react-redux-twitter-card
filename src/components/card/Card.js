import React, { Component } from 'react';
import Avatar from "../avatar/Avatar";
import './Card.css';

class Card extends Component {
  render() {
    return (
      <div className="h-100 d-flex justify-content-center align-items-center">
        <div className="Card">
          <div className="row">
            <div className="col-3">
              <Avatar url="https://www.myquickidea.com/wp-content/uploads/2017/09/image-29.jpg" />
            </div>
            <div className="col"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
