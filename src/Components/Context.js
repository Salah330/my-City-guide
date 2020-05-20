import React, { Component } from "react";

const InfoContext = React.createContext();

class InfoProvider extends Component {
  render() {
    return (
      <InfoContext.Provider value="hello context">
        {this.props.children}
      </InfoContext.Provider>
    );
  }
}
const InfoConsumer = InfoContext.Consumer;

export { InfoProvider, InfoConsumer };
