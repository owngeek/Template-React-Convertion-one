import React,{useState} from 'react'
import { Container, Col,Modal,Button ,Row} from "react-bootstrap"
import AbtcntntComponent from"../component/AbtcntntComponent"
import AboutColmnComponent from"../component/AboutColmnComponent"
import ProjectComponent from"../component/ProjectComponent"
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import aboutContentArray from"../dynamic/aboutContentArray"
import aboutArray from"../dynamic/aboutArray"


    function AboutComponent() {

let aboutcntnt = aboutArray.map(function(n,index){
  return <AbtcntntComponent
  key={index}
  about={n}
  />
})


        const [modalShow, setModalShow] = React.useState(false);
        
        let abtclm = aboutContentArray.map(function(n,index){
          return<AboutColmnComponent
          key={index}
          abtcntn={n}
          />
        })
    
        const onHide = () => setModalShow(false);
      
        return(
            <div style={{float:"left",width:100+"%"}}>

<Modal
      show={modalShow}
      onHide={() => setModalShow(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
       

      <Video autoPlay loop muted
            controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
            poster="http://sourceposter.jpg"
            onCanPlayThrough={() => {
                // Do stuff
            }}>
            <source src="https://www.youtube.com/watch?v=jDDaplaOz7Q&feature=emb_logo" type="video/webm" />
            <track label="English" kind="subtitles" srcLang="en" src="https://www.youtube.com/watch?v=jDDaplaOz7Q&feature=emb_logo" default />
        </Video>
    
  


       
      </Modal.Header>
     
    </Modal>




              <Container className="abt_cntnr">

<Col sm={12} md={6} className="abt fltL ">
    <img src="..\img\about.jpg"/>
    <a href="#"  variant="primary" onClick={() => setModalShow(true)} className="venobox play-btn mb-4 vbox-item" ></a>


      
        
      

</Col>
<Col sm={12} md={6} className="fltL abt_cntnt">

<div className="section-title">
              <h2>About Us</h2>
              <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.</p>
            </div>

{aboutcntnt}

</Col>

</Container>
              <Container style={{padding:40,marginTop:20,}}>
                <Row style={{display:"block",overflow:"hidden"}}>
              {abtclm}
             
              </Row>
              </Container>

<div className="wrpr_prjct">
<Container>
  <Row style={{display:"block" , overflow:"hidden"}}>
<ProjectComponent/>
<ProjectComponent/>
<ProjectComponent/>
<ProjectComponent/>
</Row>
</Container>
</div>



            </div>
        )
    
}
export default AboutComponent