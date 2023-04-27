import React from "react";



import "./Title.css";
const Title = ({ title, subtitle, fullImg, mobileImg }) => {
  return (
    <div className="Title ">
      <div className="container">
        <div className=" ">
          <div className="TitleBg ">
            <div className="d-flex  justify-content-around gap-md-5 ">
              <img src={fullImg} alt="" className="TitleImg" />
              <img src={mobileImg} alt="" className="SingleTitleImg" />

              <div className="TitleSubTitle ">
                <p className="Title">{title}</p>
                <p className="subtitle">{subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Title;
