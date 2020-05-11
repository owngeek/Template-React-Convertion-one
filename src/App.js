import React from 'react';

import './App.css';
import{Col,Container} from"react-bootstrap"
import TopbarComponent from"./component/TopbarComponent"
import NavbarComponent from"./component/NavbarComponent"
import SliderComponent from"./component/SliderComponent"
import AboutComponent from"./component/AboutComponent"
import ServicesComponent from"./component/ServicesComponent"
import PortfolioComponent from"./component/PortfolioComponent"
import TeamComponent from"./component/TeamComponent"
import FaqComponent from"./component/FaqComponent"
import ContactComponent from"./component/ContactComponent"
import FooterComponent from"./component/FooterComponent"
import CopyrightComponent from"./component/CopyrightComponent"
import menuArray from"./dynamic/menuArray"
import sliderArray from"./dynamic/sliderArray"
import {VerticleButton as ScrollUpButton} from "react-scroll-up-button";





class App extends React.Component{
 render(){

  

  let mainslider = <SliderComponent
  items={sliderArray}
  />



 

  let mainmenu=menuArray.map(function(n,index){
    return<NavbarComponent
    key={index}
    myn={n}
    />
  })
    return(
      <div>
        
     <TopbarComponent/>
     <Container>
     <div className="menu_width " >{mainmenu}</div>
     </Container>
     {mainslider}
     <AboutComponent/>
     <ServicesComponent/>
     <PortfolioComponent/>
     <TeamComponent/>
     <FaqComponent/>
     <ContactComponent/>
     <FooterComponent/>
     <CopyrightComponent/>
     <ScrollUpButton
          EasingType="easeOutQuad"
          ShowAtPosition={151}
        />
      </div>
    )
  }
}

export default App;
