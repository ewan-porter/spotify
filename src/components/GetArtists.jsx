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
            // latlong: "55.8642,-4.2518",
            city: "Glasgow",
            // radius: "20",
            // keyword: `${props.artist}`,
            classificationName: "music",
            // classificationId: `${props.artist}`,
            size: "200",
           

            
        },
    }).then((response) => {
        setShows(response.data);
      });

  

      

}, [props.token]);

console.log(shows)
  return (
    <>
    <DisplayArtist 
    artists={topArtists}

    />

</>
  
    
  )
}

export default GetArtists