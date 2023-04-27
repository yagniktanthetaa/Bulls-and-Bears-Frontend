import React from "react";
import "../Ourteam/Ourteam.css";

import teamBg from "../../../Assets/img/Header/team-bg.png";
import Permabull from "../../../Assets/img/Team/128.png";
import Pablo from "../../../Assets/img/Team/130.png";
import Mohtajj from "../../../Assets/img/Team/134.png";
import Anandi from "../../../Assets/img/Team/151.png";
import Dhruv from "../../../Assets/img/Team/167.png";
import Prashant from "../../../Assets/img/Team/173.png";
import Ravi from "../../../Assets/img/Team/a.png";
import Ruchit from "../../../Assets/img/Team/b.png";
import Vipul from "../../../Assets/img/Team/d.png";
import Shreya from "../../../Assets/img/Team/n.png";

import { Link, useLocation } from "react-router-dom";

import twitter from "../../../Assets/img/Header/twitter.png";
import telegram from "../../../Assets/img/Header/telegram.png";

const Ourteam = () => {
  let loaction = useLocation();
  const profile = [
    {
      profilePic: Permabull,
      name: "Permabull ",
      desgination: "Founder ",
      telegramIcon: twitter,
      twitterIcon: telegram,
      telegramLink: "https://technomadsolutions.com/",
      twitterLink: "",
    },
    {
      profilePic: Pablo,
      name: "Pablo",
      desgination: "Lead NFT Designer",
      telegramIcon: twitter,
      twitterIcon: telegram,
      telegramLink: "",
      twitterLink: "",
    },
    {
      profilePic: Mohtajj,
      name: "Mohtajj ",
      desgination: "Web3",
      telegramIcon: twitter,
      twitterIcon: telegram,
      telegramLink: "",
      twitterLink: "",
    },
    {
      profilePic: Anandi,
      name: "Anandi ",
      desgination: "Business Analyst",
      telegramIcon: twitter,
      twitterIcon: telegram,
      telegramLink: "",
      twitterLink: "",
    },
    {
      profilePic: Dhruv,
      name: "Dhruv D ",
      desgination: "Web3",
      telegramIcon: twitter,
      twitterIcon: telegram,
      telegramLink: "",
      twitterLink: "",
    },

    {
      profilePic: Ravi,
      name: "Ravi G ",
      desgination: "Frontend Developer",
      telegramIcon: twitter,
      twitterIcon: telegram,
      telegramLink: "",
      twitterLink: "",
    },
    {
      profilePic: Ruchit,
      name: "Ruchit L",
      desgination: "Backend Developer",
      telegramIcon: twitter,
      twitterIcon: telegram,
      telegramLink: "",
      twitterLink: "",
    },
    {
      profilePic: Vipul,
      name: "Vipul H",
      desgination: "Backend Developer",
      telegramIcon: twitter,
      twitterIcon: telegram,
      telegramLink: "",
      twitterLink: "",
    },
    {
      profilePic: Shreya,
      name: "Shreya G ",
      desgination: "UI/UX Designer",
      telegramIcon: twitter,
      twitterIcon: telegram,
      telegramLink: "",
      twitterLink: "",
    },
    {
      profilePic: Prashant,
      name: "Prashant ",
      desgination: "Frontend Developer",
      telegramIcon: twitter,
      twitterIcon: telegram,
      telegramLink: "",
      twitterLink: "",
    },
  ];
  return (
    <>
      <section className="ourTeam">
        <div className="container">
          <h2 className="title myx-140-40 text-center">Meet our Team</h2>
          {/* <p className='about-section text-center' data-aos={"fade-down"}>Eget nulla phasellus odio sit porttitor enatibus aliquam blandit gravida ultricies eleifend varius tempor vulputate malesuada tristique.</p> */}
          <>
            <div className="row mt-80   ">
              {profile.map(
                (user, i) =>
                  (i >= 4 && loaction.pathname === "/") || (
                    <div className="col-xl-3 col-sm-6  pb-xl-5 pb-md-5" key={i}>
                      <div className="position-relative text-center frame-position">
                        <img src={teamBg} alt="" className="team-frame" />
                        <div className="about-team">
                          <Link to="/team">
                            <img
                              src={user.profilePic}
                              alt=""
                              className="w-80 "
                            />
                          </Link>
                          <div className="">
                            <h5 className="text-center mt-3 mb-2 ">
                              {user.name}
                            </h5>
                            <h6 className="designation text-center ">
                              {user.desgination}
                            </h6>
                            <div className="team-profile-link mt-2  ">
                              {/* <a href={user.twitterLink}  target="_blank"><img src={user.twitterIcon}  className="scale" alt="" /></a> */}
                              {/* <a href={user.telegramLink} target="_blank" ><img src={user.telegramIcon} className="scale" alt="" /></a> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
              )}
            </div>
            <div className="text-center pt-md-2 pt-3 pb-3 pb-5">
              {loaction.pathname === "/" ? (
                <Link to="/team">
                  <button className="border-btn-bg ml-0 text-center ">
                    <p> More Team </p>
                  </button>
                </Link>
              ) : null}
              {/* <Link to=""> </Link> */}
            </div>
          </>
        </div>
      </section>
    </>
  );
};

export default Ourteam;
