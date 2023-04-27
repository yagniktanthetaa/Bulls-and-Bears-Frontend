/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from "../../../Assets/img/Header/logo_three.png";

import discord from "../../../Assets/img/Header/discord.png"
import twitter from "../../../Assets/img/Header/twitter.png"


import discordHover from "../../../Assets/img/Header/discordHover.png"
import twitterHover from "../../../Assets/img/Header/twitterHover.png"
import "./Footer.css"
const Footer = () => {
  const location = useLocation();
  const { pathname } = location;

  const [Discord, setDiscord] = useState(false)
  const [MediumHover, setMediumHover] = useState(false)
  return (
    <>
      <div className="container">
        <div className=" ">
          <div className="d-flex  justify-content-center  justify-content-sm-between  mobileFooter">
            <div className="footerlogo">
              <Link to="/">
                <img src={logo}></img>
              </Link>
            </div>
            <div className="d-flex gap-xl-4  gap-sm-3 align-items-center gap-2  mobilemenu">
              <div className="nav-link">
                <Link
                  to="/"
                  className={`${
                    pathname === "/" && "homeBoder"
                  } titleFooter`}
                >
                 Home
                </Link>
              </div>
              <div>
                <Link
                  to="/roadmap"
                  className={`${
                    pathname === "/roadmap" && "homeBoder"
                  } titleFooter`}
                >
                  Roadmap
                </Link>
              </div>
              <div>
                <Link
                  to="/team"
                  className={`${
                    pathname === "/team" && "homeBoder"
                  } titleFooter`}
                >
                  Team
                </Link>
              </div>
              <div>
                <Link
                  to="/story"
                  className={`${
                    pathname === "/story" && "homeBoder"
                  } titleFooter`}
                >
                  Story
                </Link>
              </div>
              <div>
                <Link
                  to="/collections"
                  className={`${
                    pathname === "/collections" && "homeBoder"
                  } titleFooter`}
                >
                  Collections
                </Link>
              </div>
              <div>
              <Link
                    to="/passiveincome"
                    className={`${
                      pathname === "/passiveincome" && "homeBoder"
                    } titleFooter`}
                  >
                    Passive Income
                  </Link>
              </div>
              <div>
              <Link
                    to="/passiveincome#AskedQuestion"
                    className={`${
                      pathname === "" && "homeBoder"
                    } titleFooter`}
                  >
                    FAQ
                  </Link>
              </div>
              <div>
                <Link
                  to="/contact"
                  className={`${
                    pathname === "/contact" && "homeBoder"
                  } titleFooter`}
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="d-flex align-items-center gap-2 gap-md-5  gap-sm-3 gootericon">
              <div>
                <a href="https://discord.com/invite/BKptHCWNSG" target="_blank">
                  <img
                    onMouseOver={() => setDiscord(true)}
                    onMouseOut={() => setDiscord(false)}
                    src={Discord ? discordHover : discord}
                    alt=""
                  />
                </a>
              </div>
              <div className="">
                <a href="https://twitter.com/BullsandBearsN1" target="_blank">
                  <img
                    onMouseOver={() => setMediumHover(true)}
                    onMouseOut={() => setMediumHover(false)}
                    src={MediumHover ? twitterHover : twitter}
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
          <div
            // style={{ border: " 0.5px solid #797979" }}
            className="footerline "
          ></div>
          <div className="d-flex justify-content-sm-between justify-content-center copyRight  reverCopy">
            <div className="mobileFooter">
              <p>© 2022 all rights Reserved </p>
            </div>

            <div className=" d-flex  gap-lg-5 gap-4  justify-content-center">
              <Link to="/TermsAndConditions" className=" reverCopy footerTerms">
                Terms & Conditions
              </Link>
              <Link to="/PrivacyPolicy">
                <div className=" footerTerms">Privacy Policy</div>
              </Link>
              {/* <Link to="/">
                {" "}
                <div className=" footerTerms">Cookie Policy</div>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer

