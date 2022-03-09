//import { ADD_FAVORITE, REMOVE_FAVORITE, SEARCH_MOVIES, GET_DETAILS, SEARCHSTATE } from '../Actions';

const initialState = {
    state: [],
};

export default function reducer(state=initialState, action){
    switch (action.type) {
        // case SEARCHSTATE: 
        //     return {...state, searchState: action.payload}

        // case ADD_FAVORITE:
        //     return {...state, favouriteMovies: state.favouriteMovies.concat(action.payload)}

        // case REMOVE_FAVORITE:
        //     return {...state, favouriteMovies: state.favouriteMovies.filter(movie=>movie.id!==action.payload)}

        // case SEARCH_MOVIES:
        //     return {...state, foundMovies: action.payload.results}

        // case GET_DETAILS:
        //     return {...state, movieDetail: state.movieDetail.concat(action.payload)}
    
        default:
            return state
    }
}