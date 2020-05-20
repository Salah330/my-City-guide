import React, { Component } from "react";

export default class SingleReview extends Component {
  render() {
    const { id, name, avatar, comment } = this.props.item;
    return (
      <div className="media mt-4">
        <img
          src={avatar}
          style={{ width: "40px" }}
          alt={name}
          className="mr-3"
        />
        <div className="media-body">
          <h5 className="mt-0">{name}</h5>
          <p>{comment}</p>
        </div>
      </div>
    );
  }
}
