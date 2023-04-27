import React, { useEffect, useState } from "react";
import "./ConnectWalletNFT.css";
import teamBg from "../../Assets/img/Header/team-bg.png";

import axios from "axios";
import chekerUrl from "../BaseUrl";

const ConnectWalletNFT = () => {
  const account = localStorage.getItem("account");
  const [decodeNFT, setDecodeNFT] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    walletData();
    getBullAndBearData();
    // eslint-disable-next-line
  }, []);

  const walletData = async () => {
    try {
      // const options = {
      //   walletAddress: "rEUp55gxXyi7fGMd7b4FWDsnvcgVeTK5e6",
      // };
      const options = {
        walletAddress: account,
      };
      await chekerUrl
        .post("/bullandbear/walletNFT", options)
        .then(async (res) => {
          let fetchUsersInfoRemote = Promise.all(
            res?.data?.walletNFT?.map(async (d) => {
              try {
                setLoading(true);
                let endpoint = d?.ipfs;
                let response = await axios.get(endpoint);
                setLoading(false);
                return response.data;
              } catch (error) {
                return;
              }
            })
          );
          fetchUsersInfoRemote.then((data) => {
            setDecodeNFT(data);
          });
        })
        .catch((err) => {
          console.log("🚀 ~ .then ~ err:", err);
        });
    } catch (error) {
      console.log("🚀 ~ main ~ error:", error);
    }
  };

  const getBullAndBearData = async () => {
    try {
      // const data = { walletAddress: "r4r2rynTgit7SB52yXen6oxUubXvPuKis4" };
      const data = { walletAddress: account };
      await chekerUrl
        .post("/bullandbear/connectWallet", data)
        .then((res) => {
          console.log("res", res?.data);
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log("🚀 ~ getBullAndBearData ~ error", error);
    }
  };

  return (
    <>
      <section className="ourTeam">
        <div className="container">
          <div style={{ margin: "200px 0px" }}></div>
          <h2 className="sub-title  text-center">Your Bulls & Bears NFTs</h2>
          <h2 className="sub-title mt-2 text-center">
            Total NFTs : {decodeNFT?.length}
          </h2>

          {loading ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "200px 0px",
              }}
            >
              <div className="loader loader2">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          ) : (
            <div className="row mt-80   ">
              {decodeNFT?.map((user, i) => (
                <div className="col-xl-3 col-sm-6  pb-xl-5 pb-md-5" key={i}>
                  <div className="position-relative text-center frame-position">
                    <img src={teamBg} alt="" className="team-frame " />
                    <div className="wallet-team">
                      <img
                        src={user?.image_url?.replace(
                          "ipfs://ipfs/",
                          "https://ipfs.io/ipfs/"
                        )}
                        alt=""
                        loading="lazy"
                        className="w-75 "
                      />
                      <div className="">
                        <h5 className="text-center mt-3 mb-2 ">{user?.name}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ConnectWalletNFT;
