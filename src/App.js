import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import axios from "axios";

function App() {
  const [cat, setCat]= useState("");
  const [joke, setJoke]= useState("");

    const fetchData= async (event) =>{
      setCat(event.target.name);
      const result= await axios.get("https://api.chucknorris.io/jokes/random?category="+event.target.name);
      console.log(result.data.value);
      setJoke(result.data.value);
    }


  return (
    <div className="container">
      <h1> Chuck Norris </h1>
      <div className="btn-container">
      <div className="allButtons">
      <div>
          <button onClick={fetchData}class="btn btn-outline-primary btn-md "type="button" name="animal" >Animal</button>
          <button onClick={fetchData}class="btn btn-outline-primary btn-md "type="button" name="career">Career</button>
          <button onClick={fetchData}class="btn btn-outline-primary btn-md "type="button" name="celebrity">Celebrity</button>
          <button onClick={fetchData}class="btn btn-outline-primary btn-md "type="button" name="dev">Dev</button>
          <button onClick={fetchData}class="btn btn-outline-primary btn-md "type="button" name="explicit">Explicit</button>
          <button onClick={fetchData}class="btn btn-outline-primary btn-md "type="button" name="fashion">Fashion</button>
          <button onClick={fetchData}class="btn btn-outline-primary btn-md "type="button" name="food">Food</button>
          <button onClick={fetchData}class="btn btn-outline-primary btn-md "type="button" name="history">History</button>
          <button onClick={fetchData}class="btn btn-outline-primary btn-md "type="button" name="money">Money</button>
          <button onClick={fetchData}class="btn btn-outline-primary btn-md "type="button" name="music">Music</button>
          <button onClick={fetchData}class="btn btn-outline-primary btn-md "type="button" name="movie">Movie</button>
          <button onClick={fetchData}class="btn btn-outline-primary btn-md "type="button" name="politician">Politician</button>
          <button onClick={fetchData}class="btn btn-outline-primary btn-md "type="button" name="religion">Religion</button>
          <button onClick={fetchData}class="btn btn-outline-primary btn-md "type="button" name="science">Science</button>
          <button onClick={fetchData}class="btn btn-outline-primary btn-md "type="button" name="sport">Sport</button>
          <button onClick={fetchData}class="btn btn-outline-primary btn-md "type="button" name="travel">Travel</button>
          </div>
      </div>

      </div>

      <div className="output">
      <p> Selected Category : {cat.toLocaleUpperCase()} </p>
      <textarea
      name="content"
      rows="5"
      value={joke}>
      </textarea>
      </div>

      <div className="newButton">
      <button onClick={fetchData}class="btn btn-outline-secondary btn-md "type="button" name={cat}> New Joke </button>

      </div>


    </div>
  );
}

export default App;
