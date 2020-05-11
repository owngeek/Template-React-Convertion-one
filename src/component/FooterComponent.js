import React from "react"
import { Container,Col,Form } from "react-bootstrap"
import { ArrowRight } from 'react-bootstrap-icons';
import FooterLinkComponent from"../component/FooterLinkComponent"
import usefullinkArray from"../dynamic/usefullinkArray"
class FooterComponent extends React.Component{
    render(){
     let uselink = usefullinkArray.map(function(n,index){
        return<FooterLinkComponent
        key={index}
        footer={n}
        />
      })
        return(
            <div className="wrpr_ftr" >
<Container id="footer" > 
<div className="footer-top">
<Col lg={3} md={6} className="footer-info">
            <h3>Mamba</h3>
            <p>
              A108 Adam Street <br/>
              NY 535022, USA<br/><br/>
              <strong>Phone:</strong> +1 5589 55488 55<br/>
              <strong>Email:</strong> info@example.com<br/>
            </p>
            <div className="social-links mt-3">
              <a href="#" className="twitter"><ArrowRight className="bx" /></a>
              <a href="#" className="facebook"><ArrowRight className="bx" /></a>
              <a href="#" className="instagram"><ArrowRight className="bx" /></a>
              <a href="#" className="google-plus"><ArrowRight className="bx" /></a>
              <a href="#" className="linkedin"><ArrowRight className="bx" /></a>
            </div>
          </Col>

          <Col lg={2} md={6} className="footer-links fltL" style={{marginRight:32}}>
            <h4>Useful Links</h4>
          {uselink}
</Col>

<Col lg={2} md={6} className="footer-links fltL" style={{marginRight:32}}>
            <h4>Useful Links</h4>
          {uselink}
</Col>

          <Col lg={4} md={6} className="footer-newsletter fltL">
            <h4>Our Newsletter</h4>
            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
            <Form>
              <input type="email" name="email"/><input type="submit" value="Subscribe"/>
            </Form>

          </Col>
</div>




</Container>

            </div>
        )
    }
}
export default FooterComponent