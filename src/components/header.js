import React, { useState } from 'react'
import Aside from './asidemenu'
import './header.css'
import TeslaLogo from '../assets/pics/teslaLogoText.png'

const Header = () => {
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => { return setSidebar(!sidebar) }
  return (
    <section className="header">
      {sidebar && (
        <Aside showSidebar={showSidebar} />
      )}
      <div className="banner">
        <p><a className="ancla" href="https://www.tesla.com/impact">Read Tesla&apos;s 2021 Impact Report</a></p>
      </div>
      <div className="lower-menu">
        <section className="header_logo">
          <a href="https://www.tesla.com/">
            <img className="logo_img" src={TeslaLogo} alt="Tesla Logo" />
          </a>
        </section>
        <section className="header_menu">
          <p><a href="https://www.tesla.com/models">Model S</a></p>
          <p><a href="https://www.tesla.com/model3">Model 3</a></p>
          <p><a href="https://www.tesla.com/modelx">Model X</a></p>
          <p><a href="https://www.tesla.com/modely">Model Y</a></p>
          <p><a href="https://www.tesla.com/solarroof">Solar Roof</a></p>
          <p><a href="https://www.tesla.com/solarpanels">Solar Panels</a></p>
        </section>
        <section className="header_options">
          <p><a href="https://shop.tesla.com/">Shop</a></p>
          <p><a href="https://www.tesla.com/teslaaccount">Account</a></p>
          <p><button type="button" id="button-menu" onClick={showSidebar}>Menu</button></p>
        </section>
      </div>
    </section>
  )
}

export default Header
