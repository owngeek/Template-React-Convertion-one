import React from "react"
import {Col} from"react-bootstrap"
import { ArrowRight } from 'react-bootstrap-icons';
class FooterLinkComponent extends React.Component{
    render(){
        return(
          

            <ul>
          
              <li><ArrowRight className="bx2" /> <a href="#">{this.props.footer.title}</a></li>
             
            </ul>
          


           
        )
    }
}
export default FooterLinkComponent