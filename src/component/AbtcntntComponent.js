import React from"react"
import { ArrowRight } from 'react-bootstrap-icons';
import Icofont from 'react-icofont';
class AbtcntntComponent extends React.Component{
    render(){
        return(
            <div>
             <div className="icon-box "  >
              <div className="icon">
              <i className="fas fa-taxi" style={{color:"#666" ,fontSize:30}}></i>
                  </div>
              <h4 className="title"><a href="">{this.props.about.title}</a></h4>
              <p className="description">{this.props.about.description}</p>
            </div>
            </div>
        )
    }
}
export default AbtcntntComponent