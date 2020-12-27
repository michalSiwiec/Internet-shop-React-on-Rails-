import types from './types'

const addMovie = movie => ({type: types.ADD_MOVIES, movie})
const resetMovies = () => ({type: types.RESET_MOVIES})

export default {
    addMovie,
    resetMovies
}