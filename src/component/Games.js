import React, { useState, useEffect } from 'react';
import './Games.css';
import axios from 'axios';


export default function Games() {
  const [games, setGames] = useState([]);
  const [title, setTitle] = useState("");
  const [priceForRent, setPrice] = useState(0);
  const [difficultyLevel, setLevel] = useState("");
  const [age, setAge] = useState(0);
  const [device, setDevice] = useState("");
  const [description, setDescription] = useState("");
  useEffect(() => {
    axios
      .get('http://localhost:3000/games')
      .then(res => {
        console.log(res)
        setGames(res.data.info)
      })


  }, []);

  const addGame = () => {
    axios.post('http://localhost:3000/games', {
      name: title,
      priceForRent: priceForRent,
      difficultyLevel: difficultyLevel,
      age: age,
      device: device,
      description: description,
    })
      .then(() => {
        setGames([...games, {
          name: title,
          priceForRent: priceForRent,
          difficultyLevel: difficultyLevel,
          age: age,
          device: device,
          description: description,

        },]);
      });
  };
  return (
    <div className="app" >
      <div className="newgame">

        <label>Name:</label>
        <input
          type="text"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <label>Price:</label>
        <input
          type="number"
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        />
        <label>Level:</label>
        <input
          type="text"
          onChange={(event) => {
            setLevel(event.target.value);
          }}
        />
        <label>Age:</label>
        <input
          type="number"
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <label>Device:</label>
        <input
          type="text"
          onChange={(event) => {
            setDevice(event.target.value);
          }}
        />
        <label>Description:</label>
        <input
          type="text"
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
        <button onClick={addGame}>Add Employee</button>
      </div>



      <>
        <div className="list">
          {games.map((game) => (
            <div className="card">

              <div className="title">{game.name}</div>
              <div className="info">
                <div>Age: {game.age}+</div>
                <div>Platform: {game.device}</div>
                <div>Price: {game.priceForRent} zł</div>
              </div>


            </div>
          ))}

        </div>

      </>
    </div>
  )
}

// <button onClick={() => addGame(game._id)}>Rezerwuj</button>