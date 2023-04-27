import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import "../CounterUp/CounterUp.css"

const CounterupPage = () => {

    const [counteron, setCounterOn] = useState(false)
    return (
        <>


            <div className='counter-bg text-center'>
                <div className="container">
                    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)} >
                        <div className="row justify-content-center">
                            <div className="col-sm-3 col-6 mt-sm-0 " data-aos={"flip-left"}>
                                <div className="counter">
                                    {counteron && <CountUp start={0} end={10} duration={2} delay={0} />} <span>k</span>
                                </div>
                                <p className='about-counter'>NFTs</p>
                            </div>
                            <div className="col-sm-3 col-6 mt-sm-0" data-aos={"flip-left"}>
                                <div className="counter">
                                    {counteron && <CountUp start={0} end={7} duration={2} delay={0} />} <span>k+</span>
                                </div>
                                <p className='about-counter'> Owners</p>

                            </div>
                            <div className="col-sm-3 col-6 mt-sm-0 mt-4" data-aos={"flip-left"} >
                                <div className="counter">
                                    {counteron && <CountUp start={0} end={2} duration={2} delay={0} />} <span>+</span>
                                </div>
                                <p className='about-counter'>Floorprice (XRP)</p>

                            </div>
                            {/* <div className="col-sm-3 col-6 mt-sm-0 mt-4" data-aos={"flip-left"}>
                                <div className="counter">
                                    {counteron && <CountUp start={0} end={25} duration={2} delay={0} />} <span>+</span>
                                </div>
                                <p className='about-counter'>Volume trade (ether)</p>

                            </div> */}
                        </div>
                    </ScrollTrigger>
                </div>
            </div>
        </>
    )
}

export default CounterupPage