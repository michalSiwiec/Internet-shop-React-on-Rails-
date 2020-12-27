import React, {useState} from 'react'
import {connect} from 'react-redux'
import actions from '../../redux/movies/duck/actions'

const ActorsContainer = ({name, listName, add, reset}) => {

    const [title, setTitle] = useState('')

    // console.log(add())
    // console.log(reset())

    return(
        <>
            <div>
                <ul>
                    {name.map(movie => <li>{movie}</li>)}
                </ul>
            </div>

            <div>
                <input onChange={(e) => setTitle(e.target.value)}/>
                <button onClick={() => add(title)}>Dodaj film</button>
            </div>

            <div>
                <button onClick={() => reset()}>Reset</button>
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    name: state.moviesReducers.movies,
    listName: state.moviesReducers.listName
})

const mapDispatchToProps = dispatch => ({
    add: (movie) => dispatch(actions.addMovie(movie)),
    reset: () => dispatch(actions.resetMovies())
})

export default connect(mapStateToProps, mapDispatchToProps)(ActorsContainer)