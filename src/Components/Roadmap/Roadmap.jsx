import React, { useEffect, useState } from 'react'
import Timeline from "../../Components/Common/Timline/Timeline"
import Title from '../Common/Title/Title'

import chekerUrl from '../BaseUrl';
import SkeletonProduct from '../Common/SkeletonProduct/SkeletonProduct';

const Roadmap = () => {
  const [imgData, setimgData] = useState("")
const [mobileimg, setmobileimg] = useState("")
const [loading, setloading] = useState(true);
  const getNFT = async () => {
    try {
      
      const res = await chekerUrl.post(`/image/roadmap`);
      if (res.data.status) {
        setmobileimg(res.data.data.Moblie.img);
        setimgData(res.data.data.laptop.img);
        setloading(false);
        
      } else {
        
      }
    } catch (error) {}
  };
console.log(imgData);
  useEffect(() => {
    getNFT()
  }, [])
    return (
      <>
        {/* <Title
          title="Roadmap"
          subtitle="See the glimpse of future "
          fullImg={fullImg}
          mobileImg={Single}
        ></Title> */}
         {loading ?(  <SkeletonProduct />):(<Title
data-aos="zoom-in"
        title="Roadmap"
        subtitle="See the glimpse of future  "
        fullImg={`${process.env.REACT_APP_BASE_URL}/img/Roadmap.png`}
        mobileImg={`${process.env.REACT_APP_BASE_URL}/img/mroadmap.png`}
      ></Title>)}
        <Timeline />
      </>
    );
}

export default Roadmap