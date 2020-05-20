import React, { Component } from "react";
import { InfoConsumer } from "./Context";
import Info from "./Info";
export default class Home extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="row mb-5">
          <InfoConsumer>
            {(data) => {
              return data.info.map((item) => {
                return <Info key={item.id} item={item} />;
              });
            }}
          </InfoConsumer>
        </div>
      </div>
    );
  }
}
