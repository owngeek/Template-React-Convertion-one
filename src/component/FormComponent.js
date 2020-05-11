import React from "react"
import {Col,Form} from"react-bootstrap"
class FormComponent extends React.Component{
    render(){
        return(
            <div>

<Col lg={12} className="aos-init" >
            <form action="#" method="post" role="form" className="php-email-form">
              <div className="form-row">
                <Col lg={6} className="form-group">
                  
                  <Form.Control type="text" placeholder="Your Name" className="form-control" />
                </Col>
                
                <Col lg={6} className="form-group">
            
                  <Form.Control type="email" placeholder="Your Name" className="form-control" />
                </Col>
              </div>
              <div className="form-group">
                
                <Form.Control type="text" placeholder="subject" className="form-control" />  
              </div>
              <div className="form-group">
                <textarea className="form-control"  rows="5"  placeholder="Message"></textarea>
               
              </div>
              
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
          </Col>



            </div>
        )
    }
}
export default FormComponent