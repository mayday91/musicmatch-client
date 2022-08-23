import axios from 'axios'
import React, { useState, useEffect } from 'react'

function Search() {
  const CLIENT_ID = "0dbd526f354d4ca592ac8d1679b57cdd"
  const REDIRECT_URI = "http://localhost:3000"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"
  const scopes = [
    "user-modify-playback-state","playlist-read-collaborative",
    "playlist-modify-public",
    "playlist-read-private",
    "playlist-modify-private",
    "app-remote-control",
    "streaming",
    "user-library-modify",
    "user-library-read"
  ]

  const [token, setToken] = useState("")
  const [searchKey, setSearchKey] = useState("")
  const [artists, setArtists] = useState([])

  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")

    if(!token && hash) {
      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
      
      window.location.hash = ""
      window.localStorage.setItem("token", token)
    }
    setToken(token)
  }, [])

  const logout = () => {
    setToken("")
    window.localStorage.removeItem("token")
  }

  const searchArtists = async (e) => {
    const {data} = await axios.get("https://api.spotify.com/v1/search", {
    headers: {
      Authorization: `Bearer ${token}`
    },
    params: {
      q: searchKey,
      type: "artist"
    }
  })
  setArtists(data.artists.items)
  }

const searchResults = {
  backgroundColor: "darkgrey",
  FontFamily: "times",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap"
  
}

const renderArtists = () => {
  return artists.map(artist => (
      <div style={searchResults} key={artist.id}>
        {artist.name}
        <br></br><br></br>
        {artist.images.length ? <img width={"20%"} src={artist.images[0].url} alt=""/> : <div>No Image</div>}
        <br></br>
      </div>
    ))
}


  return (
  <div className='App'>
       <header className="App-header">

<h1>MusicMatch</h1>


{token ? 
  <form onSubmit={searchArtists}>
    <input type="text" onChange={e => setSearchKey(e.target.value)}/>
    <button type={"submit"}>Search</button>
  </form>
  : 
  <h2>Please Login</h2>
}
<br></br>


</header>
{renderArtists()}
<footer>
<br></br>
{!token ? 
<a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login To Spotify</a>
: <button size={"lg"} onClick={logout}>Logout</button>}

</footer>
  </div>
  )
}

export default Search
