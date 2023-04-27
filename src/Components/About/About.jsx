import React, { useState } from "react";
import aboutFrame from "../../Assets/img/Header/about-frame.png";
import aboutNftOne from "../../Assets/img/Header/about-nft-one.png";
import aboutNftTwo from "../../Assets/img/Header/about-nft-two.png";
import aboutNftThree from "../../Assets/img/Header/about-nft-three.png";
import aboutNftFour from "../../Assets/img/Header/about-nft-four.png";
import whyNft1 from "../../Assets/img/Header/why-nft-one.png";
import whyNft2 from "../../Assets/img/Header/why-nft-two.png";

import Ceo from "../../Assets/img/Header/ceo.png";

import leftarrow from "../../Assets/img/Header/left-arrow-1.png";

import "../About/About.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Title from "../Common/Title/Title";
import CounterupPage from "../Common/CounterUp/CounterUp";
import { Link } from "react-router-dom";
import chekerUrl from "../BaseUrl";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { StyledSlider, Box } from "./Box.styled";

import styled from "styled-components";
import { useEffect } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import SkeletonProduct from "../Common/SkeletonProduct/SkeletonProduct";
import { toast } from "react-toastify";

const About = () => {
  const [loading, setloading] = useState(true);
  const Box = styled.div``;
  const StyledSlider = styled(Slider)``;
  const profile = [
    {
      servic: "Awesome Service!",
      review:
        "Eget nulla phas ellus odio sit poitor enatibus ellus aliquam blandit ultricies eleifend varius putate malesuada tristique dictumst ngilla tempus.",
      userImg: Ceo,
      fouber: "Founder NiFTy",
    },
    {
      servic: "Awesome Service!1",
      review:
        "Eget nulla phas ellus odio sit poitor enatibus ellus aliquam blandit ultricies eleifend varius putate malesuada tristique dictumst ngilla tempus.",
      userImg: Ceo,
      fouber: "Founder NiFTy",
    },
    {
      servic: "Awesome Service!2",
      review:
        "Eget nulla phas ellus odio sit poitor enatibus ellus aliquam blandit ultricies eleifend varius putate malesuada tristique dictumst ngilla tempus.",
      userImg: Ceo,
      fouber: "Founder NiFTy",
    },
    {
      servic: "Awesome Service!3",
      review:
        "Eget nulla phas ellus odio sit poitor enatibus ellus aliquam blandit ultricies eleifend varius putate malesuada tristique dictumst ngilla tempus.",
      userImg: Ceo,
      fouber: "Founder NiFTy",
    },
  ];

  let settings = {
    dots: true,
    speed: 200,
    autoplay: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    className: "sample",
  };

  const [imgData, setimgData] = useState("");
  const [mobileimg, setmobileimg] = useState("");

  const getNFT = async () => {
    try {
      const res = await chekerUrl.post(`/image/about`);
      if (res.data.status) {
        setmobileimg(res.data.data.Moblie.img);
        setimgData(res.data.data.laptop.img);
        setloading(false);
      } else {
      }
    } catch (error) {}
  };
  useEffect(() => {
    getNFT();
  }, []);

  return (
    <>
      {/* {loading ?(  <SkeletonProduct />):(<Title
data-aos="zoom-in"
        title="About Us"
        subtitle="Know us Better  "
        fullImg={`${process.env.REACT_APP_BASE_URL}/img/About.png`}
        mobileImg={`${process.env.REACT_APP_BASE_URL}/img/mabout.png`}
      ></Title>)} */}

      <section className="common-background">
        <div className="container">
          <div className="aboutUs py-140">
            <div className="row ">
              <div className="col-xxl-6  MobileHideenImg">
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
              <div className="col-xxl-6 about-content mt-130-">
                {/* <h2 className="title pt-xl-5 text-center">About Us</h2> */}
                <h3 className="sub-title abouttitle">Why Bulls & Bears NFT?</h3>

                <h3 className="about-section pt-4">
                  Bulls and Bears NFT is a very limited collection of 1,111
                  Bullrun Bulls and 1,111 Bearmarket Bears. The concept of our
                  project has risen from the mindset of a real hodler. We all
                  know that if you compare the results of a day trader with a
                  hodler, over the long run, the hodler will come out of the
                  equation at the positive side much more often.
                </h3>
                <h3 className="about-section pt-4">
                  That’s the reason why the motto exist: “Time in the market
                  almost always beats ‘timing’ the market”
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="common-background">
        <div className="container ">
          <div className="aboutUs ">
            <div className="row align-items-center">
              <div className="col-lg-6 nft-content">
                <h3 className="about-section">
                  On top of our base concept, we want to provide a long term
                  vision for our investors. We are scammed and rug pulled more
                  than we ever could have expected, but that’s unfortunately
                  still the name of crypto investing. People have lost all their
                  investments, life savings, even killed themselves over it…
                  That’s why we wanted to counter this with a true, honest and
                  transparent project. Therefore we created a quite simple
                  method to help small and big investors to earn a passive
                  income by combining the complete investment amount of all
                  investors and converting it into an attractive plan for both
                  of them. All this based on just the investment they made in
                  buying our NFTs.
                </h3>
                <h3 className="about-section pt-4">
                  Therefore we created a quite simple method to help small and
                  big investors to earn a passive income by combining the
                  complete investment amount of all investors and converting it
                  into an attractive plan for both of them. All this based on
                  just the investment they made in buying our NFTs.
                </h3>
              </div>
              <div className="col-lg-6 ">
                <div className="d-lg-block d-flex justify-content-center gap-md-5 flex-wrap">
                  <div className="mobileImg">
                    <img src={whyNft1} alt="" className=" img-fluid " />
                  </div>
                  <div className="text-center mt-80-  mobileImg">
                    <img
                      src={whyNft2}
                      alt=""
                      className="ps-lg-0 ps-md-4 ps-sm-0 pt-md-0 pt-4 img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container"></div>
      </section>
    </>
  );
};

export default About;
