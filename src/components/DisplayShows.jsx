import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const DisplayShows = (props) => {

const [shows, setShows] = useState([]);

useEffect(() => {
    

      axios.get("https://app.ticketmaster.com/discovery/v2/events", {
        params: { 
            apikey: "8yxuvxgzMGcWLCJS8365vaGohkiAJ8J3", 
            latlong: "55.8642,-4.2518",
            radius: "20",
            keyword: `${props.artist}`,
            classificationName: "music",
            
        },
    }).then((response) => {
        setShows(response.data);
      });

      

}, []);

console.log(shows)
  return (
    <>{props.artist}</>
  )
}

export default DisplayShows