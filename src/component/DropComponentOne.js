import React from"react"
import {NavDropdown} from"react-bootstrap"
import DropComponentTwo from"../component/DropComponentTwo"
class DropComponentOne extends React.Component{
    render(){
      /* let mainMenuTwo = this.props.menu.map(function(n,index){
           return<DropComponentTwo
           key={index}
           menuTwo={n}
           /> 
        })*/
        return(
            <div>
               
        <NavDropdown.Item className="drop_pdng">{this.props.menu.title}
        { /*mainMenuTwo*/}
        <DropComponentTwo/>
        </NavDropdown.Item>
         
        
     
            </div>
        )
    }
}
export default DropComponentOne