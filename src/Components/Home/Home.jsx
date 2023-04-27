/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "../Home/Home.css";
import centerFrame from "../../Assets/img/Header/center-frame.png";

import cimage from "../../Assets/img/hOME/1.svg"
import cimage1 from "../../Assets/img/hOME/2.svg"
import cimage2 from "../../Assets/img/hOME/3.svg"
import cimage3 from "../../Assets/img/hOME/4.svg"
import cimage4 from "../../Assets/img/hOME/5.svg"
import cimage5 from "../../Assets/img/hOME/6.svg"
import cimage6 from "../../Assets/img/hOME/7.svg"
import cimage7 from "../../Assets/img/hOME/8.svg"
import cimage8 from "../../Assets/img/hOME/9.svg"
import cimage9 from "../../Assets/img/hOME/10.svg"
import cimage10 from "../../Assets/img/hOME/11.svg"
import cimage11 from "../../Assets/img/hOME/12.svg"
import cimage12 from "../../Assets/img/hOME/13.svg"
import cimage13 from "../../Assets/img/hOME/14.svg"


import cimage14 from "../../Assets/img/hOME/15.svg";

import { Link, } from "react-router-dom";


import About from "../About/About";





const Home = () => {

  
 
  const nftcoll=[
{"name":"#1"}
  ]
  

  function storeLocal() {
    localStorage.setItem("dropMenu", "Bullrun Bulls #1");
  }
  return (
    <>
      <section>
        <div className="home position-relative">
          <div className="container">
            <h2 className="title myx-140-40 text-center">Bulls & Bears NFT</h2>
            <div className="d-flex flex-wrap justify-content-center btnHome ">
              <a
                href="https://sologenic.org/profile/bulls_and_bears_nft?network=mainnet"
                target="_blank"
                className="btnlink" rel="noreferrer"
              >
                <button className="border-btn-bg ">
                  <p> View on Sologenic </p>
                </button>
              </a>
              <a
                href="https://docs.bullsandbears.site"
                target="_blank"
                className="btnlink"
              >
                <button className="border-btn-bg ">
                  <p> WhitePaper </p>
                </button>
              </a>
              {(nftcoll.map((ntf, i) => (
              <Link
              onClick={storeLocal}
              key={i}
                to={`raritychecker${ntf.name}`}
                // to={`/raritychecker`}
                href="https://whitepaper-bull-and-bear.netlify.app/"
                className="btnlink"
              >
                <button className="border-btn-bg ">
                  <p> Rarity Checker </p>
                </button>
              </Link>
              )))}
            </div>
            <div className="d-flex bulls-frame align-items-center justify-content-center">
              <div className="position-relative">
                <img src={centerFrame} alt="" className="left-frame" />
                <div className="inside-images">
                  <img src={cimage} alt="" className="left-inside-image" />
                  <img src={cimage1} alt="" className="left-inside-image" />
                  <img src={cimage2} alt="" className="left-inside-image" />
                  <img src={cimage3} alt="" className="left-inside-image" />
                  <img src={cimage4} alt="" className="left-inside-image" />
                </div>
              </div>
              <div className="position-relative">
                <img src={centerFrame} alt="" className="mx-5 center-frame" />
                <div className="inside-images inside-images1">
                  <img src={cimage5} alt="" className="center-inside-image" />
                  <img src={cimage6} alt="" className="center-inside-image" />
                  <img src={cimage7} alt="" className="center-inside-image" />
                  <img src={cimage8} alt="" className="center-inside-image" />
                  <img src={cimage9} alt="" className="center-inside-image" />
                </div>
              </div>
              <div className="position-relative">
                <img src={centerFrame} alt="" className="right-frame" />
                <div className="inside-images">
                  <img src={cimage10} alt="" className="right-inside-image" />
                  <img src={cimage11} alt="" className="right-inside-image" />
                  <img src={cimage12} alt="" className="right-inside-image" />
                  <img src={cimage13} alt="" className="right-inside-image" />
                  <img src={cimage14} alt="" className="right-inside-image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="common-background">
        <About/>
        {/* <div className="container">
          <div className="aboutUs py-140">
            <div className="row ">
              <div className="col-xxl-6 ">
                <div className="d-flex justify-content-xxl-start justify-content-center">
                  <div className="about-frame position-relative">
                    <img src={aboutFrame} alt="" className="zoom" />
                    <div>
                      <img
                        src={aboutNftOne}
                        alt=""
                        className="about-inside-image zoom"
                      />
                    </div>
                  </div>
                  <div className="about-frame mt-130- position-relative">
                    <img src={aboutFrame} alt="" className="zoom" />
                    <div>
                      <img
                        src={aboutNftTwo}
                        alt=""
                        className="about-inside-image  zoom"
                      />
                    </div>
                  </div>
                </div>

                <div className="d-flex justify-content-xxl-start justify-content-center ml-130 mt-md-0 mt-4">
                  <div className="about-frame position-relative">
                    <img src={aboutFrame} alt="" className="zoom" />
                    <div>
                      <img
                        src={aboutNftThree}
                        alt=""
                        className="about-inside-image zoom"
                      />
                    </div>
                  </div>
                  <div className="about-frame mt-130- position-relative">
                    <img src={aboutFrame} alt="" className="zoom" />
                    <div>
                      <img
                        src={aboutNftFour}
                        alt=""
                        className="about-inside-image  zoom"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 pt-xl-5 about-content mt-130-">
                <h2 className="title pt-xl-5 text-center">About Us</h2>
               
                <h3 className="about-section pt-4">
                  Bulls and Bears NFT is a very limited collection of 1,111
                  Bullrun Bulls and 1,111 Bearmarket Bears. The concept of our
                  project has risen from the mindset of a real hodler. We all
                  know that if you compare the results of a day trader with a
                  hodler, over the long run, the hodler will come out of the
                  equation at the positive side much more often.
                </h3>
                <h3 className="about-section pt-4">
                That’s the reason why the motto exist: “Time in the market almost always beats ‘timing’ the market”
                </h3>
                <div className="text-lg-start text-center">
                  <button className="border-btn-bg ">
                    <Link to="/about">
                      <p> More About Us </p>
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>

      {/* <CounterupPage /> */}

      {/* <section>
        <Timeline />
      </section>

      <section>
        <Ourteam />
      </section> */}
     
     

      {/* <section>
        <div className="container">
          <h2 className="title myx-140-40   text-center">Collection</h2>
          <div className="d-flex gap-2  gap-md-5 flex-wrap justify-content-center mt-80 text-center">
            {Profile.map((ntf, i) => (
              <div className="" key={i}>
                <div className="position-relative text-center frame-position">
                  <img src={teamBg} alt="" className="collection-frame" />
                  <div className="about-collection">
                    <Link to={`/collections`}>
                      <img
                        src={ntf.profilePic}
                        alt=""
                        className="collection-80"
                      />
                    </Link>
                    <p className="collImgSub">{ntf.id}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center pt-md-5 pt-2">
          <Link to="/collections">
            <button className="border-btn-bg ">
              <p>See All Collection </p>
            </button>
          </Link>
        </div>
      </section> */}
    </>
  );
};

export default Home;
