import React, { useState } from 'react'
import Header from './components/header.js'
import Section from './components/Section.js'
import Banner from './components/banner.js'
import Model3 from './assets/pics/Model3.jpg'
import ModelS from './assets/pics/ModelS.jpg'
import ModelX from './assets/pics/ModelX.jpg'
import ModelY from './assets/pics/ModelY.jpg'
import SolarPanels from './assets/pics/SolarPanels.jpg'
import SolarRoof from './assets/pics/SolarRoof.jpg'
import Accesories from './assets/pics/Accesorios.jpg'
import './App.css'

const App = () => {
  
    return (
      <div className="App">
        <Header />
        <div className='App_ItemsContainer'>
          <Section 
            id=""
            title='Model 3'
            desc='Order Online for Touchless Delivery'
            desclink=''
            backgroundImg={Model3}
            leftBtnTxt = 'CUSTOM ORDER'
            leftBtnLink = 'https://www.tesla.com/model3/design'
            RightBtnTxt = 'EXISTING INVENTORY'
            RightBtnLink = 'https://www.tesla.com/inventory/new/m3'
            twoButtons = 'true'
            first
          />
          <Section 
            id="my"
            title='Model Y'
            desc='Order Online for Touchless Delivery'
            desclink=''
            backgroundImg={ModelY}
            leftBtnTxt = 'CUSTOM ORDER'
            leftBtnLink = 'https://www.tesla.com/modely/design'
            RightBtnTxt = 'EXISTING INVENTORY'
            RightBtnLink = 'https://www.tesla.com/inventory/new/my'
            twoButtons = 'true'
          />
          <Section 
            id=""
            title='Model S'
            desc='Order Online for Touchless Delivery'
            desclink=''
            backgroundImg={ModelS}
            leftBtnTxt = 'CUSTOM ORDER'
            leftBtnLink = ''
            RightBtnTxt = 'EXISTING INVENTORY'
            RightBtnLink = ''
            twoButtons = 'true'
          />
          <Section 
            id=""
            title='Model X'
            desc='Order Online for Touchless Delivery'
            desclink=''
            backgroundImg={ModelX}
            leftBtnTxt = 'CUSTOM ORDER'
            leftBtnLink = 'https://www.tesla.com/models/design'
            RightBtnTxt = 'EXISTING INVENTORY'
            RightBtnLink = 'https://www.tesla.com/inventory/new/ms'
            twoButtons = 'true'
          />
          <Section 
            id=""
            title='Solar Panels'
            desc='Lowest Cost Solar Panels in America'
            desclink=''
            backgroundImg={SolarPanels}
            leftBtnTxt = 'CUSTOM ORDER'
            leftBtnLink = 'https://www.tesla.com/energy/design'
            RightBtnTxt = 'LEARN MORE'
            RightBtnLink = 'https://www.tesla.com/solarpanels'
            twoButtons = 'true'
          />
          <Section 
            id=""
            title='Solar Roof'
            desc='Produce Clean Energy From Your Roof'
            desclink=''
            backgroundImg={SolarRoof}
            leftBtnTxt = 'CUSTOM ORDER'
            leftBtnLink = 'https://www.tesla.com/solarroof/design'
            RightBtnTxt = 'LEARN MORE'
            RightBtnLink = 'https://www.tesla.com/solarroof'
            twoButtons = 'true'
          />
          <Section 
            id=""
            title='Accesories'
            desc=''
            desclink=''
            backgroundImg={Accesories}
            leftBtnTxt = 'SHOP NOW'
            leftBtnLink = 'https://www.tesla.com/shop?tesref=true'
            RightBtnTxt = ''
            RightBtnLink = ''
            twoButtons = 'false'
          />
        </div>
      </div>
    )
  }
  
  export default App