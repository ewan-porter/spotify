import {useState } from "react";
import Cookies from 'js-cookie';
import GetArtists from "./components/GetArtists";

import { SpotifyAuth, Scopes } from 'react-spotify-auth'

import { ThemeProvider, createTheme } from "@mui/material/styles";


import "./App.css";
import { CssBaseline } from "@mui/material";

function App() {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });


  const [token, setToken] = useState(Cookies.get("spotifyAuthToken"));



  return (
    <div className='app'>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline/>
    {token ? (
      <GetArtists token={token}/>
    ) : (
      // Display the login page
      <SpotifyAuth
        redirectUri='http://localhost:3000/callback'
        clientID='1d411da6a5d04a9b818569b237db8bc9'
        scopes={[Scopes.userReadPrivate, 'user-read-email', 'user-top-read']} // either style will work
        onAccessToken={(token) => setToken(token)}
      />
    )}
 </ThemeProvider>
  </div>
  );
}

export default App;
