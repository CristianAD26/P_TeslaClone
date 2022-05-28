import React from 'react'
import './header.css'
import TeslaLogo from '../assets/pics/teslaLogoText.png'

const Header = () => {
    return (
        <section className="header">
            <section className="header_logo">
                <img className="logo_img" src={TeslaLogo} alt="Tesla Logo" />
            </section>
            <section className="header_menu">
                <p>Model S</p>
                <p>Model 3</p>
                <p>Model X</p>
                <p>Model Y</p>
                <p>Solar Roof</p>
                <p>Solar Panels</p>
            </section>
            <section className="header_options">
                <p>Shop</p>
                <p>Account</p>
                <p>Menu</p>
            </section>
        </section>
    )
}

export default Header