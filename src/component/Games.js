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
        <div className="elem"><div>Name:</div>
          <input type="text" onChange={(event) => {
            setTitle(event.target.value);
          }}
          /></div>
        <div className="elem"><div>Price:</div>
          <input type="number" onChange={(event) => {
            setPrice(event.target.value);
          }} /></div>
        <div className="elem"><div>Level:</div>
          <input type="text" onChange={(event) => {
            setLevel(event.target.value);
          }}
          /></div>
        <div className="elem"><div>Age:</div>
          <input type="text" onChange={(event) => {
            setAge(event.target.value);
          }}
          /></div>

        <div className="elem"><div>Device:</div>
          <input type="text" onChange={(event) => {
            setDevice(event.target.value);
          }}
          /></div>
        <br></br>
        <div className="elem"><div>Description:</div>
          <input type="text" onChange={(event) => {
            setDescription(event.target.value);
          }}
          /></div>
      </div>
      <button className="button" onClick={addGame}>Add</button>


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

