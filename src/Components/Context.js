import React, { Component } from "react";
import { placeInfo, reviews, detailInfo, news } from "../data";
const InfoContext = React.createContext();

class InfoProvider extends Component {
  state = {
    info: placeInfo,
    reviews: reviews,
    detailInfo: detailInfo,
    news: news,
  };
  getItem = (id) => {
    const itemm = this.state.info.find((item) => item.id === id);
    return itemm;
  };
  setdetails = (id) => {
    const itemm = this.getItem(id);
    this.setState(() => {
      return { detailInfo: itemm };
    });
  };

  render() {
    return (
      <InfoContext.Provider
        value={{
          info: this.state.info,
          reviews: this.state.reviews,
          detailInfo: this.state.detailInfo,
          news: this.state.news,
          getItem: this.getItem,
          setdetails: this.setdetails,
        }}
      >
        {this.props.children}
      </InfoContext.Provider>
    );
  }
}
const InfoConsumer = InfoContext.Consumer;

export { InfoProvider, InfoConsumer };
