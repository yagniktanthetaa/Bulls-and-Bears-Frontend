import React, { useEffect, useState } from 'react'
import Ourteam from '../Common/Ourteam/Ourteam'

import Title from '../Common/Title/Title'
import chekerUrl from '../BaseUrl';
import SkeletonProduct from '../Common/SkeletonProduct/SkeletonProduct';

const Team = () => {
  const [imgData, setimgData] = useState("")
const [mobileimg, setmobileimg] = useState("")
const [loading, setloading] = useState(true);
  const getNFT = async () => {
    try {
      
      const res = await chekerUrl.post(`/image/team`);
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
{loading ?(  <SkeletonProduct />):(<Title
data-aos="zoom-in"
        title="Team"
        // subtitle="See the glimpse of future  "
        fullImg={`${process.env.REACT_APP_BASE_URL}/img/team.png`}
        mobileImg={`${process.env.REACT_APP_BASE_URL}/img/mteam.png`}
      ></Title>)}
    {/* <Title
        title="Team"
        // subtitle="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium "
        fullImg={fullImg}
        mobileImg={Single}
      ></Title> */}
    <Ourteam/>
    </>
  )
}

export default Team