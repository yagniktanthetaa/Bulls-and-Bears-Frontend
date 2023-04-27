import React, { useEffect, useState } from "react";
import "../PassiveIncome/PassiveIncome.css";
import Title from "../Common/Title/Title";

import SkeletonProduct from "../Common/SkeletonProduct/SkeletonProduct";
import chekerUrl from "../BaseUrl";
import Faq from "../FAQ/Faq";
const Passiveincome = () => {
  const [Data, setData] = useState([{ Discord: "", Sologenic: "", xrp: "" }]);
  //const InputChange = (e) => {
  //  const { name, value } = e.target;
  //  setData({
  //    ...Data,
  //    [name]: value,
  //  });
  //};
  const [imgData, setimgData] = useState("");
  const [mobileimg, setmobileimg] = useState("");
  const [loading, setloading] = useState(true);
  const getNFT = async () => {
    try {
      const res = await chekerUrl.post(`/image/passiveincome`);
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
    getNFT();
  }, []);
  // const PassData=(e)=>{
  //   e.preventDefault();
  //   let sendemail=true
  //         if (Data.Discord === undefined || Data.Discord === "") {
  //             // toast.error(<h1>"Name is Required", {theme= "dark" }</h1>)
  //             sendemail=false;
  //                toast.error("Discord Name Field is Required", {theme: "dark" })

  //         }
  //         if (Data.Sologenic === undefined || Data.Sologenic === "") {
  //             sendemail=false
  //             toast.error("Sologenic Account Name Field is Required",{theme: "dark" })

  //         }
  //         if (Data.xrp === undefined || Data.xrp === "") {
  //             sendemail=false
  //             toast.error('XRP Address Field is Required',{theme: "dark" })
  //         }
  //         if(sendemail) {
  //          JSON.stringify({
  //             Discord: Data.Discord,
  //               Sologenic: Data.Sologenic,
  //               xrp: Data.xrp,
  //           });

  //           axios
  //               .post(`${process.env.REACT_APP_BASE_URL}/bullandbear/passiveincome`, {
  //                 discord_name: Data.Discord,
  //                 sologenic_account_name: Data.Sologenic,
  //                 xrp_address: Data.xrp,

  //               })
  //               .then((res) => {
  //                   if (res) {
  //                       toast.success('Data send successfully', {theme: "dark",fontsize:"50px" } )
  //                   }
  //               });
  //             }
  // }
  // /image/passiveincome
  return (
    <>
      {loading ? (
        <SkeletonProduct />
      ) : (
        <Title
          data-aos="zoom-in"
          title="Passive Income"
          subtitle="Become a Hodler and Earn! "
          fullImg={`${process.env.REACT_APP_BASE_URL}/img/passiveincome.png`}
          mobileImg={`${process.env.REACT_APP_BASE_URL}/img/mpassiveincome.png`}
        ></Title>
      )}
      {/* <Title
          title="Passive Income"
          subtitle="Become a Hodler and Earn! "
          fullImg={fullImg}
          mobileImg={Single}
        ></Title> */}
      <section className="passive-income">
        <div className="container">
          {/* <div className=' myx-140-40'>
            <h2 class="title text-center">
              Join our Passive Income Program{" "}
            </h2>
            <p class="about-section text-center">
              Make sure you double check your address before sending it. You are
              responsible if your funds get lost in the transaction!
            </p>
            </div>
            <div className="passive-income-form text-center">
              <form action="" onSubmit={PassData}>
                <input
                  type="text"
                  placeholder="Discord Name"
                  className="form-control"
                  onChange={InputChange}
                  name="Discord"
                />
                <input
                  type="text"
                  placeholder="Sologenic Account Name"
                  className="form-control"
                  onChange={InputChange}
                  name="Sologenic"
                />
                <input
                  type="text"
                  placeholder="XRP Address"
                  className="form-control"
                  onChange={InputChange}
                  name="xrp"
                />

                <button class="border-btn-bg ml-lx-0 text-center" >
                  <p> Submit </p>
                </button>
              </form>
            </div> */}

          <div className="passive-income-chart  myx-140-40">
            <div className="row">
              <div className="col-lg-6">
                <h3 className="table-title border-right">
                  Passive Income &#60;10$ xrp{" "}
                </h3>
                <div className="border-right">
                  <div className="borders"></div>
                  <div className="pl-60 pb-60">
                    <div className="mh-90">
                      <p className="f-16 pt-30">
                        We started already with an “appreciation” passive income
                        plan to thank the community for their ongoing support.
                        This plan is based on the amount of bulls you hold from
                        collection 1 and/or 2 combined. Where is this money
                        coming from you ask? Well, each collection we create a
                        few custom NFT which will go for a higher value and
                        which will be used to create that reserve to do all
                        these things so we don’t have to touch the initial
                        investment of our holders.{" "}
                      </p>
                    </div>

                    <h3 class="sub-title pt-3 pt-xl-0">Monthly Income</h3>

                    <table className="text-white w-100 ">
                      <tr>
                        <td>
                          <span className="f-16">3 - 4 BULL</span>
                        </td>
                        <td className="text-end">
                          <span className="f-16">5 xrp</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="f-16">5 - 6 BULL</span>
                        </td>
                        <td className="text-end">
                          <span className="f-16">15 xrp</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="f-16">7 - 8 BULL</span>
                        </td>
                        <td className="text-end">
                          <span className="f-16">20 xrp</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="f-16">+9 BULL</span>
                        </td>
                        <td className="text-end">
                          <span className="f-16">25 xrp</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="f-16">+15 BULL</span>
                        </td>
                        <td className="text-end">
                          <span className="f-16">50 xrp</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="f-16">+25 BULL</span>
                        </td>
                        <td className="text-end">
                          <span className="f-16">100 xrp</span>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <h3 className="table-title">Passive Income &#62;10$ xrp </h3>
                <div className="borders ml-30-"></div>

                <div className="pl-60">
                  <div className="mh-90">
                    <p className="f-16  pt-30">
                      A new tier system will start (which is the ‘real’ passive
                      income plan) as soon as xrp hits 10$. This plan is based
                      on the amount of bulls you hold from collection 1 and/or 2
                      combined.
                    </p>
                    {/* <p className='f-14 py-2'>*Based on the amount of bulls you own (collection 1 & 2 combined)</p>
                                        <p className='f-14'>*roi will be paid out per year</p> */}
                  </div>
                  <h3 class="sub-title pt-3 pt-xl-4">Yearly Income</h3>
                  <table className="text-white w-100">
                    <tr>
                      <td>
                        <span className="f-16">Tier 1 ( 3+ BULL )</span>
                      </td>
                      <td className="text-end">
                        <span className="f-16">$ 300</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="f-16">Tier 2 ( 5+ BULL )</span>
                      </td>
                      <td className="text-end">
                        <span className="f-16">$ 600</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="f-16">Tier 3 ( 10+ BULL )</span>
                      </td>
                      <td className="text-end">
                        <span className="f-16">$ 1,500</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="f-16">Tier 4 ( 25+ BULL )</span>
                      </td>
                      <td className="text-end">
                        <span className="f-16">$ 3,900</span>
                      </td>
                    </tr>

                    <tr>
                      <td className="">
                        <span className="f-16">Tier 5 ( 50+ BULL )</span>
                      </td>
                      <td className="text-end">
                        <span className="f-16">$ 9,000</span>
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="about-money-come myx-140-40 ">
            <h2 class="lotterySystem  pt-lx-0 pt-5">
              Passive Income &#62;10$ XRP
            </h2>

            <p className="pt-20 about-section">
            Plan 3 is a surplus, based on plan 2. The amount of bulls you hold from collection 3 will count as a bonus percentage on top of your base passive income from plan 2.
            </p>
          </div>
          <div className="pt-30 lotteryPrice">Yearly Income</div>
          <table className="text-white w-100">
            <tr>
              <td>
                <span className="f-16">Tier 1 ( 3+ BULL )</span>
              </td>
              <td className="text-end">
                <span className="f-16">5 %</span>
              </td>
            </tr>
            <tr>
              <td>
                <span className="f-16">Tier 2 ( 5+ BULL )</span>
              </td>
              <td className="text-end">
                <span className="f-16">10 %</span>
              </td>
            </tr>
            <tr>
              <td>
                <span className="f-16">Tier 3 ( 10+ BULL )</span>
              </td>
              <td className="text-end">
                <span className="f-16">25 %</span>
              </td>
            </tr>
            <tr>
              <td>
                <span className="f-16">Tier 4 ( 15+ BULL )</span>
              </td>
              <td className="text-end">
                <span className="f-16">50 %</span>
              </td>
            </tr>
            <tr>
              <td>
                <span className="f-16">Tier 5 ( 25+ BULL )</span>
              </td>
              <td className="text-end">
                <span className="f-16">100 %</span>
              </td>
            </tr>
          </table>

          <div className="about-money-come">
            <h2 class="lotterySystem myx-140-40 pt-5 pt-xl-0">
            A LOTTERY SYSTEM THAT WILL BE ACTIVATED AFTER 2 CONDITIONS ARE MET:
            </h2>
            <div className="d-flex gap-2">
              <p className="about-section  "> &#8226;</p>{" "}
              <p className="about-section">XRP HAS TO REACH 10$</p>
            </div>
            <div className="d-flex gap-2">
              <p className="about-section  "> &#8226;</p>{" "}
              <p className="about-section">
                {" "}
                COMPLETE SELLOUT OF A NEW “EXTREME SPECIAL” 3D BULL COLLECTION
              </p>
            </div>

            <p className="pt-20 about-section">
              We have 1 very small and unique 3D Lottery Bull collection (111
              NFT). Holding only 1 of these bulls will make you eligible to win
              our 2-weekly lottery raffle! Each bull you hold, will count as 1
              entry for this lottery. The more you hold, the bigger your chances
              are. Every 2 weeks, we will draw one random winner!
            </p>

            <div>
              <div className="pt-30 lotteryPrice">Monthly Price</div>
              <table className="text-white w-100">
                <tr>
                  <td className="">
                    <span className="f-16"> 1 BULL </span>
                  </td>
                  <td className="text-end">
                    <span className="f-16">1 Lottery Ticket</span>
                  </td>
                </tr>
                <tr>
                  <td className="">
                    <span className="f-16"> 2 BULL </span>
                  </td>
                  <td className="text-end">
                    <span className="f-16">2 Lottery Ticket</span>
                  </td>
                </tr>
                <tr>
                  <td className="">
                    <span className="f-16"> 3 BULL </span>
                  </td>
                  <td className="text-end">
                    <span className="f-16">3 Lottery Ticket</span>
                  </td>
                </tr>
                <tr>
                  <span className="f-16">.....</span>
                </tr>
              </table>
              <div className="pt-20 about-section">
                "PRICES WILL HAVE A VALUE OF $250 – $500 EACH AND EVERY 2 WEEKS"
              </div>
            </div>
          </div>
          <div className="about-money-come">
            <h2 class="title myx-140-40">
              Where is all this money coming from?
            </h2>
            <p className="about-section">
              As you already know, … we are not your random NFT project. I
              personally haven’t seen any project yet that comes close to what
              we have to offer. Are we special, we are certainly not, but what I
              do know is… every step that we take, is to make sure it makes us
              as a community better.
            </p>
            <p className=" pt-20 about-section">
              Many projects launch their own token in which you will need to
              invest or which is used to pay-out an actual return on your
              investment (holding the NFT). That token can then be used to buy
              that project’s own products… The majority of these tokens have
              close to zero ‘real world’ value and won’t benefit anyone, but the
              issuer with some nice short term gains. Other projects smash you
              with their airdrops left and right and in the end… you’re left
              with a bunch of NFTs which assumably never will be adopted and
              will be just good enough to print and to hang up somewhere in a
              room. Others launch their own game (number 907 in the row) where
              you can use your NFTs or tokens to again, only be used with their
              product. And yes… for some of these game projects, you can earn
              more tokens and then convert these to other more reliable tokens
              which then can be converted to $$. But how many of these games you
              think will exist 5 years from now? And how many of these games
              that will still exist, will actually have been adopted? And if so…
              are you planning to play these games all day long to earn these
              tokens or gifts… because however you fold it… what makes that
              different to a 9-5?
            </p>
            <p className="pt-20 about-section ">
              That’s why we really wanted to bring immediate real $$ value to
              our community. This project was mainly launched to find a way to
              help anyone who really believes in our idea and invests for the
              longterm. As we have stated many times before, even if we are the
              biggest failure that the NFT market has ever seen, we will still
              be able to proceed with our promised passive income plan. And
              that’s a fact!
            </p>
            <p className="pt-20 about-section pb-40">
              Our idea gives the opportunity to small and big investors to enjoy
              the profits of the overall investment from all community members
              combined. Even if the project doesn’t kick off big time, we will
              still be making our $$ along the way. But.. if we actually do get
              a lot more traction, we can create (for example) more NFTs for
              these new investors, grow the existing community, raise the bar on
              our current passive income plan and on top of that… we will have
              the extra funds to create new things that will bring even more
              value to all of us.
            </p>
            <div className="about-phase">
              <h3 className="f-35 pt-30 pt-2">Phase 1</h3>
              <p className="pt-3 pb-40">
                As soon as xrp hits 10$, we will immediately sell 100,000 XRP
                for a total value of 1,000,000 USDC. The main part of this
                amount will be invested at a trustworthy custodian or bank which
                will provide us with an absolute minimum of 6% APY.
              </p>
              <p className="pt-3 pb-40">
                At the moment we have had a few discussions with Coinmerce BV, a
                Dutch crypto custodian which is regulated with the Dutch
                National Bank. After deliberation we have decided that they are
                the perfect fit for our needs. They will provide us a stable and
                secure 7% APY which is enough to be able to payout all the
                investors
              </p>
              <p className="pt-3 pb-40">
                Of course there are other platforms we can go with. Nexo f.e.
                offers an APY of 10-12%, but while we do not have any direct
                contact with them, the difference in profit just doesn't
                outweigh the risk. There is still a small possibility that we
                invest a very small amount with them, but only when we are
                absolute certain that we already have the base passive income
                covered through a more trustworthy custodian like mentioned
                above.
              </p>
              <p className="pt-3 pb-40">
                After receiving our APY, it's time to pay our bull holders. To
                avoid any money loss due to crypto market fluctuations, we will
                only convert our yearly earned USDC to XRP, the moment payment
                is set to go out to holders.
              </p>
              <p className="pt-3 pb-40">
                Our automatic system will first scan your wallet, count the
                amount of bulls you hold, connect you to the right tier, check
                the correct dollar amount for that tier and convert it to XRP.
                Then payment will then go straight to the holder's wallet
                address. This way we avoid any issues with delays etc. to bank
                accounts, but also gives our investors full freedom to choose
                whatever they want to do with their income while they receive it
                in crypto.
              </p>
              <h3 className="f-35 pt-30 pt-2">Phase 2</h3>
              <p className="pt-3 ">
                The amount of USDC that is left after everyone has been paid,
                will be used to generate an even higher ROI for our community.
              </p>

              <div className="pt-3  d-flex gap-2">
                <p className="income"> &#8226;</p>
                <p className="about-section">
                  20% will be used to top up the locked funds to passively
                  increase the community’s ROI
                </p>
              </div>
              <p className="pt-3 d-flex gap-2">
                <p className="about-section income "> &#8226;</p>20% will be used
                to invest in “safe” projects (f.e. delegating to Flare Networks
              </p>
              <p className="pt-3  d-flex gap-2">
                <p className="about-section income "> &#8226;</p>20% will be used
                for higher risk investments (f.e. swing- and/or day trading);
              </p>
              <p className="pt-3 d-flex gap-2">
                <p className="about-section income "> &#8226;</p>20% will go to
                our treasury to fund new goals
              </p>

              <p className="pt-3 pb-40 d-flex gap-2">
                <p className="about-section income "> &#8226;</p> 20% goes to the
                project leader to keep everything running smooth{" "}
              </p>

              <h3 className="f-35 pt-30 pt-2">Phase 3</h3>
              <p className="pt-3">
                At the end of each year (starting from year 2)
              </p>
              <p className="pt-3  d-flex gap-2">
                <p className="about-section income "> &#8226;</p> 50% of the
                generated profits (if any) of phase 2 will be used to top up the
                already locked funds to passively increase the community’s ROI
              </p>
              <p className="pt-3 d-flex gap-2">
                <p className="about-section income "> &#8226;</p>50% will be added
                to existing delegations or put into any new (as safe as
                possible) projects
              </p>
              {/* <p className="pt-3 pb-40  d-flex gap-2">
                <p className="about-section income "> &#8226;</p>15% will be used
                for single or multiple giveaways, depending on the amount
              </p> */}
            </div>
          </div>
        </div>
      </section>
      <section>
        <Faq />
      </section>
    </>
  );
};

export default Passiveincome;
