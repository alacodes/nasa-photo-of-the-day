import React, { useState, useEffect } from "react";
import axios from "axios";


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

  export {media, setMedia};