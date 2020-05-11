import React,{useState} from 'react';
import {Carousel } from"react-bootstrap"




  function SliderComponent (props) {
 
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
      setDirection(e.direction);
    }

        return(
            <div className="fltL">
              

              <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>


         {props.items.map(function(item,index){

     
        return (
          <Carousel.Item key={item.title}>
          <div className="bg_crsl"></div>
            <img
              className="d-block w-100"
              src={item.image}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>{item.title}</h3>
              <p> {item.description}</p>
            <div className="readbtn">{item.button}</div>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}   
      
    </Carousel>
  





            </div>
        )
    
}
export default SliderComponent