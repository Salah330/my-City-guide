import React, { Component } from "react";
import NewsCard from "./NewsCard";
import { InfoConsumer } from "./Context";
export default class News extends Component {
  render() {
    return (
      <InfoConsumer>
        {(value) => {
          return value.news.map((item) => {
            return <NewsCard key={item.key} item={item} />;
          });
        }}
      </InfoConsumer>
    );
  }
}
