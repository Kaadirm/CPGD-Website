import React, {useState, FC, useEffect} from 'react'
import { Link } from 'react-router-dom'
import redOval from "../Assets/images/header/redOval.svg"
import redVector from "../Assets/images/header/redVector.svg"

const Header:FC = () => {
          //Variables
  //variable for closing and opening Hamburger Menu
  const [isActive, setIsActive] = useState<boolean>(false)
  //Setting state on the contrary (close and open)
  const toogleMenu = ():void => {
    setIsActive(!isActive)
  }

  //Setting false to prevent menu from staying open when it's not on mobile
  useEffect(() => {
    const closeMenuOnResize = () => {
      if (isActive && window.innerWidth > 976) {
        setIsActive(false);
      }
    };
    window.addEventListener('resize', closeMenuOnResize);
    
    //return function for useEffect to clear when component dismount
    return () => {
      window.removeEventListener('resize', closeMenuOnResize);
    };
  }, [isActive]);
  
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

      {/* Ham menu goes here (There is no actual link for) */}
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