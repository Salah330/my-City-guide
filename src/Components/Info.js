import React, { Component } from "react";
import { Link } from "react-router-dom";
import { InfoConsumer } from "./Context";
export default class Info extends Component {
  render() {
    const {
      id,
      headerTitle,
      headerSubTitle,
      headerText,
      img,
    } = this.props.item;
    return (
      <InfoConsumer>
        {(v) => {
          return (
            <div className="col-10 col-lg-4 mx-auto mb-5">
              <div className="card" style={{ width: "18rem" }}>
                <img src={img} alt={headerTitle} className="card-img-top" />
                <div className="card-body">
                  <h3 className="card-title text-uppercase">{headerTitle}</h3>
                  <h4 className="card-title">{headerSubTitle}</h4>
                  <p>{headerText}</p>
                  <Link
                    to="/details"
                    className="btn btn-outline-primary text-uppercase"
                    onClick={() => {
                      v.setdetails(id);
                    }}
                  >
                    more info
                  </Link>
                </div>
              </div>
            </div>
          );
        }}
      </InfoConsumer>
    );
  }
}
