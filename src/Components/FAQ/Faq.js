import React, { useState } from 'react'

import "../../Components/Home/Home.css";
import downArrow from "../../Assets/img/Header/down-arrow.png";
const Faq = () => {
    const [isOpen, setIsOpen] = useState(-1);
    const acrdn = [
        {
          question: "How to I receive an ROI?",
          ans: "As soon as you have 3 NFT from collection 1 and/or 2, you can start earning rewards.  The more NFT you hold, the more you will earn.  We follow a tight scheme which you can find under the passive income tab on our website.",
        },
        {
          question: "Can I compound rewards?",
          ans: "No, it is not possible to compound rewards.  We at Bulls and Bears will do everything in our power to earn you as much as possible “extra” on top of your base ROI.",
        },
        {
          question: "How can I claim my rewards?",
          ans: "You just have to sit back and relax and as soon as your claim period arrives, we will make sure all get’s distributed to your registered xrp wallet.",
        },
        {
          question: "When can I claim my rewards?",
          ans: "Rewards will be paid out 100% as soon as the claim period arrives.  At the moment it is set to once per year, but we are working on a solution to make this monthly.",
        },
        {
          question: "What is the ROI?",
          ans: "The ROI is based on the amount of bulls and bears you hold.  The exact amounts can be found under the passive income tab on our website.  Each month we will scan you wallet and register the amount hold at that time.",
        },
        {
          question:
            "What happens to the ROI when we enter a prolonged bear market?",
          ans: "Your ROI will have the exactly the same base minimum amount during bull and bear markets.",
        },
        {
          question: "Can I raise my ROI?",
          ans: "The only way to raise your ROI is to elevate yourself to the next tier.  If you already are highest tier level, then it will all depend on the secondary investments we make following the strategy you can find in this whitepaper.",
        },
      ];
      const openAccorrdion = (id) => {
        setIsOpen(isOpen === id ? -1 : id);
      };
  return (
    <div>
        <section className="asked-questions" id="AskedQuestion">
        <div className="container">
          <h2 className="title myx-140-40 text-center">
            Frequently Asked Questions
          </h2>
          <div className="ask">
            {acrdn.map((accordions, i) => (
              
              <div className=" " key={i}>
                <div
                  className={`${isOpen === i ? "open" : "close"} accordion-bg`}
                  onClick={() => openAccorrdion(i)}
                  key={i}
                  id="open"
                >
                  <div className="d-flex align-items-center justify-content-between ">
                    <h6 className="questions"> {accordions.question}</h6>
                    <img src={downArrow} alt="" className="faq-arrow" />
                  </div>
                </div>
                <p
                  className={`${
                    isOpen === i ? "dis-block" : "dis-none"
                  }  answer`}
                >
                  {accordions.ans}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Faq