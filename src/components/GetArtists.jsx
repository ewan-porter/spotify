import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import DisplayArtist from './DisplayArtist'



const GetArtists = (props) => {
const [topArtists, setTopArtists] = useState([]);
const [shows, setShows] = useState([]);



useEffect(() => {
    axios.get("https://api.spotify.com/v1/me/top/artists", {
        params: { limit: 12, offset: 0 },
        headers: {
            Accept: 'application/json',
            Authorization: 'Bearer '+ props.token, 
            'Content-Type': 'application/json',
        },
        
    }).then((response) => {
        setTopArtists(response.data.items);
      });

      axios.get("https://app.ticketmaster.com/discovery/v2/events", {
        params: { 
            apikey: "8yxuvxgzMGcWLCJS8365vaGohkiAJ8J3", 
            latlong: "55.8642,-4.2518",
            radius: "20",
            size: "200",
            classificationName: "music",
            
        },
    }).then((response) => {
        setShows(response.data._embedded.events);
      });

      

}, [props.token]);


console.log(shows)
  return (
    <>
    <DisplayArtist 
    artists={topArtists}
    shows={shows}
    />

</>
  
    
  )
}

export default GetArtists