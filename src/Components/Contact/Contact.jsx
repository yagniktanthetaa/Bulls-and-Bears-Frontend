/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import Title from "../Common/Title/Title";
import success from "../../Assets/img/Contact/succ.png";
import close from "../../Assets/img/Contact/close.png";
import "./Contact.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import chekerUrl from "../BaseUrl";
import SkeletonProduct from "../Common/SkeletonProduct/SkeletonProduct";

const Contact = () => {
  const [Data, setData] = useState([
    { Username: "", email: "", subject: "", Description: "" },
  ]);
  // console.log("🚀 ~ Contact ~ Data", Data)

  const [model, setmodel] = useState(false);
  let sendemail = true;
  const handleForm = async (e) => {
    e.preventDefault();

    if (Data.Username === undefined || Data.Username === "") {
      toast.error("Name Field is Required", { theme: "dark" });
      setmodel(false);
      sendemail = false;
    }
    if (Data.email === undefined || Data.email === "") {
      toast.error("Email Field is Required", { theme: "dark" });
      setmodel(false);
      sendemail = false;
    }
    if (Data.subject === undefined || Data.subject === "") {
      toast.error("Subject Field is Required", { theme: "dark" });
      setmodel(false);
      sendemail = false;
    }

    if (Data.Description === undefined || Data.Description === "") {
      toast.error("Description Number Field is  Required", { theme: "dark" });
      setmodel(false);
      sendemail = false;
    }

    if (sendemail) {
      try {
        const res = await chekerUrl.post(`/bullandbear/sendmail`, {
          name: Data.Username,
          email: Data.email,
          subject: Data.subject,
          description: Data.Description,
        });
        if (res) {
          console.log(res);
          setData(res.data);
          setmodel(true);
        } else {
        }
      } catch (error) {}
    }
  };

  const modelClose = () => {
    setmodel(false);
    setData([]);
    var form = document.getElementById("form");
    form.reset();
    document.getElementById("exampleFormControlTextarea1").value = "";
  };

  const InputChange = (e) => {
    const { name, value } = e.target;

    if (
      name === "Username" ||
      name === "subject" ||
      name === "email" ||
      name === "Description"
    ) {
      setData({
        ...Data,
        [name]: value,
      });
    }
  };

  const [imgData, setimgData] = useState("");
  const [mobileimg, setmobileimg] = useState("");
  const [loading, setloading] = useState(true);
  const getNFT = async () => {
    try {
      const res = await chekerUrl.post(`/image/contact`);
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
      {loading ? (
        <SkeletonProduct />
      ) : (
        <Title
          data-aos="zoom-in"
          title="Contact"
          subtitle="Connect with us "
          fullImg={`${process.env.REACT_APP_BASE_URL}/img/contact.png`}
          mobileImg={`${process.env.REACT_APP_BASE_URL}/img/mcontact.png`}
        ></Title>
      )}

      <section className="ourTeam">
        <div className="container">
          <h2 className="title myx-140-40 text-center">Get in Touch With us</h2>

          <div className="">
            <form id="form" onSubmit={handleForm}>
              <div className="row ">
                <div className="col-12 ">
                  {/* <label className="labelFrom" htmlFor="uname">Enter Your Name:</label> */}
                  <input
                    type="text"
                    value={Data.Username}
                    className="contactInput inputBg"
                    id="uname"
                    placeholder="Name :"
                    name="Username"
                    autoComplete="off"
                    onChange={InputChange}
                  />
                </div>
                <div className="col-12    ">
                  {/* <label className="labelFrom" htmlFor="uname">Enter Your Email:</label> */}
                  <input
                    type="email"
                    value={Data.email}
                    className="contactInput inputBg"
                    id="uname"
                    placeholder="Email:"
                    name="email"
                    autoComplete="off"
                    onChange={InputChange}
                  />
                </div>
                <div className="col-12 ">
                  {/* <label className="labelFrom" htmlFor="uname">Your Subject:</label> */}
                  <input
                    type="text"
                    value={Data.subject}
                    className="contactInput inputBg"
                    id="uname"
                    placeholder="Subject :"
                    name="subject"
                    autoComplete="off"
                    onChange={InputChange}
                  />
                </div>

                <div className="col-12">
                  <textarea
                    type="text"
                    value={Data.Description}
                    name="Description"
                    placeholder="Write your question, feedback Or comments here in details :"
                    className="contactInput inputBg"
                    autoComplete="off"
                    id="exampleFormControlTextarea1"
                    rows="8"
                    onChange={InputChange}
                  ></textarea>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <button className="footer-btn-bg  mt-lg-5 mt-3">
                  <p> Send Message </p>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {model && (
        <>
          <div className="modal myx-140-20 pt-5" >
            <div className="modelBG ">
              <div>
                <button className="closeIcon  btnClose" onClick={modelClose}>
                  <img src={close} className="" width={15} height={15}></img>
                </button>
                
              </div>
              <div className="iconSucce">
                <img 
                  src={success}
                  className="mailSucc"
                  width={"90px"}
                  height={"90px"}
                ></img>
                <h3 className="text-center p-2 pb-5 Model-text-color ">
                  {" "}
                  Thank you for contacting us. We'll respond to you soon via
                  email.{" "}
                </h3>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Contact;
