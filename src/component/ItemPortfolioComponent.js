import React from "react"
import {Col,Modal,Button} from"react-bootstrap"
import { ArrowRight } from 'react-bootstrap-icons';


  function ItemPortfolioComponent(props) {
  const [modalShow, setModalShow] = React.useState(false);
  
  const onHide = () => setModalShow(false); 
        return(
          <div>
<Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        
      <img src={props.pitem.image} className="img-fluid" alt="" title="title1"/>
      </Modal.Header>
    </Modal>

<Col lg={4} md={6} className="portfolio-item filter-app" >
            <div className="portfolio-wrap">
              <img src={props.pitem.image} className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>{props.pitem.title}</h4>
                <p>{props.pitem.description}</p>
                <div className="portfolio-links">
                  <a href="#" variant="primary" onClick={() => setModalShow(true)} className="venobox vbox-item" title="App 1"><ArrowRight className="icon_servi2"  /></a>
                  
                 
                  <a href="#" title="More Details"><ArrowRight className="icon_servi2"/></a>
                </div>
              </div>
            </div>
          </Col>

                
            </div>
        )
    
}
export default ItemPortfolioComponent