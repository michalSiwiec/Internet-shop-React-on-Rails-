import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import actions from '../../redux/movies/duck/actions'

const ActorsContainer = () => {

    // const movies = useSelector(state => state.moviesReducers.movies)
    const movies = useSelector(state => state.moviesReducers)
    const dispatch = useDispatch()

    console.log(movies)

    const [title, setTitle] = useState('')

    return(
        <>
            <div>
                <ul>
                    {/* {movies.map(movie => <li>{movie}</li>)} */}
                </ul>
            </div>

            <div>
                <input onChange={(e) => setTitle(e.target.value)}/>
                <button onClick={() => dispatch(actions.addMovie(title))}>Dodaj film</button>
            </div>

            <div>
                <button onClick={() => dispatch(actions.resetMovies())}>Reset</button>
            </div>
        </>
    )
}

export default ActorsContainer