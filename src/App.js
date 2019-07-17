import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {

  const [media, setMedia] = useState("");

  useEffect(() => {

    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
      .then(res => setMedia(res.data.url))
      .catch(error => console.log(error))

  }, []);

  axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log('issue', error);
    })

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
