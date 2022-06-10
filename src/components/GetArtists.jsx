import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import DisplayArtist from './DisplayArtist'



const GetArtists = (props) => {
const [topArtists, setTopArtists] = useState([]);




useEffect(() => {
    axios.get("https://api.spotify.com/v1/me/top/artists", {
        params: { limit: 2, offset: 0 },
        headers: {
            Accept: 'application/json',
            Authorization: 'Bearer '+ props.token, 
            'Content-Type': 'application/json',
        },
        
    }).then((response) => {
        setTopArtists(response.data.items);
      });

      

      

}, [props.token]);



  return (
    <>
    <DisplayArtist 
    artists={topArtists}
    
    />

</>
  
    
  )
}

export default GetArtists