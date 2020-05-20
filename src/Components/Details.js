import React, { Component, Fragment } from "react";
import { InfoConsumer } from "./Context";
import { Nav, NavItem, NavLink } from "reactstrap";
import { Tabs, Tab } from "react-bootstrap-tabs";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
export default class Details extends Component {
  render() {
    return (
      <InfoConsumer>
        {(data) => {
          const {
            id,
            headerTitle,
            headerSubTitle,
            headerText,
            img,
            maps,
            title,
            description,
          } = data.detailInfo;
          return (
            <Fragment>
              <HeaderDetails>
                <div className="container-fluid align-items-center m-auto">
                  <h1 className="display-1 font-weight-bold">{headerTitle}</h1>
                  <h4 className="display-3">{headerSubTitle}</h4>
                  <p>{headerText}</p>
                  {/* social icons */}
                  <div className="container mt-5">
                    <div className="row justify-content-center mb-3">
                      <div className="col-2">
                        <i className="fab fa-facebook-f fa-2x"></i>
                      </div>
                      <div className="col-2">
                        <i className="fab fa-twitter fa-2x"></i>
                      </div>
                      <div className="col-2">
                        <i className="fab fa-google-plus-g fa-2x"></i>
                      </div>
                      <div className="col-2">
                        <i className="fab fa-reddit fa-2x"></i>
                      </div>
                      <div className="col-2">
                        <i className="fab fa-whatsapp fa-2x"></i>
                      </div>
                      <div className="col-2">
                        <i className="fab fa-facebook-messenger fa-2x"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </HeaderDetails>
              {/* start tabs */}
              <Tabs
                defaultActiveKey="aboutPlace"
                id="uncontrolled-tab-example"
                className="container mt-3"
              >
                <Tab
                  label="About Place"
                  eventKey="aboutPlace"
                  title="aboutPlace"
                  className="mt-2"
                >
                  <h1 className="mb-3">{title}</h1>
                  <p>{description}</p>
                  <img
                    src={img}
                    alt={title}
                    className="img-thumbnail img-fluid "
                  />
                </Tab>
                <Tab
                  label="Review"
                  eventKey="review"
                  title="review"
                  className="mt-2"
                >
                  reviews content
                </Tab>
                <Tab label="Map" eventKey="map" title="review" className="mt-2">
                  <iframe
                    src={maps}
                    frameborder="0"
                    border="0"
                    cellspacing="0"
                    style={{
                      border: "none",
                      width: "100%",
                      height: "28.125rem",
                    }}
                  ></iframe>
                </Tab>
              </Tabs>
            </Fragment>
          );
        }}
      </InfoConsumer>
    );
  }
}

const HeaderDetails = styled.header`
  background: linear-gradient(rgba(109, 109, 109), rgba(255, 255, 255));
  text-transform: uppercase;
  text-align: center;
  color: var(--mainBlue);
  margin-bottom: 5%;
  h1 {
    padding-top: 10%;
    color: var(--mainDark);
  }

  h4 {
    color: var(--mainDark);
  }
  p {
    padding-left: 10%;
    padding-right: 10%;
    color: var(--mainDark);
  }
  i {
    color: var(--mainDark);
  }
  i:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }
`;
