import  React from"react"
import{Col} from "react-bootstrap"
import { ArrowRight } from 'react-bootstrap-icons';
class TeamoneComponent extends React.Component{
    render(){
        return(
            <div>

<Col xl={3} lg={4} md={6}  className="aos-init">
            <div className="member">
              <div className="pic"><img src={this.props.team.image} className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>{this.props.team.title}</h4>
                <span>{this.props.team.description}</span>
                <div className="social">
                  <a href=""><ArrowRight className="icon_smdia" /></a>
                  <a href=""><ArrowRight className="icon_smdia "/></a>
                  <a href=""><ArrowRight className="icon_smdia "/></a>
                  <a href=""><ArrowRight className="icon_smdia "/></a>
                </div>
              </div>
            </div>
          </Col>





            </div>
        )
    }
}
export default TeamoneComponent