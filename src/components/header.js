import React from 'react'
import './header.css'
import TeslaLogo from '../assets/pics/teslaLogoText.png'

const Header = () => {
    return (
        <section className="header">
            <div className='banner'>
                <p><a className="ancla" href='https://www.tesla.com/impact'>Read Tesla's 2021 Impact Report</a></p>
            </div>
            <div className='lower-menu'>
                <section className="header_logo">
                    <a href="https://www.tesla.com/">
                        <img className="logo_img" src={TeslaLogo} alt="Tesla Logo" />
                    </a>
                </section>
                <section className="header_menu">
                    <p><a href='https://www.tesla.com/models'>Model S</a></p>
                    <p><a href='https://www.tesla.com/model3'>Model 3</a></p>
                    <p><a href='https://www.tesla.com/modelx'>Model X</a></p>
                    <p><a href='https://www.tesla.com/modely'>Model Y</a></p>
                    <p><a href='https://www.tesla.com/solarroof'>Solar Roof</a></p>
                    <p><a href='https://www.tesla.com/solarpanels'>Solar Panels</a></p>
                </section>
                <section className="header_options">
                    <p><a href='https://shop.tesla.com/'>Shop</a></p>
                    <p><a href='https://www.tesla.com/teslaaccount'>Account</a></p>
                    <p><a href=''>Menu</a></p>
                </section>
            </div>
        </section>
    )
}

export default Header