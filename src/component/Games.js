import React, {Component} from 'react';
import axios from 'axios';
class Games extends Component  {
  componentDidMount = () => {
  axios.get("/games").then(function(response) {
    console.log(response);
  })

  };
  
render(){
  return (
    <div>

    </div>
  );
}
}
export default Games;