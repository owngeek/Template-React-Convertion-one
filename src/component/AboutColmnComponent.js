import React from "react"
import {Col} from "react-bootstrap"


class AboutColmnComponent extends React.Component{
    render(){
        return(
            <div>


<Col lg={4} Col md={6} className="content-item fltL" >
            <span>{this.props.abtcntn.number}</span>
            <h4>{this.props.abtcntn.title}</h4>
            <p>{this.props.abtcntn.description}</p>
          </Col>

       

         




            </div>
        )
    }
} 
export default AboutColmnComponent