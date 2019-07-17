import React from "react";
import sarra from './images/sarra.jpg';
import harlod from './images/harlod.jpg';
import mark from './images/mark.jpg';

export default class Profile extends React.Component {
  state = {
    name: "Sarra",
    image: sarra,
    description: "I am Sarra"
  };
  objects = [
        {name:"sarra", image:sarra, description:"I am Sarra"}, 
        {name:"Mark", image:mark, description:"I am Mark"},
        {name:"Harlod", image:harlod, description:"I am Harlod"}
    ]
  render() {
    return (
      <>
        <button
          onClick={() =>
            this.setState(this.objects[0])
          }
        >
          Sarra
        </button>
        <button
          onClick={() =>
            this.setState(this.objects[1])
          }
          
        >
          Daniel
        </button>
        <button
          onClick={() =>
            this.setState(this.objects[2])
          }
          
        >
          Harold
        </button>
        <p>{this.state.name}</p>
        <img src={this.state.image} />
        <p>{this.state.description}</p>
      </>
    );
  }
}
