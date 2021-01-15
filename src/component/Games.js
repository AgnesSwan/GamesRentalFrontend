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
              <img src={game.imageUrl} alt="game" ></img>


              <div className="title">{game.name}</div>
              <div>{game.age}</div>
              <div>{game.device}</div>
              <div>{game.priceForRent}</div>
            </div>
          )}
        </div>
      </div>
    )
  }

}