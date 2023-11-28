import React, { FC } from 'react'
import CompanyLogo from "../Assets/images/homePage/CompanyLogo.png"
import cursorPointer from "../Assets/images/homePage/cursorPointer.png"
import Flower1 from "../Assets/images/homePage/Flower1.png"
import Flower2 from "../Assets/images/homePage/Flower2.png"
import Flower3 from "../Assets/images/homePage/Flower3.png"
import Cloud1 from "../Assets/images/homePage/Cloud1.png"
import Cloud2 from "../Assets/images/homePage/Cloud2.png"
import Mountain1 from "../Assets/images/homePage/Mountain1.png"
import Mountain2 from "../Assets/images/homePage/Mountain2.png"
import Brand1 from "../Assets/images/homePage/Brand1.png"
import Brand2 from "../Assets/images/homePage/Brand2.png"
import Brand3 from "../Assets/images/homePage/Brand3.png"
import Brand4 from "../Assets/images/homePage/Brand4.png"
import Brain from "../Assets/images/homePage/Brain.png";
import Advisor1 from "../Assets/images/homePage/Advisor1.png"
import Advisor2 from "../Assets/images/homePage/Advisor2.png"
import Advisor3 from "../Assets/images/homePage/Advisor3.png"
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import Partner1 from "../Assets/images/homePage/Partner1.png"
import Partner2 from "../Assets/images/homePage/Partner2.png"
import Partner3 from "../Assets/images/homePage/Partner3.png"
import Partner4 from "../Assets/images/homePage/Partner4.png"
import Partner5 from "../Assets/images/homePage/Partner5.png"
import Suggestion1 from "../Assets/images/homePage/Suggestion1.png";
import Suggestion2 from "../Assets/images/homePage/Suggestion2.png";
import Suggestion3 from "../Assets/images/homePage/Suggestion3.png";
import VictorySign from "../Assets/images/homePage/VictorySign.png";


const HomePage: FC = () => {
  return (
    <>
    <div className="homePage-container">
      <div className="homePage-mainFrame">
        <div className="homePage-companyHeadline">
          <img src={CompanyLogo} alt="Company-Logo" />
          <div>Investment club fueling the next generation of CPG,
             backed a crew of CPGD'S <span> 9,000 </span> readers.
          </div>
        </div>
        <div className="homePage-img-div">
          <img className='flower1' src={Flower1} alt="Flower-1" />
          <img className='flower2' src={Flower2} alt="Flower-2" />
          <img className='flower3' src={Flower3} alt="Flower-3" />
          <img className='cloud1' src={Cloud1} alt="Cloud-1" />
          <img className='cloud2' src={Cloud2} alt="Cloud-2" />
          <img className='mountain2' src={Mountain2} alt="{Mountain-2}" />
          <img className='mountain1' src={Mountain1} alt="{Mountain-1}" />
        </div>
        <div className="homePage-modal-div">
          <div className='homePage-modalwrapper'>
            <div>APPLY NOW</div>
            <img src={cursorPointer} alt="cursor-pointer" />
            <div>APPLY NOW</div>
            <img src={cursorPointer} alt="cursor-pointer" />
            <div>APPLY NOW</div>
            <img src={cursorPointer} alt="cursor-pointer" />
            <div>APPLY NOW</div>
            <img src={cursorPointer} alt="cursor-pointer" />
            <div>APPLY NOW</div>
            <img src={cursorPointer} alt="cursor-pointer" />
            <div>APPLY NOW</div>
            <img src={cursorPointer} alt="cursor-pointer" />
            <div>APPLY NOW</div>
            <img src={cursorPointer} alt="cursor-pointer" />
            <div>APPLY NOW</div>
            <img src={cursorPointer} alt="cursor-pointer" />
            <div>APPLY NOW</div>
            <img src={cursorPointer} alt="cursor-pointer" />
          </div>
        </div>
      </div>
      
      <div className="homePage-dealFrame">
        <div className="homePage-dealHeadline">Access to Deal Flow</div>
        <div className="homePage-dealParagraph">Because of our pulse on emerging trends, 
        our team already sources deal flow for leading consumer VCs. 
        We’ve facilitated over <span>$1M</span> in investments and get access to deals before they hit the mainstream. </div>
        <div className="homePage-dealExp">Some of our team’s investments to date:</div>
        <div className="homePage-dealImage-div">
          <img className="brand1" src={Brand1} alt="Brand1" />
          <img className="brand2" src={Brand2} alt="Brand2" />
          <img className="brand3" src={Brand3} alt="Brand3" />
          <img className="brand4" src={Brand4} alt="Brand4" />
        </div>
      </div>


      <div className="homePage-partnerFrame">
        <div className="homePage-partnerHeadBox">
          <img className="brain-logo" src={Brain} alt="brain-logo" />
          <div className="homePage-partnerHeadline">
            <div>Expert Advisors & Partners</div>
            <p>Members and Partners of our fund 
              include iconic figures in CPG.</p>
          </div>
        </div>
      </div>


      <div className="homePage-advisorPhoto-div">
        <div className="homePage-advisorPhoto-wrapper">
          <div className="homePage-advisorPhoto-box1">
            <img src={Advisor1} className="advisor-img" alt="advisor" />
            <div className="homePage-advisorPhoto-detail">
              <h2>Doug Bouton</h2>
              <p>Co-founder of Halo Top</p>
            </div>
            <div className="homePage-arrow-div">
              <FaArrowCircleLeft />
              <FaArrowCircleRight />
            </div>
          </div>
          <div className="homePage-advisorPhoto-box2">
            <img src={Advisor2} className="advisor-img" alt="advisor" />
            <div className="homePage-advisorPhoto-detail">
              <h2>Christina Alexandre Drake</h2>
              <p>National Team Specialist of Parker Ltd</p>
            </div>
          </div>
          <div className="homePage-advisorPhoto-box3">
            <img src={Advisor3} className="advisor-img" alt="advisor" />
            <div className="homePage-advisorPhoto-detail">
              <h2>Oskar Fischer</h2>
              <p>Product Solutions Manager of Abbott, 
                  Kemmer and Powlowski</p>
            </div>
          </div>
        </div>
      </div>

      <div className="homePage-partnerBrand-slide">
        <div className="homePage-partnerBrand-slideWrapper">
          <div>
            <img src={Partner1} alt="Partner1" />
          </div>
          <div>
            <img src={Partner2} alt="Partner2" />
          </div>
          <div>
            <img src={Partner3} alt="Partner3" />
          </div>
          <div>
            <img src={Partner4} alt="Partner4" />
          </div>
          <div>
            <img src={Partner5} alt="Partner5" />
          </div>
          <div>
            <img src={Partner1} alt="Partner1" />
          </div>
          <div>
            <img src={Partner2} alt="Partner2" />
          </div>
          <div>
            <img src={Partner3} alt="Partner3" />
          </div>
          <div>
            <img src={Partner4} alt="Partner4" />
          </div>
          <div>
            <img src={Partner5} alt="Partner5" />
          </div>
          <div>
            <img src={Partner1} alt="Partner1" />
          </div>
          <div>
            <img src={Partner2} alt="Partner2" />
          </div>
          <div>
            <img src={Partner3} alt="Partner3" />
          </div>
          <div>
            <img src={Partner4} alt="Partner4" />
          </div>
          <div>
            <img src={Partner5} alt="Partner5" />
          </div>
          <div>
            <img src={Partner1} alt="Partner1" />
          </div>
          <div>
            <img src={Partner2} alt="Partner2" />
          </div>
          <div>
            <img src={Partner3} alt="Partner3" />
          </div>
          <div>
            <img src={Partner4} alt="Partner4" />
          </div>
          <div>
            <img src={Partner5} alt="Partner5" />
          </div>
        </div>
      </div>
      <div className="homePage-suggestion-div">
        <div className="homePage-suggestion-boxes">
          <div className="homePage-suggestion-box1">
            <img src={Suggestion1} alt="Suggestion1" className='homePage-suggestion-img1' />
            <p>Mentorship</p>
          </div>
          <div className="homePage-suggestion-box2">
            <img src={Suggestion2} alt="Suggestion2" className='homePage-suggestion-img2' />
            <p>Invite to Quarterly Dinners</p>
          </div>
          <div className="homePage-suggestion-box3">
            <img src={Suggestion3} alt="Suggestion3" className='homePage-suggestion-img3' />
            <p>Access to Deal Flow</p>
          </div>
        </div>
        <div className="homePage-suggestion-end">
          <div className="homePage-suggestion-endHeadline">
            Get in on our deals
          </div>
          <div className="homePage-suggestion-endDetails">
          <p>Apply to be an LP in our investment club.</p>
          <p>Minimum checks are <span>$5k</span> and you don’t 
          need to be accredited.</p>
          <p>Because these deals are too sweet to gate-keep.</p>
          </div>

          <div className="homePage-modal-div">
            <div className='homePage-modalwrapper'>
              <div>APPLY NOW</div>
              <img src={cursorPointer} alt="cursor-pointer" />
              <div>APPLY NOW</div>
              <img src={cursorPointer} alt="cursor-pointer" />
              <div>APPLY NOW</div>
              <img src={cursorPointer} alt="cursor-pointer" />
              <div>APPLY NOW</div>
              <img src={cursorPointer} alt="cursor-pointer" />
              <div>APPLY NOW</div>
              <img src={cursorPointer} alt="cursor-pointer" />
              <div>APPLY NOW</div>
              <img src={cursorPointer} alt="cursor-pointer" />
              <div>APPLY NOW</div>
              <img src={cursorPointer} alt="cursor-pointer" />
              <div>APPLY NOW</div>
              <img src={cursorPointer} alt="cursor-pointer" />
              <div>APPLY NOW</div>
              <img src={cursorPointer} alt="cursor-pointer" />
            </div>
          </div>
          <img src={VictorySign} alt="VictorySign" 
          className='homePage-suggestion-VictorySign-img' />
        </div>
      </div>
    </div>
    </>
  )
}

export default HomePage