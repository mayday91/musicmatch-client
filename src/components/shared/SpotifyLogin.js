function SpotifyLogin() {
	const CLIENT_ID = "0dbd526f354d4ca592ac8d1679b57cdd"
	const REDIRECT_URI = "http://localhost:3000"
	const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
	const RESPONSE_TYPE = "token"
	
  return (
    <div className="App">
      <header className="App-header">
      
      <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>



      </header>
    </div>
  );
}

export default SpotifyLogin;