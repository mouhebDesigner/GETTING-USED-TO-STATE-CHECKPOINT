import React from "react";
import Button from "./button";
import sarra from './images/sarra.jpg';
import harlod from './images/harlod.jpg';
import mark from './images/mark.jpg';
const objects = [
  {name:"sarra", image:sarra, description:"I am Sarra"}, 
  {name:"Mark", image:mark, description:"I am Mark"},
  {name:"Harlod", image:harlod, description:"I am Harlod"}
]
export default class Profile extends React.Component {
  state = {
    index:0
  };
 
  render() {
    return (
      <>
        <div>
          {objects.map((e,i)=> <Button onClick={()=>{this.setState({index:i})}} btn={e.name}/>)}
        </div>
        
        <p>{objects[this.state.index].name}</p>
        <img src={objects[this.state.index].image} />
        <p>{objects[this.state.index].description}</p>
      </>
    );
  }
}
