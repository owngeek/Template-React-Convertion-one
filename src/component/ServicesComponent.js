import React from"react"
import { Container } from "react-bootstrap"
import ServiceItemComponent from"../component/ServiceItemComponent"
import serviceArray from"../dynamic/serviceArray"
class ServicesComponent extends React.Component{
    render(){

       let itemService = serviceArray.map(function(n,index){
            return<ServiceItemComponent
            key={index}
            service={n}
            />
        })


        return(
            <div>

<Container className="services">
<div className="section-title">
          <h2 style={{paddingTop:30}}>Services</h2>
        </div>

        {itemService}
</Container>


            </div>
        )
    }
}
export default ServicesComponent