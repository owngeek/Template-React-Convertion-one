import React from"react"
import {Col,} from"react-bootstrap"
import {ArrowRight,} from"react-bootstrap-icons"
import Icofont from 'react-icofont';

class ProjectComponent extends React.Component{
    render(){
        return(
            <div>

<Col sm={12} md={3}  className="text-center fltL" >
            <div className="count-box">
            <i class="icofont-workers-group"></i>
              <span data-toggle="counter-up">232</span>
              <p>Happy Clients</p>
            </div>
          </Col>



            </div>
        )
    }
}
export default ProjectComponent