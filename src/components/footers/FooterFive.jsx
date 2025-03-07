import React from "react";
import { Link } from "react-router-dom";
import footerBg from "../../assets/img/footer/bg.jpg";

export const FooterFive = () => {
  return (
    <footer>
      <div className="td-footer-area">
        <div className="td-footer-5-top td-black-bg-2 td-footer-5-space">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="td-footer-5-widget mb-45">
                  <h2 className="td-footer-5-widget-title mb-45">
                    Head Office
                  </h2>
                  <div className="td-footer-5-widget-content">
                    <ul>
                      <li>
                        <a href="mailto:abdul.rahiman@therehapie.com">
                          abdul.rahiman@therehapie.com
                        </a>
                      </li>
                      <li className="mb-20">
                        <a href="tel:+(971)501361586"> +971 50 136 1586</a>
                      </li>
                      <li>
                        <a
                          href="https://www.google.com/maps/@41.6758525,-86.2531698,18.17z"
                          target="_blank"
                        >
                          Building 9W - 138 - SO - 23

                          <br />
                          Dubai Airport Freezone
                          <br />
                          Dubai, UAE
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="td-footer-5-widget mb-45 ml-20">
                  <h2 className="td-footer-5-widget-title mb-45">Sub Office</h2>
                  <div className="td-footer-5-widget-content">
                    <ul>
                      <li>
                        <a href="mailto:info@adina-design.com">
                          info@adina-design.com
                        </a>
                      </li>
                      <li className="mb-20">
                        <a href="tel:+(971)501361586">+(123) 456 789 00</a>
                      </li>
                      <li>
                        <a
                          href="https://www.google.com/maps/@41.6758525,-86.2531698,18.17z"
                          target="_blank"
                        >
                          2938 Bingamon Branch Road
                          <br />
                          Highland Park, IL 60035
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div> */}
              <div className="col-lg-2 col-md-4 col-sm-6">
                <div className="td-footer-5-widget mb-45 ml-40">
                  <h2 className="td-footer-5-widget-title mb-45">Our Pages</h2>
                  <div className="td-footer-5-widget-content td-footer-5-widget-content-link">
                    <ul>
                      <li>
                        <Link to="/about">About Us</Link>
                      </li>

                      <li>
                        <Link to="/contact">Contact us</Link>
                      </li>
                      <li>
                        <a href="/faq">FAQ Page</a>
                      </li>
                      <li>
                        <a href="/blog">Our Blogs</a>
                      </li>
                      <li>
                        <a href="/service">Our Services</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6">
                <div className="td-footer-5-widget mb-45 ml-50">
                  <h2 className="td-footer-5-widget-title mb-45">Link Pages</h2>
                  <div className="td-footer-5-widget-content td-footer-5-widget-content-link">
                    <ul>
                      {/* <li>
                        <a href="#">Careers</a>
                      </li> */}


                      <li>
                        <a href="/terms">Terms & Condition</a>
                      </li>
                      <li>
                        <a href="/privacy">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="/disclaimer">Disclaimer</a>
                      </li>
                      <li>
                        <a href="/cookies">Cookie Policy</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6">
                <div className="td-footer-5-widget mb-45 ml-65">
                  <h2 className="td-footer-5-widget-title mb-45">Follow Us</h2>
                  <div className="td-footer-5-widget-content td-footer-5-widget-content-link">
                    <ul>
                      {/* <li>
                        <a href="#">Facebook</a>
                      </li> */}
                      <li>
                        <a href="https://www.linkedin.com/in/abdul-rahiman-beyaram-kunhali-698a971b6/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank"  >LinkedIn</a>
                      </li>
                      {/* <li>
                        <a href="#">Twitter</a>
                      </li>
                      <li>
                        <a href="#">YouTube</a>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="td-footer-5-bottom bg-position"
          style={{ backgroundImage: `url(${footerBg})` }}
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="td-footer-5-bottom-content text-center">
                  <p>
                    © 2025 <a
                      href="https://www.tltechnologies.net/"
                      style={{ color: "red" }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      TL TECHNOLOGIES PRIVATE LIMITED
                    </a> All rights reserved.
                  </p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
