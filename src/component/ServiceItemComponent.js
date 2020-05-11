import React from"react"
import {Col} from "react-bootstrap"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ArrowRight } from 'react-bootstrap-icons';
class ServiceItemComponent extends React.Component{
    render(){
        return(
            <div>

<Col lg={4} Col md={6} className="icon-box_services" >
<div class="icon"><FontAwesomeIcon icon={this.props.service.icon} /></div>

            <h4 className="title"><a href="">{this.props.service.title}</a></h4>
            <p className="description">{this.props.service.description}</p>
          </Col>


            </div>
        )
    }
}
export default ServiceItemComponent