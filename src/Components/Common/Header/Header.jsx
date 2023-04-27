/* eslint-disable no-loop-func */
import React, { useState } from "react";
import "./Header.css"; // css
import logo from "../../../Assets/img/Header/logo_three.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { toast } from "react-toastify";
import chekerUrl from "../../BaseUrl";
const REACT_APP_WALLET_URL = process.env.REACT_APP_WALLET_URL;

const Header = () => {
  const location = useLocation();
  const { pathname } = location;
  const navigate = useNavigate();
  // const splitLocation = pathname.split("/");
  // const hash = pathname.split("/#");
  // console.log(window.location.pathname,"pathname");
  // const [activeTab, setactiveTab] = useState(splitLocation);
  const [open, setOpen] = useState(false);
  const [loading, setloading] = useState(true);
  // const [Discord, setDiscord] = useState(false);
  // const [MediumHover, setMediumHover] = useState(false);
  const onChange = (e) => {
    const { checked } = e.target;

    setOpen(checked);
  };

  const [payload, setPayLoad] = useState(null);
  const [socketUrl, setSocketUrl] = useState(null);
  const { lastMessage, readyState } = useWebSocket(socketUrl, { share: true });
  const [account, setAccount] = useState("");
  const [log, setLog] = useState(null);
  const [accId, setaccId] = useState("");
  const [model, setmodel] = useState(false);
  const [type, setType] = useState(true);

  const connectionStatus = {
    [ReadyState.CONNECTING]: "Connecting",
    [ReadyState.OPEN]: "Open",
    [ReadyState.CLOSING]: "Closing",
    [ReadyState.CLOSED]: "Closed",
    [ReadyState.UNINSTANTIATED]: "Uninstantiated",
  }[readyState];

  const onConnect = async () => {
    setmodel(true);

    const res = await axios.post(`${REACT_APP_WALLET_URL}/login`);
    if (res.status === 200) {
      console.log("🚀 ~ onConnect ~ res:", res?.data?.data);
      setLog(res.data.status ? "connect success" : "connect failed");
      setPayLoad(res?.data);
      setSocketUrl(res.data.data.wsUrl);
      // console.log(res.data);
      getAccountStatus();
      setloading(false);
    } else setLog("connect failed");
    if (account) {
      await getAccountStatus();
      toast.error("Account not found");
    }
  };

  // console.log(type,"type");

  const onDisconnect = async () => {
    window.location.reload();
    setAccount("");
    setPayLoad(null);
    setType(false);
    navigate("/home");
  };

  // console.log("Acc_Data",account);
  const getAccountStatus = async () => {
    const res = await axios.get(
      `${REACT_APP_WALLET_URL}/payload/${payload?.data?.uuid}`
    );

    // let  Acc_Data=res.data.data.account
    // console.log(Acc_Data)
    setAccount(res.data.account);
    if (res.data.account) {
      navigate("/nft");
    }

    // console.log("res", res.data.account);
    if (res.status === true) {
      if (res?.data?.data?.response?.account === "") {
        setmodel(false);
      }
    } else {
    }
  };

  if (account) {
    localStorage.setItem("account", account);
  } else {
    localStorage.removeItem("account");
  }

  useEffect(() => {
    if (account) {
      setmodel(false);
    }
    if (lastMessage && type) {
      getAccountStatus();
    }
  }, [account, lastMessage, type]);

  return (
    <>
      <div className="position-fixed w-100 headers">
        <nav id="navbar">
          <div className="container  ">
            <header className="main-header  ">
              <div className="logo border-gr">
                <Link to="/">
                  <img src={logo} alt="" className="loader-logo" />
                </Link>
                <div>
                  <p className="animated-border mt-2"></p>
                </div>
              </div>
              <input
                type="checkbox"
                checked={open}
                onChange={onChange}
                className="menu-btn"
                id="menu-btn"
              />

              <ul className="nav-links" onClick={() => setOpen(false)}>
                <li className="nav-link">
                  <Link
                    to="/"
                    className={`${pathname === "/" && "homeBoder"} titleHeader`}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-link">
                  <Link
                    to="/roadmap"
                    className={`${
                      pathname === "/roadmap" && "homeBoder"
                    } titleHeader`}
                  >
                    Roadmap
                  </Link>
                </li>
                <li className="nav-link">
                  <Link
                    to="/team"
                    className={`${
                      pathname === "/team" && "homeBoder"
                    } titleHeader`}
                  >
                    Team
                  </Link>
                </li>
                <li className="nav-link">
                  <Link
                    to="/story"
                    className={`${
                      pathname === "/story" && "homeBoder"
                    } titleHeader`}
                  >
                    Story
                  </Link>
                </li>
                <li className="nav-link">
                  <Link
                    to="/collections"
                    className={`${
                      pathname === "/collections" && "homeBoder"
                    } titleHeader`}
                  >
                    Collections
                  </Link>
                </li>
                <li className="nav-link">
                  <Link
                    to="/passiveincome"
                    className={`${
                      pathname === "/passiveincome" && "homeBoder"
                    } titleHeader`}
                  >
                    Passive Income
                  </Link>
                </li>

                <li className="nav-link">
                  <Link
                    to="/passiveincome#AskedQuestion"
                    className={`${
                      pathname === "/passiveincome#AskedQuestion" && "homeBoder"
                    } titleHeader`}
                  >
                    FAQ
                  </Link>
                </li>

                <li className="nav-link">
                  <Link
                    to="/contact"
                    className={`${
                      pathname === "/contact" && "homeBoder"
                    } titleHeader`}
                  >
                    Contact
                  </Link>
                </li>

                <li className="d-md-none  d-sm-flex align-items-center">
                  {account?.length <= 0 ? (
                    <button
                      className="border-btn-bg  header-sm-button"
                      onClick={() => onConnect()}
                    >
                      <p> Wallet Connect </p>
                    </button>
                  ) : (
                    <button
                      className="border-btn-bg"
                      onClick={() => onDisconnect()}
                    >
                      <p>{account?.slice(0, 4) + "..." + account?.slice(-4)}</p>
                      {/* <p>  Wallet Disconnect </p> */}
                    </button>
                  )}
                </li>
              </ul>

              <ul>
                <li className="  align-items-center header-lg-button ">
                  {account?.length <= 0 ? (
                    <button
                      className="border-btn-bg"
                      onClick={() => onConnect()}
                    >
                      <p> Wallet Connect </p>
                    </button>
                  ) : (
                    <button
                      className="border-btn-bg"
                      onClick={() => onDisconnect()}
                    >
                      <p>{account?.slice(0, 4) + "..." + account?.slice(-4)}</p>
                      {/* <p>  Wallet Disconnect </p> */}
                    </button>
                  )}
                </li>
              </ul>
              <label htmlFor="menu-btn" className="menu-icon">
                <span className="menu-icon__line"></span>
              </label>
            </header>
          </div>
        </nav>
      </div>
      {model && (
        <>
          <div className="modal myx-140-20">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={() => setmodel(false)}
                  ></button>
                </div>
                <div className="modal-body">
                  {loading ? (
                    <>
                      <div
                        className="loading-spinner"
                        data-title=".dot-spin"
                      ></div>
                    </>
                  ) : (
                    <>
                      <div className="fw-bold fs-2 text-color text-center">
                        XUMM Wallet
                      </div>
                      {payload && payload.status && (
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <img src={payload.data.qrUrl} alt="QR" width={300} />

                          <p className="fw-bold fs-4 text-color">Account :</p>
                          <p className="fw-bold fs-5"> {account}</p>
                        </div>
                      )}
                    </>
                  )}
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="border-btn-bg textColorModel"
                  >
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={payload?.data?.next}
                    >
                      mobile
                    </a>
                  </button>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="border-btn-bg textColorModel"
                    onClick={onDisconnect}
                  >
                    Disconnect
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
