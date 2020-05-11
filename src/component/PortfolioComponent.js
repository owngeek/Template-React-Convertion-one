import React from "react"
import { Container,Col,Row } from "react-bootstrap"
import ItemPortfolioComponent from"../component/ItemPortfolioComponent"
import portfolioArray from"../dynamic/portfolioArray"
class PortfolioComponent extends React.Component{
    render(){

   let  pitemMain = portfolioArray.map(function(n,index){
        return <ItemPortfolioComponent
        key={index}
        pitem={n}
        />
      })
        return(
            <div className="portfolio_wrpr">
<Container>

<div className="section-title2">
          <h2>Our Portfolio</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>


        <Row style={{display:"block"}}>
          <Col lg={12}>
            <ul id="portfolio-flters">
              <li className="filter-active">All</li>
              <li  className="">App</li>
              <li className="">Card</li>
              <li  className="">Web</li>
            </ul>
          </Col>

{pitemMain}
        </Row>




</Container>
            </div>
        )
    }
}
export default PortfolioComponent