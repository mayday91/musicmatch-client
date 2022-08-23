import apiUrl from '../apiConfig'
import axios from 'axios'

// READ - INDEX
export const getAllPlaylists = () => {
  return axios(`${apiUrl}/playlists`)
}

// READ - SHOW
export const getOnePlaylist = (id) => {
  return axios(`${apiUrl}/playlists/${id}`)
}

// CREATE
export const createPlaylist = (user, newPlaylist) => {
  // console.log('this is newPet', newPet)
  // console.log('this is user', user)
	return axios({
		url: apiUrl + '/playlists',
		method: 'POST',
		headers: {
			Authorization: `Token token=${user.token}`,
		},
		data: {
			pet: newPlaylist,
		},
	})
}

// UPDATE
export const updatePlaylist = (user, updatedPlaylist) => {
	return axios({
		url: `${apiUrl}/playlists/${updatedPlaylist.id}`,
		method: 'PATCH',
		headers: {
			Authorization: `Token token=${user.token}`,
		},
		data: {
			pet: updatedPlaylist,
		},
	})
}

// DELETE
export const removePlaylist = (user, playlistId) => {
	return axios ({
		url: `${apiUrl}/playlists/${playlistId}`,
		method: 'DELETE',
		headers: {
			Authorization: `Token token=${user.token}`
		}
	})
}