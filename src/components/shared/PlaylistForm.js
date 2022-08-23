import React from 'react'
import { Link } from 'react-router-dom'

// book form needs to have two inputs, a submit button, maybe a cancel button would be nice
// book form will use functions that are passed to it as props
// the book form will update state for its parent component

const PlaylistForm = ({ playlist, handleSubmit, handleChange, cancelPath }) => (
  <form onSubmit={handleSubmit}>
    <label>Title</label>
    <input
      placeholder="Title"
      value={playlist.title}
      name="title"
      onChange={handleChange}
    />
    <label>Songs</label>
    <input
      placeholder="Songs"
      value={playlist.songs}
      name="songs"
      onChange={handleChange}
    />
    <button type="submit">Submit</button>
    <Link to={cancelPath}>
      <button>Cancel</button>
    </Link>
  </form>
)

export default PlaylistForm
