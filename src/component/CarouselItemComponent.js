import React from 'react'
import {Carousel} from "react-bootstrap"
class CarouselItemComponent extends React.Component{

    render(){
     

     
        return(
           

<Carousel.Item>
          <div className="bg_crsl"></div>
            <img
              className="d-block w-100"
              src={this.props.item.image}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>{this.props.item.title}</h3>
              <p> {this.props.item.description}</p>
            <div className="readbtn">{this.props.item.button}</div>
            </Carousel.Caption>
          </Carousel.Item>


            
        )
    }
}
export default CarouselItemComponent