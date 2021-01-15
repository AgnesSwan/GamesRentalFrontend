import React, { Component } from 'react';
import './Games.css';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/games'
})
export default class Games extends Component {
  state = {
    games: []
  }
  componentDidMount() {
    api.get('/')
      .then(res => {
        const games = res.data.info;
        this.setState({ games });

      })
  }


  render() {
    return (
      <div className="app" >

        <div className="list">
          {this.state.games.map(game =>
            <div className="card">

              <div className="title">{game.name}</div>
              <div className="info">
                <div>Age: {game.age}+</div>
                <div>Platform: {game.device}</div>
                <div>Price: {game.priceForRent} zł</div>
              </div>
              <button>Rezerwuj</button>
            </div>
          )}
          
        </div>
      </div>
    )
  }

}