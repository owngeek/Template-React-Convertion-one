import React from"react"
import{Container} from"react-bootstrap"
import FaqOneComponent from"../component/FaqOneComponent"
import faqArray from"../dynamic/faqArray"
class FaqComponent extends React.Component{
    render(){

      let mainfaq =  faqArray.map(function(n,index){
            return<FaqOneComponent
            key={index}
            faq={n}
            />
        })
        return(
            <div className="faq_wrpr">

<Container>

<div class="section-title" style={{paddingTop: 60}}>
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="faq">
       {mainfaq}
        </div>
</Container>

            </div>
        )
    }
}
export default FaqComponent