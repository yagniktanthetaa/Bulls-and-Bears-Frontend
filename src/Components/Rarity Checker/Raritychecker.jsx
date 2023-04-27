import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";
import teamBg from "../../Assets/img/Title/checkerBg.svg";

import "./Raritychecker.css";
import dropdownarrow from "../../Assets/img/Collections/up.png";
import down from "../../Assets/img/Collections/down.png";
import chekerUrl from "../BaseUrl";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";
const Raritychecker = () => {
  const [nameNFt, setNameNFt] = useState("");
  const [Data, setData] = useState("");
  const [subData, setsubData] = useState([{}]);
  const [Img, setImg] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [selected, setIsSelected] = useState(localStorage.getItem("dropMenu"));

  const location = useLocation();
  const {  hash,  } = location;
  const [activeTab, setactiveTab] = useState();
  const splitLocation = hash.split("#"); //.split('%20').join(" ")

  const [demo, setdemo] = useState(splitLocation[1]);
  
  const [singleRank, setsingleRank] = useState([{}])
  const [score, setscore] = useState([{}])
  

  const collctonChecker = async () => {
    let ans = demo === "" ? "" : demo;
    if (!activeTab) {
      try {
        const res = await chekerUrl.post(
          selected === "Bullrun Bulls #2"
            ? `/bullandbear/collection3`
            : `/bullandbear/collection1&2`,
          {
            name: ans,
          }
        );
        if (res.data.status) {
          setData(res.data.data.nftName);
          setImg(res.data.data.Url);

          setsubData(res.data.data.Properties);
        } else {
          toast.error("NFT not found");
        }
      } catch (error) {}
    } else {
    }
  };



  const rankNft = async (input, select) => {
   
    let ans = demo === "" ? "" : demo;
  
    try {
      // let ans = input === "" ? "1" : input;
      const res = await chekerUrl.post(
        selected === "Bullrun Bulls #2"
          ? "/bullandbear/setRank2"
          : "/bullandbear/setRank",
         
      );

      if (res.data.status) {
        setscore(res.data.data.Properties[ans].rank,);
   
        setsingleRank(res.data.data.Properties[ans].score);
       
      }
    
    } catch (error) {}
  };
  const Collections = (data) => {
    setNameNFt("");
    // setsubData("")
    setIsSelected(data);
    setIsActive(!isActive);
    collctonChecker(`${nameNFt}`, data)
   
  };
  const BullBtn = () => {
    setIsActive(!isActive);
    
  };

  const InputChange = async (event) => {
    setNameNFt(event.target.value);
    getNFT(`${event.target.value}`, selected);
    rankNfts(`${event.target.value}`, selected)
  };

  const getNFT = async (input, select) => {
    try {
      let ans = input === "" ? "1" : input;
     
      const res = await chekerUrl.post(
        select === "Bullrun Bulls #2"
          ? "/bullandbear/collection3"
          : "/bullandbear/collection1&2",

        {
          name: ans,
        }
      );
      if (res.data.status) {
       
        setData(res.data.data.nftName);
        setImg(res.data.data.Url);
        setsubData(res.data.data.Properties);
        
      } else {
        toast.error("NFT not found");
      }
    } catch (error) {}
  };
  const rankNfts = async (input, select) => {
   
    let ans = input === "" ? "1" : input;
  
    try {
      // let ans = input === "" ? "1" : input;
      const res = await chekerUrl.post(
        selected === "Bullrun Bulls #2"
          ? "/bullandbear/Rank2"
          : "/bullandbear/Rank1",
          {
            name: ans,
          }
      );

      if (res.data.status) {
        setscore(res.data.data.Properties[input-1].rank,);
   
        setsingleRank(res.data.data.Properties[input-1].score);
       
      }
    
    } catch (error) {}
  };

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
}
  useEffect(() => {
    collctonChecker();
    rankNft()
    scrollToTop()
  }, []);

  const withdraw = useRef();
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
    
      if (withdraw.current && !withdraw.current.contains(e.target)) {
        setIsActive(false);
       
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isActive]);


   
  return (
    <>
      <section className="ourTeam">
        <div className="container">
          <h2 className="title myx-160-40 text-center">Rarity Checker</h2>

          <div className="d-flex justify-content-center flex-wrap gap-3">
            <div>
              <div className="nft-dropdown" ref={withdraw}>
                <div className="dropdown">
                  <div
                    onClick={BullBtn}
                    className=" d-flex align-items-center justify-content-between  gap-5 p-2 items-center"
                  >
                    {selected}

                    {isActive ? (
                      <img src={dropdownarrow} alt="" />
                    ) : (
                      <img src={down} alt="" />
                    )}
                  </div>
                  <div
                    className=""
                    style={{ display: isActive ? "block" : "none" }}
                  >
                    <div
                      onClick={() => Collections("Bullrun Bulls #1")}
                      className="item"
                    >
                      Bullrun Bulls #1
                    </div>
                    <div
                      className="item"
                      onClick={() => Collections("Bullrun Bulls #2")}
                    >
                      Bullrun Bulls #2
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <form className="">
                <div className="d-flex justify-content-center">
                  <div className="row">
                    <div className="position-relative ">
                      <input
                        type="search"
                        // placeholder={`${selected} ?"Search form 1 To 611":""`}
                        placeholder={
                          selected === "Bullrun Bulls #1"
                            ? `Search form 1 to 611`
                            : `Search form 1 to 500`
                        }
                        className="form-control formInputcollect"
                        aria-describedby="passwordHelpInline"
                        onChange={InputChange}
                        onKeyPress={(e) => {
                          e.key === "Enter" && e.preventDefault();
                        }}
                        value={nameNFt}
                      />

                      <i className="fas fa-search Icon"></i>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="row mt-80 mobilePadd">
            <div
              className="col-xl-6 col-lg-12 col-sm-12 "
              style={{ paddingTop: "35px" }}
            >
              <div className="position-relative text-center frame-position">
                <img src={teamBg} alt="" className="checker-frame" />
                <div className="checker-team ">
                  <img src={`${Img}`} alt="" className="checker-80" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12 col-md-12 ">
              <div className="checkerDataTitle text-center text-xl-start pt-sm-5 pt-5">
                {selected === "Bullrun Bulls #1"
                  ? `Bullrun Bulls #1`
                  : `Bullrun Bulls #2`}
              </div>
              <div className="numberNtf pt-3 text-center text-xl-start">
                <div className="d-flex justify-content-start">
                  
              <p > {selected === "Bullrun Bulls #1" ? `NFT : ${Data}` : `NFT : ${Data}S`}</p>
             {/* <p> {selected === "Bullrun Bulls #1" ? ` Score: ${singleRank}` : ` Score : ${singleRank}`}</p>
             <p> {selected === "Bullrun Bulls #1" ? ` Rank : ${score}` : ` Rank: ${score}`}</p> */}
                </div>

              </div>
              <div className="d-flex gap-3 justify-content-sm-center justify-content-xl-start pt-3 flex-wrap justify-content-center">
                {subData && subData[0]?.trait_type && (
                  <div className="nftborder">
                    <div className="text-center">
                      <p className="bgcolorNtf pt-2">
                        {/* {singlesubnft[0]?.trait_type} */}
                        {subData && subData[0]?.trait_type}
                      </p>
                      <p className="colorcode pt-2">
                        {subData && subData[0]?.value}
                      </p>
                      <p className="pt-2  perTrait text-center">
                        {subData && subData[0]?.Percentage} 
                      </p>
                    </div>
                  </div>
                )}
                {subData && subData[1]?.trait_type && (
                  <div className="nftborder">
                    <div className="text-center">
                      <p className="bgcolorNtf pt-2">
                        {/* {singlesubnft[0]?.trait_type} */}
                        {subData && subData[1]?.trait_type}
                      </p>
                      <p className="colorcode pt-2">
                        {subData && subData[1]?.value}
                      </p>
                      <p className="pt-2  perTrait text-center">
                        {subData && subData[1]?.Percentage} 
                      </p>
                    </div>
                  </div>
                )}
                {subData && subData[2]?.trait_type && (
                  <div className="nftborder">
                    <div className="text-center">
                      <p className="bgcolorNtf pt-2">
                        {/* {singlesubnft[0]?.trait_type} */}
                        {subData && subData[2]?.trait_type}
                      </p>
                      <p className="colorcode pt-2">
                        {subData && subData[2]?.value}
                      </p>
                      <p className="pt-2  perTrait text-center">
                        {subData && subData[2]?.Percentage} 
                      </p>
                    </div>
                  </div>
                )}
                {/*  */}
                {subData && subData[3]?.trait_type && (
                  <div className="nftborder">
                    <div className="text-center">
                      <p className="bgcolorNtf pt-2">
                        {/* {singlesubnft[0]?.trait_type} */}
                        {subData && subData[3]?.trait_type}
                      </p>
                      <p className="colorcode pt-2">
                        {subData && subData[3]?.value}
                      </p>
                      <p className="pt-2  perTrait text-center">
                        {subData && subData[3]?.Percentage} 
                      </p>
                    </div>
                  </div>
                )}
                {subData && subData[4]?.trait_type && (
                  <div className="nftborder">
                    <div className="text-center">
                      <p className="bgcolorNtf pt-2">
                        {/* {singlesubnft[0]?.trait_type} */}
                        {subData && subData[4]?.trait_type}
                      </p>
                      <p className="colorcode pt-2">
                        {subData && subData[4]?.value}
                      </p>
                      <p className="pt-2  perTrait text-center">
                        {subData && subData[4]?.Percentage} 
                      </p>
                    </div>
                  </div>
                )}
                {subData && subData[5]?.trait_type && (
                  <div className="nftborder">
                    <div className="text-center">
                      <p className="bgcolorNtf pt-2">
                        {/* {singlesubnft[0]?.trait_type} */}
                        {subData && subData[5]?.trait_type}
                      </p>
                      <p className="colorcode pt-2">
                        {subData && subData[5]?.value}
                      </p>
                      <p className="pt-2  perTrait text-center">
                        {subData && subData[5]?.Percentage} 
                      </p>
                    </div>
                  </div>
                )}
                {/*  */}
                {subData && subData[6]?.trait_type && (
                  <div className="nftborder">
                    <div className="text-center">
                      <p className="bgcolorNtf pt-2">
                        {/* {singlesubnft[0]?.trait_type} */}
                        {subData && subData[6]?.trait_type}
                      </p>
                      <p className="colorcode pt-2">
                        {subData && subData[6]?.value}
                      </p>
                      <p className="pt-2  perTrait text-center">
                        {subData && subData[6]?.Percentage} 
                      </p>
                    </div>
                  </div>
                )}
                {subData && subData[7]?.trait_type &&(
                  <div className="nftborder">
                    <div className="text-center">
                      <p className="bgcolorNtf pt-2">
                        {/* {singlesubnft[0]?.trait_type} */}
                        {subData && subData[7]?.trait_type}
                      </p>
                      <p className="colorcode pt-2">
                        {subData && subData[7]?.value}
                      </p>
                      <p className="pt-2  perTrait text-center">
                        {subData && subData[7]?.Percentage} 
                      </p>
                    </div>
                  </div>
                )}
                {subData && subData[8]?.trait_type && (
                  <div className="nftborder">
                    <div className="text-center">
                      <p className="bgcolorNtf pt-2">
                        {/* {singlesubnft[0]?.trait_type} */}
                        {subData && subData[8]?.trait_type}
                      </p>
                      <p className="colorcode pt-2">
                        {subData && subData[8]?.value}
                      </p>
                      <p className="pt-2  perTrait text-center">
                        {subData && subData[8]?.Percentage} 
                      </p>
                    </div>
                  </div>
                )}
                {subData && subData[9]?.trait_type && (
                  <div className="nftborder">
                    <div className="text-center">
                      <p className="bgcolorNtf pt-2">
                        {/* {singlesubnft[0]?.trait_type} */}
                        {subData && subData[9]?.trait_type}
                      </p>
                      <p className="colorcode pt-2">
                        {subData && subData[9]?.value}
                      </p>
                      <p className="pt-2  perTrait text-center">
                        {subData && subData[9]?.Percentage} 
                      </p>
                    </div>
                  </div>
                )}
                {subData && subData[10]?.trait_type   && (
                  <div className="nftborder">
                    <div className="text-center">
                      <p className="bgcolorNtf pt-2">
                        {/* {singlesubnft[0]?.trait_type} */}
                        {subData && subData[10]?.trait_type}
                      </p>
                      <p className="colorcode pt-2">
                        {subData && subData[10]?.value}
                      </p>
                      <p className="pt-2  perTrait text-center">
                        {subData && subData[10]?.Percentage} 
                      </p>
                    </div>
                  </div>
                )}
                {subData && subData[11]?.trait_type   && (
                  <div className="nftborder">
                    <div className="text-center">
                      <p className="bgcolorNtf pt-2">
                        {/* {singlesubnft[0]?.trait_type} */}
                        {subData && subData[11]?.trait_type}
                      </p>
                      <p className="colorcode pt-2">
                        {subData && subData[11]?.value}
                      </p>
                      <p className="pt-2  perTrait text-center">
                        {subData && subData[11]?.Percentage} 
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Raritychecker;