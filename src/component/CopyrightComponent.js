import React from"react"
import { Container } from "react-bootstrap"
import { ArrowRight } from 'react-bootstrap-icons';
class CopyrightComponent extends React.Component{
    render(){
        return(
            <div id="footer" style={{width:100+"%",float:"left"}}>

                <Container >
                <div className="copyright">
        © Copyright <strong><span>Mamba</span></strong>. All Rights Reserved
      </div>

      <div className="credits">
      
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
      {/*<a href="#" class="back-to-top"><ArrowRight className="back_icon" /></a>*/}
                </Container>
            </div>
        )
    }
}
export default CopyrightComponent