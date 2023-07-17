import React, { Component } from "react";

export default class CartProduct extends Component {
  removeProduct(id, removeInShopping) {
    removeInShopping(id);
  }

  render() {
    return (
      <div className="cart-row">
        <div className="cart-item cart-column">
          <img
            className="cart-item-image"
            src={this.props.img}
            width="100"
            height="100"
            alt=""
          />
          <span className="cart-item-title">{this.props.title}</span>
        </div>
        <span className="cart-price cart-column">${this.props.price}</span>
        <div className="cart-quantity cart-column">
          <button
            className="btn btn-danger"
            type="button"
            onClick={() =>
              this.removeProduct(this.props.id, this.props.removeInShopping)
            }
          >
            REMOVE
          </button>
        </div>
      </div>
    );
  }
}
