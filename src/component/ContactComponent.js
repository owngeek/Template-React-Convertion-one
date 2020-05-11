import React from "react"
import { Container,Col } from "react-bootstrap"
import { ArrowRight } from 'react-bootstrap-icons';
import FormComponent from"../component/FormComponent"
class ContactComponent extends React.Component{
    render(){
        return(
            <div>
<Container className="contact">
<div class="section-title">
          <h2 style={{paddingTop:25,paddingBottom:5,}}>Contact Us</h2>
        </div>

        <Col lg={6} className="d-flex align-items-stretch aos-init aos-animate" >
            <div className="info-box" style={{paddingBottom:55}}>
            <ArrowRight className="icon_addrs bx bx-map" />
              <h3>Our Address</h3>
              <p>A108 Adam Street, New York, NY 535022</p>
            </div>
          </Col>


          <Col lg={3} className="d-flex align-items-stretch fltL" >
            <div className="info-box">
            <ArrowRight className="icon_addrs bx bx-map" />
              <h3>Email Us</h3>
              <p>info@example.com<br/>contact@example.com</p>
            </div>
          </Col>

          <Col lg={3} className="d-flex align-items-stretch fltL" >
            <div className="info-box">
            <ArrowRight className="icon_addrs bx bx-map" />
              <h3>Call Us</h3>
              <p>+1 5589 55488 55<br/>+1 6678 254445 41</p>
            </div>
          </Col>
<FormComponent/>
</Container>

                
            </div>
        )
    }
}
export default ContactComponent