import React, { useEffect, useRef, useState } from "react";
import Title from "../Common/Title/Title";

import teamBg from "../../Assets/img/Collections/Frame.png";

import { toast } from "react-toastify"; //src\Assets\img\Collections\cup.svg

import dropdownarrow from "../../Assets/img/Collections/up.png";
import down from "../../Assets/img/Collections/down.png";
import "./Collections.css";
import { Link } from "react-router-dom";
import chekerUrl from "../BaseUrl";
import Pagination from "rc-pagination";
// import Pagination from "https://cdn.skypack.dev/rc-pagination@3.1.15";
import preview from "../../Assets/img/Header/Preview.png";
import Next from "../../Assets/img/Header/next.png";
import SkeletonProduct from "../Common/SkeletonProduct/SkeletonProduct";

const Collections = () => {
  const [Bull, setBull] = useState(true);
  const [nameNFt, setNameNFt] = useState(""); //single collection
  const [isProfileNft, setIsProfileNft] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [selected, setIsSelected] = useState("Bullrun Bulls #1");

  const [filterdata, setfilterdata] = useState(true);
  const [loading, setloading] = useState(true);
  const [size, setSize] = useState(20);
  const [current, setCurrent] = useState(1);
  const [TopData, setTopData] = useState({});
  const [RarityRankselected, setRarityRankselected] =useState("Rarity Rank : Top");
  const [RankActive, setRankActive] = useState(false);
  const [subData, setsubData] = useState([{}]);
  const [rankData, setrankData] = useState(false);
  const withdraw = useRef();
  const rankbtn = useRef();

  const PaginationChange = (page, pageSize) => {
    setCurrent(page);
    setSize(20);
    scrollToTop()
    // setIsProfileNft(isProfileNft)
    
  };

  const BullBtn = () => {
    setNameNFt("")
    setBull(true);
    setIsActive(!isActive);
    setfilterdata(true);
  };
  const rankNft = async (input) => {
    try {
      // let ans = input === "" ? "1" : input;

      const res = await chekerUrl.post(
        selected === "Bullrun Bulls #1"
          ? "/bullandbear/setRank"
          : "/bullandbear/setRank2"
      );

      if (res.data.status) {
        setsubData(res.data.data.Properties);
      }
    } catch (error) {}
  };
  const Collections = (data) => {
    setIsSelected(data);
    setIsActive(!isActive);
    setloading(true);
    getNFT(`${nameNFt}`, data);

    setRarityRankselected("Rarity Rank : Top");
  };
  const getNFT = async (input, select) => {
    try {
      // let ans = input === "" ? "1" : input;
      const res = await chekerUrl.post(
        select === "Bullrun Bulls #2"
          ? "/bullandbear/newCollection3"
          : "/bullandbear/newCollection1"
      );
      if (res.data.status) {
        setloading(false);
        setIsProfileNft(res.data.data);
       
        rankNft();
      } else {
        toast.error("NFT not found");
      }
    } catch (error) {}
  };

  const RenkBtn = (data) => {
    //
    // setTopData(true)
    setRankActive(data);
    setfilterdata(false);
  };
  const RankMenu = (data) => {
    setrankData(true);

    setBull(false);
    setRankActive(false);

    setRarityRankselected(data);
    rankNFTApi(data);
  };

  const rankNFTApi = async (data) => {
    if (selected === "Bullrun Bulls #1") {
      try {
        // let ans = input === "" ? "1" : input;
        const res = await chekerUrl.post(
          data === "Rarity Rank : Top"
            ? "/bullandbear/accRank"
            : "/bullandbear/decRank"
        );

        // console.log(res.data.data.Properties.name );
        if (res.data.status) {
          setTopData(res.data.data.Properties);

          setloading(false);
        } else {
          toast.error("NFT not found");
        }
      } catch (error) {}
    } else {
      if (selected === "Bullrun Bulls #2") {
        try {
          const res = await chekerUrl.post(
            data === "Rarity Rank : Top"
              ? "/bullandbear/accRank2"
              : "/bullandbear/decRank2"
          );

          // console.log(res.data.data.Properties );
          if (res.data.status) {
            setTopData(res.data.data.Properties);

            setloading(false);
          } else {
            toast.error("NFT not found");
          }
        } catch (error) {}
      }
    }
  };

  const InputChange = async (event) => {
    setNameNFt(event.target.value);

    getNFTSer(`#${event.target.value}`, selected);

    // setBull(false);
  };
  //net search function
  const getNFTSer = async (input, select, event) => {
    try {
      let ans = input === "" ? "1" : input;
      let intData = ans === "0" ? toast.error("NFT not found") : ans;

      const res = await chekerUrl.post(
        select === "Bullrun Bulls #2"
          ? "/bullandbear/newCollection3"
          : "/bullandbear/newCollection1",

        {
          name: intData,
        }
      );

      if (res.data.status) {
        const results = res.data.data.filter((d) => d.name.startsWith(intData));

        if (ans <= results) {
          setIsProfileNft(results);
        } else {
          toast.error("NFT not found");
        }
      } else {
      }
    } catch (error) {}
  };
  // paggnation
  let user = (current, pageSize) => {
    return isProfileNft.slice((current - 1) * pageSize, current * pageSize);
  };
  let rank = (current, pageSize) => {
    return isProfileNft.slice((current - 1) * pageSize, current * pageSize);
  };
  const PrevNextArrow = (current, type, originalElement) => {
    if (type === "prev") {
      return (
        <button>
          <img src={preview}></img>
        </button>
      );
    }
    if (type === "next") {
      return (
        <button>
          <img src={Next}></img>
        </button>
      );
    }
    return originalElement;
  };

  function storeLocal(dropMenu) {
    localStorage.setItem("dropMenu", dropMenu);
  }

  useEffect(() => {
    getNFT();
  }, []);

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
  }, [isActive, RankActive]);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (rankbtn.current && !rankbtn.current.contains(e.target)) {
        setRankActive(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [RankActive]);


  const [imgData, setimgData] = useState("")
  const [mobileimg, setmobileimg] = useState("")
  const [imgloading, setimgloading] = useState(true);
    const getNFTimg = async () => {
      try {
        
        const res = await chekerUrl.post(`/image/collection`);
        if (res.data.status) {
          setmobileimg(res.data.data.Moblie.img);
          setimgData(res.data.data.laptop.img);
          setimgloading(false);
          
        } else {
          
        }
      } catch (error) {}
    };
 
    useEffect(() => {
      getNFTimg()
    }, [])
    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
  }
  return (
    <div>
       {loading ?(  <SkeletonProduct />):(<Title
        data-aos="zoom-in"
        title="Collections"
        // subtitle="Walkthrough the history with us "
        fullImg={`${process.env.REACT_APP_BASE_URL}/img/Collection.png`}
        mobileImg={`${process.env.REACT_APP_BASE_URL}/img/mCollection.png`}
      ></Title>)}
      
      <div className="container myx-140-40">
        <div className="collectionTitle">Our NFT Collections</div>
        <div className="d-flex flex-wrap justify-content-center gap-5 BtnCollections">
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
                  onClick={() => {
                    Collections("Bullrun Bulls #1");
                  }}
                  className="item"
                >
                  Bullrun Bulls #1
                </div>
               
                <div
                  className="item"
                  onClick={() => {
                    Collections("Bullrun Bulls #2");
                  }}
                >
                  Bullrun Bulls #2
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
          {/* <div className="nft-dropdown" ref={rankbtn}>
            <div className="dropdown">
              <div
                onClick={RenkBtn}
                className=" d-flex align-items-center justify-content-between p-2 items-center"
              >
                {RarityRankselected}

                {RankActive ? (
                  <img src={dropdownarrow} alt="" />
                ) : (
                  <img src={down} alt="" />
                )}
              </div>
              <div
                className=""
                style={{ display: RankActive ? "block" : "none" }}
              >
                <div
                  onClick={() => RankMenu("Rarity Rank : Top")}
                  className="item"
                >
                  Rarity Rank : Top
                </div>

                <div
                  className="item"
                  onClick={() => RankMenu("Rarity Rank : Bottom")}
                >
                  Rarity Rank : Bottom
                </div>
              </div>
            </div>
          </div> */}
        </div>

        {filterdata ? (
          <>
            {loading ? (
              <div className="loading-spinner-collection"></div>
            ) : (
              <>
                {Bull ? (
                  <div className="row mt-80">
                    {user(current, size).map((ntf, i) => (
                      <div
                        className="col-xl-3 col-sm-6"
                        key={i}
                        style={{ padding: 20 }}
                      >
                        <div className="position-relative text-center frame-position">
                          <img
                            src={teamBg}
                            alt=""
                            className="collection-frame"
                          />
                          <div className="about-collection">
                            {selected === "Bullrun Bulls #1" ? (
                              <Link
                                to={`/raritychecker${ntf.name} `}
                                onClick={() => storeLocal(selected)}
                              >
                                {" "}
                                <img
                                  src={ntf.url}
                                  alt=""
                                  className="collection-80"
                                />
                                <div className="d-flex justify-content-center gap-5">
                                  <p className="collImgSub">
                                    {selected === "Bullrun Bulls #2"
                                      ? ` Name: ${ntf.name}S`
                                      : ` Name: ${ntf.name}`}
                                  </p>
                                 
                                </div>
                              </Link>
                            ) : (
                              <Link
                                to={`/raritychecker${ntf.name}`}
                                onClick={() => storeLocal(selected)}
                              >
                                <img
                                  src={ntf.url}
                                  alt=""
                                  className="collection-80"
                                />

                                <div className="d-flex justify-content-center gap-5">
                                  <p className="collImgSub">
                                    {selected === "Bullrun Bulls #2"
                                      ? ` Name: ${ntf.name}S`
                                      : ` Name: ${ntf.name}`}
                                  </p>
                                 
                                </div>
                              </Link>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className="table-filter-info">
                      <Pagination
                        defaultPageSize="20"
                        className="pagination-data"
                        onChange={PaginationChange}
                        total={isProfileNft.length}
                        current={current}
                        showSizeChanger={false}
                        itemRender={PrevNextArrow}
                      />
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </>
            )}
          </>
        ) : (
          <>
            {/* {loading ? (
              <div className="loading-spinner-collection"></div>
            ) : (
              <>
                {rankData ? (
                  <div className="row mt-80">
                    {rank(current, size).map((ntf, i) => (
                      <div
                        className="col-xl-3 col-sm-6"
                        key={i}
                        style={{ padding: 20 }}
                      >
                        <div className="position-relative text-center frame-position">
                          <img
                            src={teamBg}
                            alt=""
                            className="collection-frame"
                          />
                          <div className="about-collection">
                            {selected === "Bullrun Bulls #1" ? (
                              <Link
                                to={`/raritychecker${TopData[i]?.name}`}
                                // onClick={() => storeLocal(RarityRankselected)}
                              >
                                {" "}
                                <img
                                  src={TopData[i]?.img}
                                  alt=""
                                  className="collection-80"
                                />
                                <div className="d-flex justify-content-center gap-5">
                                  <p className="collImgSub">
                                    {selected === "Rarity Rank : Top"
                                      ? ` Name: ${TopData[i]?.name}S`
                                      : ` Name: ${TopData[i]?.name}`}
                                  </p>
                                  <p className="collImgSub">
                                    {RarityRankselected ===
                                    "Rarity Rank : Top" ? (
                                      <>
                                        <div>
                                          <i className="fas fa-trophy "></i>
                                          {` ${TopData && TopData[i]?.rank}`}
                                        </div>
                                      </>
                                    ) : (
                                      <div>
                                        <i className="fas fa-trophy "></i>{" "}
                                        {` ${TopData && TopData[i]?.rank}`}
                                      </div>
                                    )}
                                  </p>
                                </div>
                              </Link>
                            ) : (
                              <Link
                                to={`/raritychecker${TopData[i]?.name}`}
                                // onClick={() => storeLocal(RarityRankselected)}
                              >
                                <img
                                  src={TopData[i]?.img}
                                  alt=""
                                  className="collection-80"
                                />

                                <div className="d-flex justify-content-center gap-5">
                                  <p className="collImgSub">
                                    {selected === "Bullrun Bulls #1"
                                      ? ` Name: ${TopData[i]?.name}`
                                      : ` Name: ${TopData[i]?.name}S`}
                                  </p>
                                  <p className="collImgSub">
                                    {RarityRankselected ===
                                    "Rarity Rank : Top" ? (
                                      <>
                                        <div>
                                          <i className="fas fa-trophy"></i>
                                          {` ${TopData && TopData[i]?.rank}`}
                                        </div>
                                      </>
                                    ) : (
                                      <div>
                                        <i className="fas fa-trophy"></i>
                                        {` ${TopData && TopData[i]?.rank}`}
                                      </div>
                                    )}
                                  </p>
                                </div>
                              </Link>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className="table-filter-info">
                      <Pagination
                        defaultPageSize="20"
                        className="pagination-data"
                        onChange={PaginationChange}
                        total={isProfileNft.length}
                        current={current}
                        showSizeChanger={false}
                        itemRender={PrevNextArrow}
                      />
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </>
            )} */}
          </>
        )}
      </div>
    </div>
  );
};

export default Collections;
