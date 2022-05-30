import React from 'react'
import './asidemenu.css'
import { IoMdClose } from 'react-icons/io'

const Menu = ({ showSidebar }) => {
  return (
    <main className="main" onClick={showSidebar}>
      <aside className="aside">
        <button type="button" className="button-close" onClick={showSidebar}>
          <IoMdClose className="icon-close" />
        </button>
        <section className="text">
          <a href="https://www.tesla.com/inventory/new/m3">
            <p>Existing Inventory</p>
          </a>
          <a href="https://www.tesla.com/inventory/used/m3">
            <p>Used Inventory</p>
          </a>
          <a href="https://www.tesla.com/tradein">
            <p>Trade-In</p>
          </a>
          <a href="https://www.tesla.com/drive">
            <p>Test Drive</p>
          </a>
          <a href="https://www.tesla.com/insurance">
            <p>Insurance</p>
          </a>
          <a href="https://www.tesla.com/cybertruck">
            <p>Cybertruck</p>
          </a>
          <a href="https://www.tesla.com/roadster">
            <p>Roadster</p>
          </a>
          <a href="https://www.tesla.com/semi">
            <p>Semi</p>
          </a>
          <a href="https://www.tesla.com/charging">
            <p>Charging</p>
          </a>
          <a href="https://www.tesla.com/powerwall">
            <p>Powerwall</p>
          </a>
          <a href="https://www.tesla.com/commercial">
            <p>Commercial Energy</p>
          </a>
          <a href="https://www.tesla.com/utilities">
            <p>Utilities</p>
          </a>
          <a href="https://www.tesla.com/findus">
            <p>Find Us</p>
          </a>
          <a href="https://www.tesla.com/support">
            <p>Support</p>
          </a>
          <a href="https://ir.tesla.com/">
            <p>Investor Relations</p>
          </a>
        </section>
      </aside>
    </main>
  )
}

export default Menu
