import React, { useState } from 'react'
import Header from './components/header.js'
import Section from './components/Section.js'
import Model3 from './assets/pics/Model3.jpg'
import ModelS from './assets/pics/ModelS.jpg'
import ModelX from './assets/pics/ModelX.jpg'
import ModelY from './assets/pics/ModelY.jpg'
import SolarPanels from './assets/pics/SolarPanels.jpg'
import SolarRoof from './assets/pics/SolarRoof.jpg'
import Accesories from './assets/pics/Accesorios.jpg'

const App = () => {
  
    return (
      <div className="App">
        <Header />
        <div className='App_ItemsContainer'>
          <Section 
            title='Model 3'
            desc='Order Online for Touchless Delivery'
            desclink=''
            backgroundImg={Model3}
            leftBtnTxt = 'Custom order'
            leftBtnLink = ''
            RightBtnTxt = 'Existing Inventory'
            RightBtnLink = ''
            twoButtons = 'true'
            first
          />
          <Section 
            title='Model Y'
            desc='Order Online for Touchless Delivery'
            desclink=''
            backgroundImg={ModelY}
            leftBtnTxt = 'Custom order'
            leftBtnLink = ''
            RightBtnTxt = 'Existing Inventory'
            RightBtnLink = ''
            twoButtons = 'true'
          />
          <Section 
            title='Model S'
            desc='Order Online for Touchless Delivery'
            desclink=''
            backgroundImg={ModelS}
            leftBtnTxt = 'Custom order'
            leftBtnLink = ''
            RightBtnTxt = 'Existing Inventory'
            RightBtnLink = ''
            twoButtons = 'true'
          />
          <Section 
            title='Model X'
            desc='Order Online for Touchless Delivery'
            desclink=''
            backgroundImg={ModelX}
            leftBtnTxt = 'Custom order'
            leftBtnLink = ''
            RightBtnTxt = 'Existing Inventory'
            RightBtnLink = ''
            twoButtons = 'true'
          />
          <Section 
            title='Solar Panels'
            desc='Lowest Cost Solar Panels in America'
            desclink=''
            backgroundImg={SolarPanels}
            leftBtnTxt = 'Custom order'
            leftBtnLink = ''
            RightBtnTxt = 'Learn more'
            RightBtnLink = ''
            twoButtons = 'true'
          />
          <Section 
            title='Solar Roof'
            desc='Produce Clean Energy From Your Roof'
            desclink=''
            backgroundImg={SolarRoof}
            leftBtnTxt = 'Custom order'
            leftBtnLink = ''
            RightBtnTxt = 'Learn more'
            RightBtnLink = ''
            twoButtons = 'true'
          />
          <Section 
            title='Accesories'
            desc=''
            desclink=''
            backgroundImg={Accesories}
            leftBtnTxt = 'Shop now'
            leftBtnLink = ''
            RightBtnTxt = ''
            RightBtnLink = ''
            twoButtons = 'false'
          />
        </div>
      </div>
    )
  }
  
  export default App