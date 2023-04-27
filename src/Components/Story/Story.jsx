import React, { useEffect, useState } from "react";
import Title from "../../Components/Common/Title/Title";


import "./Story.css";
import chekerUrl from "../BaseUrl";
import SkeletonProduct from "../Common/SkeletonProduct/SkeletonProduct";
const Story = () => {
  const [imgData, setimgData] = useState("")
  const [mobileimg, setmobileimg] = useState("")
  const [loading, setloading] = useState(true);
    const getNFT = async () => {
      try {
        
        const res = await chekerUrl.post(`/image/story`);
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
        title="Story"
        subtitle="Walkthrough the history with us "
        fullImg={`${process.env.REACT_APP_BASE_URL}/img/story.png`}
        mobileImg={`${process.env.REACT_APP_BASE_URL}/img/mstory.png`}
      ></Title>)}
      {/* <Title
        title="Story"
        subtitle="Walkthrough the history with us "
        fullImg={fullImg}
        mobileImg={Single}
      />*/}
      <div className="container"> 
        <div className="storyTitleName myx-140-40 ">A Bit of History</div>
        <div className="storySubTitle">
          In a universe which exists in an alternate reality, there lived a clan
          of bulls who bowed to no one but their master – Gilgamesh. The bulls
          knew their realm would cease to flourish if Gilgamesh was harmed. What
          gave him this power to rule was a tale of ancient times, many believed
          it never happened, yet many had seen the signs of the epic battle that
          Gilgamesh had won against the ferocious lords of creation. To this
          day, some could hear the distant screams of the bears who were turned
          to pixels by the lords, so they would rely on concoctions to help
          their fading minds and drift them off to a restful sleep.
        </div>
        <div className="storySubTitle">
          Had it not been for Gilgamesh, Heracles would not rule over his kind,
          for his kind would have been wiped off the face of the realm. While
          the bears were a powerful force against the lords, they did not
          possess the intellect of the bulls – especially that of their
          forerunner. For this reason, Heracles knew there was a debt unpaid and
          lived in unison with the kingdom of Gilgamesh, trading coins of all
          kinds to ensure commerce was sustained and even allowed his subjects
          to take the hand of a bull in marriage. Deep inside however, Heracles
          was wounded; haunted by the images of that fateful day. He was raised
          to be a master, but no one could have predicted the arrival of the
          lords. It was the unique instinct which Gilgamesh possessed in warfare
          which became a cause for his envy, and while Heracles remained cordial
          over the years, he waited for the day he would be able to stand with
          his head held up high against his arch-enemy, victorious; admired;
          celebrated.
        </div>
        <div className="storySubTitle">
          Many among the realm of the bulls had acquired a fortune through
          trading, and now, this fortune was used to make Gilgamesh more
          powerful. They believed he would never have been victorious had he not
          himself been a Lord – the righteous lord who protected an entire
          kingdom against the lords of creation and banished them with nothing
          but his instinct. Gilgamesh now spent his days in meditation,
          harnessing the power he held within to protect both kingdoms against
          any threats they may ever see again. His time, he said, was precious.
          The scales were always tipping. And so the wealthy bulls maintained a
          continuous program of exchange between the bulls and bears, trading
          insights and secrets, creating a market of information which fed both
          peas in the pod.
        </div>
        <div className="storySubTitle">
          Everyone in the kingdom never knew about another bone of contention
          between Gilgamesh and Heracles – Freya. She was the most beautiful
          bear the kingdom had ever seen and Heracles’s younger sister, the long
          lost love of Gilgamesh. Before they left this realm, the lords of
          creation casted Freya into a web of ether, turning her into a lifeless
          yet immortal being who could no longer feel, but only think. She was
          alive, in a way unknown to everyone else. Gilgamesh would still speak
          with her past sometimes, but not her present, and it was believed by
          many that one day, Gilgamesh would step through the simulation of this
          realm to meet his beloved Freya, leaving everything behind. Heracles
          knew Freya was more than just someone’s love – she was meant to be the
          queen.
        </div>
       
        <div className="storySubTitle">
          Most of the secrets of Gilgamesh and Heracles were kept under guard by
          the wealthiest of the bulls and bears, for they knew the many happy
          families, the millions of people living in harmony within the realm
          would once again lose their sense of belonging, if they knew. So they
          were allowed to lead their lives in oblivion, celebrating the normalcy
          of their lives and creating a new generation through interbreeding –
          the Burls, fated to be the inheritors of a legacy the lords of
          creation left behind.
        </div>
        <div className="storySubTitle">
          The Burls were a unique creature, fungible during the day and
          non-fungible as they slept. They could read minds and look into the
          past, but never did they reveal the ugly secrets of the past. They
          spoke no evil and did no harm. Both Gilgamesh and Heracles knew if the
          Burls were to lead, the future would be kind, but their species was
          still in a phase of growth, no Burl had grown old enough to marry
          another Burl and so, the kingdom had to wait.
        </div>
        <div className="storySubTitle">
          One of the Burls had grown an affinity for Gilgamesh and wanted to be
          in his service. He wanted to learn the art of meditation and gain the
          instincts which led Gilgamesh in the battle against the lords. His
          thirst for this knowledge led him to the forum where Gilgamesh lived
          every day, asking for a consultation. Every day he was turned away,
          yet something kept him coming back. He spoke of a dream he frequently
          had, a dream only Gilgamesh could explain – a dream which held a
          remedy for Freya.
        </div>
        <div className="storySubTitle">
          This Burl had a rare name, Nifta. No one knew exactly what it meant,
          but him. When asked about its meaning, Nifta would say only Gilgamesh
          is destined to know. The day Nifta would be granted an audience with
          Gilgamesh was yet to come.
        </div>
      </div>
    </>
  );
};

export default Story;
