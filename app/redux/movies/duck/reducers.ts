import types from '../../movies/duck/types'

const initialMovies = {
    movies: ['Władca Pierścieni', 'Harry Potter', 'Wiedźmin'],
    listName: 'Title'
}

const moviesReducer = (state = initialMovies, action) => {

    switch (action.type) {
      case types.ADD_MOVIES:
          return {...state, movies: [...state.movies, action.movie]}
        case types.RESET_MOVIES:
            return {...state, movies: []}
      default:
        return state
    }
}

export default moviesReducer;