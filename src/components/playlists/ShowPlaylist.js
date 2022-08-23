import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Layout from './../shared/Layout'

import axios from 'axios'
import apiUrl from './../../apiConfig'

const ShowPlaylist = (props) => {
  // 2 very important methods

  const [playlist, setPlaylist] = useState(null)
  const [deleted, setDeleted] = useState(false)

  useEffect(() => {
    const { id } = props.match.params
    axios(`${apiUrl}/playlists/${id}`)
      .then(res => {
        setPlaylist(res.data.playlist)
      })
      .catch(console.error)
  })

  // componentDidMount () {
  //   // Show request to /books/:id
  //   // we need to get the id from the front-end url
  //   // We can do that, by destructuring the id from our match params(which come from Router)
  //   const { id } = this.props.match.params
  //   // check that your variables are referring to the right info with a console log
  //   console.log('this is the id --> componentDidMount \n', id)
  //   axios(`${apiUrl}/books/${id}`)
  //     .then(res => {
  //       this.setState({ book: res.data.book })
  //     })
  //     .catch(console.error)
  // }

  const destroyPlaylist = (event) => {
    // make our axios call
    // axios({
    //   method: 'Delete',
    //   url: `${apiUrl}/books/${this.props.match.params.id}`
    // })
    axios.delete(`${apiUrl}/playlists/${props.match.params.id}`)
      .then(res => {
      // because I want to redirect if the book has been deleted
      // I want to setState for deleted to true(see render function for the reason why)
        // this.setState({ deleted: true })
        setDeleted(true)
      })
      .catch(console.error)
  }

  // render () {
    // first step, we want to save ourselves some time, and finger muscle ability by destructuring from state
    // const { book, deleted } = this.state
    // handle what happens the first render, where there is no book
    // handle what happens when the request is still loading/waiting for a response, or if that response is empty
    // handle what happens when I get the desired book back
    if (!playlist) {
      return <p>Loading...</p>
    }
    if (deleted) {
      return <Link to="/playlists"/>
    }
    return (
      <Layout>
        <h3>{playlist.title}</h3>
        <p>Written by: {playlist.author}</p>
        <button onClick={destroyPlaylist}>Delete the Playlist</button>
        <Link to={`/playlists/${props.match.params.id}/edit`}>Update This Playlist!</Link>
      </Layout>
    )
  }
// }

export default ShowPlaylist