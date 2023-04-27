/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect } from "react";
// import Investors_1 from "../../../Assets/img/Story/logoipsum1.png";
// import Investors_2 from "../../../Assets/img/Story/logoipsum5.png";
// import Investors_3 from "../../../Assets/img/Story/logoipsum4.png";
// import Investors_4 from "../../../Assets/img/Story/logoipsum3.png";
// import Investors_5 from "../../../Assets/img/Story/logoipsum2.png";
import FooterImg from "../../../Assets/img/Footer/footer.png";
import FooterSingle from "../../../Assets/img/Footer/FooterSingle.png";
import "./Partners.css";
import { useLocation } from "react-router-dom";

const Partners = () => {
  const { pathname, hash, key } = useLocation();



   useEffect(() => {

      // if not a hash link, scroll to top

      if (hash === '') {

        window.scrollTo(0, 0);

      }
      // else scroll to id
      else {
        setTimeout(() => {
          const id = hash.replace('#', '');
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView();
          }
        }, 0);
      }
    }, [pathname, hash, key]);
  return (
    <>
      {/* <div className="footer"> */}
      <div className="container">
        {/* <div className="InvestorsTitle myx-140-40">Investors & Partners</div>
        <div className="flex-wrap d-flex  justify-content-center  justify-content-md-between gap-3 mt-lg-5 mt-2 ">
          <div className=" pb-lg-5 pb-2 text-center">
            <img src={Investors_1} alt="Gravatar"></img>
          </div>
          <div className=" pb-lg-5 pb-2 text-center">
            <img src={Investors_2} alt="Gravatar"></img>
          </div>
          <div className=" pb-lg-5 pb-2 text-center">
            <img src={Investors_3} alt="Gravatar"></img>
          </div>
          <div className=" pb-lg-5 pb-2 text-center">
            <img src={Investors_4} alt="Gravatar"></img>
          </div>
          <div className=" pb-lg-5 pb-5 text-center">
            <img src={Investors_5} alt="Gravatar"></img>
          </div>
        </div> */}
        <div className="  FooterBg   myx-140-40">
          <div className="footerImg ">
            <div className="d-flex  justify-content-between gap-4">
              <div className=" footer">
                <p className="footerTitle pt-3 pt-xl-"> Join Our Discord</p>
                <p className="Footersubtitle">
                  We are so humbled to have your early support.
                </p>

                <a href="https://discord.com/invite/BKptHCWNSG" target="_blank">
                  <button className="border-btn-bg mt-lg-5 mt-3 mb-3 mb-xl-0">
                    <p> Join Our Discord </p>
                  </button>
                </a>
              </div>
              <img src={FooterImg} alt="" className="footerimg" />
              <img src={FooterSingle} alt="" className="SingleFooterImg" />
            </div>
          </div>
        </div>
        {/* main div */}
        {/* <div className="footerMobileLogo">
          <Link to="/" className="">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="pb-5 ">
          <div className="row">
            <div className="col-lg-7 col-md-12">
              <div className=" mt-5">
                <p className="Footersubtitle">
                  Later this year we will launch a completely new NFT
                  collection… These will be our Bearmarket Bears! To keep us
                  pushing forward and to withstand the coming bear market
                  together.
                </p>
                <form>
                  <div className="d-flex flex-wrap mt-5 gap-md-5 subBtn">
                     <button className="footer-btn-bg mt-lg-5 mt-3"></button> 
                    <div className="row g-3 align-items-center">
                      <div className="col-auto gap-2">
                        <input
                          type="email"
                          placeholder="Email address"
                          className="form-control"
                          aria-describedby="passwordHelpInline"
                        />
                      </div>
                    </div>
                    <button className="footer-btn-bg  mt-lg-3 mt-3">
                      <p> Subscribe</p>
                    </button>
                     <button className="footerSub"></button> 
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-3 col-md-12 ">
              <div className=" QuickMenu">
                <div className="row  mt-5 ">
                  <div className="text-center   pb-2">Quick Menu</div>
                  <div className="col-6 text-center ">
                    <div className="mt-3 "><Link to="/about" className="lineColor">About Us</Link></div>
                    <div className="mt-3"><Link to="/team"  className="lineColor">Team</Link></div>
                    <div className="mt-3"><Link to="/collections" className="lineColor" >Collections</Link></div>
                  </div>
                  <div className="col-6 text-center">
                    <div className="mt-3"><Link to="/roadmap" className="lineColor">Roadmap</Link></div>
                    <div className="mt-3"><Link to="/#AskedQuestion" className="lineColor">FAQ</Link></div>
                    <div className="mt-3"><Link to="/contact" className="lineColor">Contact</Link></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-12">
              <div className="QuickMenu mt-5">
                <div className="text-center pb-2">Follow Us</div>
                <div className="d-flex gap-5  gap-lg-3 justify-content-center">
                  <div className="mt-3">
                    <Link to="/" className="lineColor"><svg
                      width="34"
                      height="20"
                      viewBox="0 0 34 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="lineColorsvg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.99761 19.9172C3.14913 18.9719 -0.217888 14.6012 0.0109957 9.54971C0.220346 4.92937 3.32048 1.13499 7.70129 0.137288C8.50541 -0.045866 10.6794 -0.0457283 11.4839 0.137495C15.1261 0.966839 17.9635 3.79111 18.8642 7.48378C19.7214 10.9971 18.7409 14.6711 16.274 17.1898C14.9811 18.5097 13.3516 19.4229 11.5189 19.8545C10.8383 20.0147 8.69389 20.0529 7.99761 19.9172ZM24.249 19.362C22.954 18.9996 21.7921 17.6212 21.0138 15.524C20.1038 13.0719 19.8663 9.48893 20.4246 6.63411C20.8475 4.47193 21.5981 2.8046 22.6475 1.69676C23.2818 1.02706 23.7937 0.717794 24.4912 0.582762C26.193 0.253444 27.9845 1.96779 28.9161 4.81723C29.4023 6.30438 29.6212 7.67903 29.6697 9.54971C29.7469 12.5312 29.1884 15.1496 28.0492 17.1461C27.6671 17.8158 26.7488 18.8072 26.2635 19.0741C25.5767 19.4517 24.91 19.547 24.249 19.362ZM32.1816 18.4381C31.5589 18.1729 31.0258 16.1855 30.7433 13.0759C30.638 11.9156 30.6375 8.16067 30.7426 6.95693C31.0251 3.72134 31.5759 1.74958 32.257 1.53518C32.4369 1.47855 32.7697 1.7576 32.9406 2.10849C34.2072 4.70881 34.3784 13.4174 33.2351 17.0861C33.0085 17.8129 32.8628 18.1016 32.6112 18.3219C32.3859 18.5192 32.3774 18.5215 32.1816 18.4381Z"
                        fill="white"
                      />
                    </svg></Link>
                  </div>
                  <div className="mt-3">
                  <Link to="/" className="lineColor"><svg
                   className="lineColorsvg"
                      width="28"
                      height="20"
                      viewBox="0 0 28 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23.703 1.65873C21.9181 0.892109 20.0048 0.325479 18.004 0.00327775C17.9862 2.00876e-05 17.9678 0.00211944 17.9512 0.00928551C17.9347 0.0164516 17.921 0.0283298 17.9119 0.0432752C17.6669 0.453249 17.3939 0.987659 17.2026 1.40985C15.0806 1.10791 12.9232 1.10791 10.8012 1.40985C10.5881 0.941952 10.3478 0.485718 10.0814 0.0432752C10.0724 0.0281458 10.0587 0.0159989 10.0423 0.00845534C10.0258 0.000911789 10.0073 -0.00166968 9.98926 0.00105557C7.98966 0.323257 6.07638 0.889887 4.29027 1.65762C4.2749 1.66375 4.26187 1.67423 4.25293 1.68761C0.622376 6.77062 -0.372761 11.7281 0.116057 16.6234C0.117418 16.6353 0.121325 16.6469 0.127543 16.6574C0.13376 16.6679 0.142157 16.6771 0.152223 16.6845C2.27128 18.1537 4.63482 19.273 7.14385 19.9954C7.16133 20.0005 7.18005 20.0005 7.19752 19.9953C7.21501 19.9902 7.23046 19.98 7.24184 19.9664C7.78083 19.2775 8.26148 18.5498 8.67214 17.7854C8.69663 17.741 8.6733 17.6876 8.6243 17.6699C7.87067 17.3997 7.14045 17.0735 6.44037 16.6944C6.42779 16.6876 6.41719 16.6779 6.40952 16.6661C6.40185 16.6545 6.39735 16.6411 6.39642 16.6274C6.3955 16.6136 6.39818 16.5998 6.40421 16.5873C6.41026 16.5748 6.41947 16.5638 6.43104 16.5555C6.57803 16.4522 6.72503 16.3445 6.86502 16.2367C6.87762 16.227 6.8928 16.2208 6.90886 16.2188C6.92494 16.2168 6.94126 16.2192 6.95602 16.2256C11.5374 18.1855 16.4991 18.1855 21.0268 16.2256C21.0416 16.2188 21.0581 16.2162 21.0744 16.218C21.0906 16.2197 21.1061 16.2258 21.119 16.2355C21.259 16.3444 21.4048 16.4522 21.5529 16.5555C21.5646 16.5637 21.5739 16.5745 21.5802 16.5869C21.5864 16.5993 21.5893 16.613 21.5886 16.6268C21.5879 16.6405 21.5836 16.6539 21.5763 16.6657C21.5688 16.6775 21.5583 16.6874 21.5459 16.6944C20.8483 17.0766 20.1227 17.4 19.3608 17.6689C19.3492 17.6729 19.3384 17.6792 19.3296 17.6875C19.3206 17.6957 19.3137 17.7057 19.3092 17.7169C19.3046 17.7279 19.3026 17.7397 19.3033 17.7515C19.3039 17.7634 19.3073 17.775 19.313 17.7854C19.733 18.5487 20.2136 19.2753 20.7421 19.9653C20.7531 19.9795 20.7684 19.99 20.786 19.9956C20.8035 20.0012 20.8224 20.0015 20.8401 19.9964C23.3534 19.2761 25.7208 18.1563 27.8423 16.6845C27.8526 16.6775 27.8613 16.6686 27.8677 16.6583C27.8741 16.6479 27.8782 16.6364 27.8796 16.6244C28.4629 10.9648 26.9019 6.04733 23.7392 1.68984C23.7314 1.67567 23.7186 1.66464 23.703 1.65873ZM9.35695 13.6423C7.97799 13.6423 6.84052 12.4546 6.84052 10.9981C6.84052 9.54044 7.95582 8.35385 9.35695 8.35385C10.7686 8.35385 11.8956 9.55044 11.8734 10.9981C11.8734 12.4558 10.7581 13.6423 9.35695 13.6423ZM18.6609 13.6423C17.2807 13.6423 16.1444 12.4546 16.1444 10.9981C16.1444 9.54044 17.2586 8.35385 18.6609 8.35385C20.0725 8.35385 21.1995 9.55044 21.1773 10.9981C21.1773 12.4558 20.0737 13.6423 18.6609 13.6423Z"
                        fill="white"
                      />
                    </svg></Link>
                  </div>
                  <div className="mt-3">
                  <Link to="/" className="lineColor">    <svg
                      width="23"
                      className="lineColorsvg"
                      height="20"
                      viewBox="0 0 23 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23 2.37236C22.1542 2.77326 21.2456 3.04414 20.2904 3.16657C21.276 2.53575 22.0133 1.5429 22.3648 0.373289C21.4389 0.961623 20.4255 1.37575 19.3685 1.59765C18.6578 0.78596 17.7165 0.247955 16.6906 0.0671693C15.6648 -0.113617 14.6119 0.072931 13.6953 0.59785C12.7787 1.12277 12.0498 1.95669 11.6217 2.97014C11.1936 3.9836 11.0903 5.11987 11.3278 6.20257C9.4515 6.1018 7.61598 5.58015 5.94036 4.67147C4.26473 3.76279 2.78646 2.48739 1.60147 0.928046C1.19629 1.67566 0.963314 2.54247 0.963314 3.46562C0.962861 4.29667 1.15419 5.11498 1.52031 5.84797C1.88644 6.58096 2.41604 7.20595 3.06215 7.66747C2.31284 7.64197 1.58008 7.4254 0.924822 7.03578V7.1008C0.924747 8.26637 1.30167 9.39608 1.99164 10.2982C2.68161 11.2004 3.64212 11.8194 4.71021 12.0503C4.01511 12.2515 3.28635 12.2811 2.57897 12.137C2.88031 13.1399 3.46732 14.0169 4.2578 14.6452C5.04827 15.2735 6.00265 15.6217 6.98732 15.641C5.31578 17.0446 3.25145 17.806 1.1264 17.8026C0.749967 17.8027 0.373855 17.7792 0 17.7322C2.15705 19.2157 4.66801 20.003 7.23245 20C15.9135 20 20.6591 12.3092 20.6591 5.63915C20.6591 5.42245 20.654 5.20357 20.6449 4.98687C21.5679 4.27281 22.3648 3.38859 22.9979 2.37561L23 2.37236Z"
                        fill="white"
                      />
                    </svg></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ border: " 1px solid #797979" }}></div>
        <div className="d-flex justify-content-between copyRight  reverCopy">
          <div className="mobileFooter">
           
            <p>
              2022, All Rights Reserved Designed by SPACEIT
            </p>
          </div>
          
            <div className=" d-flex  gap-lg-5 gap-4 footerTerms">
           
            <Link to="/" className=" reverCopy">Terms & Condition</Link>
            <Link to="/" > <div className=" footerTerms">Privacy Policy</div></Link>
            <Link to="/" > <div className=" footerTerms">Cookie Policy</div></Link>
            </div>
          
        </div> */}
      </div>
    </>
  );
};

export default  Partners;
