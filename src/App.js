import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Main from "./Main.js";

function App() {

  const [mediaURL, setMediaURL] = useState("");
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [explanation, setExplanation] = useState("");

  useEffect(() => {

      axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
        .then(results => {
            setMediaURL(results.data.url);
            setDate(results.data.date);
            setTitle(results.data.title);
            setExplanation(results.data.explanation);
        })
        .catch(error => console.log(`Check the error at `, error));
  }, []);


  return (
    <div className="App">

      <Header key="1024" date={date} title={title} />
      <Main key="1025" url={mediaURL} explanation={explanation} />
      <Footer />

    </div>
  );
}

export default App;
