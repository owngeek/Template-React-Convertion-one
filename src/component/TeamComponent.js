import React from "react"
import { Container } from "react-bootstrap"
import TeamoneComponent from"../component/TeamoneComponent"
import teamArray from"../dynamic/teamArray"
class TeamComponent extends React.Component{
    render(){
      let mainteam = teamArray.map(function(n,index){
            return<TeamoneComponent
            key={index}
            team={n}
            />
        })
        return(
            <div>
               <Container>
               <div className="section-title" style={{paddingBottom:15}}>
          <h2 style={{paddingTop:30}}>Our Team</h2>
          <p style={{textAlign:"center"}}>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.</p>
        </div>
        <div  className="team">
        {mainteam}
        </div>
               </Container>
            </div>
        )
    }
}
export default TeamComponent
