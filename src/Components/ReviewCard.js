import React, { Component } from "react";
import { InfoConsumer } from "./Context";
import SingleReview from "./SingleReview";
export default class ReviewCard extends Component {
  render() {
    return (
      <InfoConsumer>
        {(data) => {
          return data.reviews.map((item) => {
            return <SingleReview key={item.id} item={item} />;
          });
        }}
      </InfoConsumer>
    );
  }
}
