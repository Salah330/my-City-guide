import React from "react";
import styled from "styled-components";
export default function Footer() {
  return (
    <MainFooter>
      <div className="main-footer bg-dark pt-3">
        <div className="container">
          <div className="row mx-auto  ">
            {/* col 1 */}
            <div className="col-6 col-md-3  text-white">
              <h4> Culpa mollit </h4>
              <ul className="list-unstyled">
                <li>lorem lorem</li>
                <li>lorem lorem</li>
                <li>lorem lorem</li>
                <li>lorem lorem</li>
              </ul>
            </div>
            {/* col 2 */}
            <div className=" col-6 col-md-3 text-white">
              <h4> Culpa mollit </h4>
              <ul className="list-unstyled">
                <li>lorem lorem</li>
                <li>lorem lorem</li>
                <li>lorem lorem</li>
                <li>lorem lorem</li>
              </ul>
            </div>
            {/* col 3 */}
            <div className="col-6 col-md-3 text-white ">
              <h4> Culpa mollit </h4>
              <ul className="list-unstyled">
                <li>lorem lorem</li>
                <li>lorem lorem</li>
                <li>lorem lorem</li>
                <li>lorem lorem</li>
              </ul>
            </div>
            {/* col 4 */}
            <div className="col-6 col-md-3 text-white">
              <h4> Culpa mollit </h4>
              <ul className="list-unstyled">
                <li>lorem lorem</li>
                <li>lorem lorem</li>
                <li>lorem lorem</li>
                <li>
                  <a>lorem lorem</a>
                </li>
              </ul>
            </div>
          </div>
          {/* footer bottom */}
          <div className="footer-bottom  pb-2">
            <p className="text-center text-white text-md-left">
              &copy;{new Date().getFullYear()} Salah Samir - All Right Reserved
            </p>
          </div>
        </div>
      </div>
    </MainFooter>
  );
}
const MainFooter = styled.footer`
  ul li {
    color: var(--mainGrey);
  }
  ul li:hover {
    color: var(--mainLightGrey);
  }
`;
