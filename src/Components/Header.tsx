import React, {useState, FC} from 'react'
import { Link } from 'react-router-dom'
import redOval from "../Assets/images/header/redOval.svg"
import redVector from "../Assets/images/header/redVector.svg"

const Header:FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false)
  const toogleMenu = ():void => {
    setIsActive(!isActive)
  }
  console.log(isActive);
  return (
    <>
    <div className="header-container">
      <div className="header-frame">
        <div className="header-redCol">
        </div>
        <div className="header-companyName">
          <h2>CPGD</h2>
          <p>Consumer Packaged Goods Directory</p>
        </div>
        <nav className='header-nav'>
          <div className='header-navWrapper'>
            <Link to={""}>Directory</Link>
            <Link to={""}>Team</Link>
            <Link to={""}>STFU</Link>
            <Link to={""}>Investment Guide</Link>
            <Link to={""}>Newsletter</Link>
            <Link to={""}>CNSMR CAPITAL</Link>
          </div>
        </nav>
        <div className="header-navSuggest">
          <Link to={""}>
            <img src={redOval} alt="red-dot" />
            <div>Browse</div>
          </Link>
          <Link to={""}>
            <img src={redVector} alt="red-vector" />
            <div>Submit</div>
          </Link>
        </div>
        <div className="header-menuBtn-div">
          <div className="header-menuBtn" onClick={toogleMenu}>
            <div className={`bar1 ${isActive? "change" : ""}`}></div>
            <div className={`bar2 ${isActive? "change" : ""}`}></div>
            <div className={`bar3 ${isActive? "change" : ""}`}></div>
          </div>
        </div>
      </div>    
      <div className={`header-navOverlay ${isActive? "showNav" : ""}`}>
        <div className="header-suggestMobile">
          <Link to={""}>Browse</Link>
          <Link to={""}>Submit</Link>
        </div>
        <div className="header-navMobile">
          <Link to={""}>Directory</Link>
          <Link to={""}>Team</Link>
          <Link to={""}>STFU</Link>
          <Link to={""}>Investment Guide</Link>
          <Link to={""}>Newsletter</Link>
          <Link to={""}>CNSMR CAPITAL</Link>
        </div>
      </div>

    </div>
    </>
  )
}

export default Header