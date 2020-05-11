import React from"react"
import {Container,Col} from"react-bootstrap"
class TopbarComponent extends React.Component{
    render(){
        return(
            <div>



<div className="topbar_border">
 <Container>

 <Col sm={3} className="topbar_cntnt fltL">
     <img src="../img/msg_icon.jpg"/>
 <span>contact@example.com </span>

 </Col>
 <Col sm={3} className="topbar_cntnt fltL">
     <img src="../img/phone_icon.jpg" style={{marginTop:0}}/>
 <span>+1 5589 55488 55     </span>

 </Col>
 <Col sm={3} className="fltR smedia">
     <div style={{float:"right"}}>
 <a href=""><img src="../img/twtr_icon.jpg"/></a>
 <a href=""><img src="../img/fb_icon.jpg"/></a>
 <a href=""><img src="../img/instgrm_icon.jpg"/></a>
 <a href=""><img src="../img/skype_icon.jpg"/></a>
 <a href=""><img src="../img/lnkd_icon.jpg"/></a>
 </div>
 </Col>
 
 </Container>
 <img src="..\img\logo.jpg" className="Logo"/>

</div>











            </div>
        )
    }
}
export default TopbarComponent