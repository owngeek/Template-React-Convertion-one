import React from"react"
import {Container,Nav,NavDropdown,Navbar} from"react-bootstrap"
import MenuArray from"../dynamic/menuArray"
import DropComponentOne from"../component/DropComponentOne"


class NavbarComponent extends React.Component{
    
render(){
 let dropmenu =this.props.myn.submenu.map(function(n,index){
    return<DropComponentOne
    key={index}
    menu={n}
    />
  })
    return(
        <div>
            <Container>
          

           
<div className="drop_menu">
           <Nav  variant="pills"  >
      <Nav.Item>
        <Nav.Link  href="#/home" >
    
        {this.props.myn.title}
        <img src="..\img\arrow.jpg" className="Arrow"/>
        <NavDropdown > {dropmenu}</NavDropdown>
        </Nav.Link>
        
        
      </Nav.Item>
    
      


    
     
   
    
    </Nav>

    

    </div>



            </Container>
        </div>
    )
}
}
export default NavbarComponent
