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
            
            <img src={Advisor1} className="advisor-img" alt="advisor-photo" />
           
            <div className="homePage-advisorPhoto-detail">
              <h2>Doug Bouton</h2>
              <p>Co-founder of Halo Top</p>
            </div>
          </div>
          <div className="homePage-advisorPhoto-box2">
            <img src={Advisor2} className="advisor-img" alt="advisor-photo" />
            <div className="homePage-advisorPhoto-detail">
              <h2>Christina Alexandre Drake</h2>
              <p>National Team Specialist of Parker Ltd</p>
            </div>
          </div>
          <div className="homePage-advisorPhoto-box3">
            <img src={Advisor3} className="advisor-img" alt="advisor-photo" />
            
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
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>


    </div>
    </>
  )
}

export default HomePage