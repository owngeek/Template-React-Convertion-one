import React from"react"
import {Col} from"react-bootstrap"
class FaqOneComponent extends React.Component{
    render(){
        return(
            <div>

<Col lg={6} className="faq-item" >
            <h4>{this.props.faq.title}</h4>
            <p>
            {this.props.faq.description}
            </p>
          </Col>

            </div>
        )
    }
}
export default FaqOneComponent