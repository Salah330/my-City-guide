import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Default extends Component {
  render() {
    return (
      <div className="container p-3">
        <div className="row  mx-auto text-center ">
          <div className="col-12">
            <div>
              <h1>Oops!</h1>
              <h2>
                Error <span className="text-danger">404</span> Not Found
              </h2>
              <div>sorry, an error occurred , the requested page not found</div>
              <Link
                to="/"
                className="btn btn-outline-primary text-uppercase m-2"
              >
                Back Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
