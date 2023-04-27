import React, { useState } from 'react'
import "../Ournft/Ournft.css"
import Pagination from "rc-pagination";

import profilePic from "../../../Assets/img/Collections/Mask group.png";
import profilePic1 from "../../../Assets/img/Collections/Mask group (1).png";
import profilePic2 from "../../../Assets/img/Collections/Mask group (2).png";
import profilePic3 from "../../../Assets/img/Collections/Mask group (3).png";
import profilePic4 from "../../../Assets/img/Collections/Mask group (4).png";

import teamBg from "../../../Assets/img/Collections/Frame.png";
import preview from "../../../Assets/img/Header/Preview.png";
import Next from "../../../Assets/img/Header/next.png";
import { Link } from 'react-router-dom';
const Ournft = () => {
  const [size, setSize] = useState(4);
  const [current, setCurrent] = useState(1);
  let datatableUsers = [
    {
      id: 1,
      profilePic: profilePic,
    },
    {
      id: 2,
      profilePic: profilePic1,
    },
    {
      id: 3,
      profilePic: profilePic2,
    },
    {
      id: 4,
      profilePic: profilePic3,
    },
    {
      id: 5,
      profilePic: profilePic4,
    },
  ];


  let user = (current, pageSize) => {
    // Normally you should get the data from the server
    return datatableUsers.slice((current - 1) * pageSize, current * pageSize);
  };

  const PaginationChange = (page, pageSize) => {
    setCurrent(page);
    setSize(4);
  };

  const PrevNextArrow = (current, type, originalElement) => {
    if (type === "prev") {
      return (
        <button>
          <img src={preview} className="previewImg"></img>
        </button>
      );
    }
    if (type === "next") {
      return (
        <button>
          <img src={Next} className="nextImg"></img>
        </button>
      );
    }
    return originalElement;
  };
  return (
    <>
      <h2 className='title myx-140-40 text-center'>Our NFT Collections</h2>

      <div className="container">
        <div className="row justify-content-center">
          <div className="row mt-80">
            {user(current, size).map((ntf, i) => (
              <div
                className="col-xl-3 col-sm-6"
                key={i}
                style={{ padding: 20 }}
              >
                <div className="position-relative text-center frame-position">
                  <img src={teamBg} alt="" className="collection-frame" />
                  <div className="about-collection">
                    {/* <img src={singleProfile} alt="" className="collection-80" />

                     */}
                    <Link to="/">

                      <img
                        src={ntf.profilePic}
                        alt=""
                        className="collection-80"
                      />
                    </Link>
                    <p style={{ color: "white" }}>{ntf.id}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="table-filter-info">
            <Pagination
              defaultPageSize="4"
              className="pagination-data"
              // showTotal={(total, range) => console.log(total,range ,"***" )}
              // showTotal={(total, range) => ` Showing ${range[0] }-${range[1] -6} of ${total}`}
              onChange={PaginationChange}
              total={datatableUsers.length}
              current={current}

              showSizeChanger={false}
              itemRender={PrevNextArrow}
            // onShowSizeChange={PerPageChange}
            />
          </div> */}
        </div>
        <div className="text-center">
          <Link to="/collections">
            <button className="border-btn-bg ">

              <p>See All Collection </p>
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Ournft