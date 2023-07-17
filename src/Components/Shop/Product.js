import React, { Component } from "react";

export default class Product extends Component {
  addToCart(id, addToShop) {
    addToShop(id);
  }

  render() {
    return (
      <div className="shop-item">
        <span className="shop-item-title">{this.props.title}</span>
        <img
          className="shop-item-image"
          src={this.props.img}
          alt={this.props.title}
        />
        <div className="shop-item-details">
          <span className="shop-item-price">${this.props.price}</span>
          <button
            className="btn btn-primary shop-item-button"
            type="button"
            onClick={() => this.addToCart(this.props.id, this.props.addToShop)}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    );
  }
}
