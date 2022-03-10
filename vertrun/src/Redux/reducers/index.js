import { GET_USER_DATA, GET_ACTIVITIES, GET_HIGH_SCORES, SELECT_MONTH } from '../actions';


const initialState = {
    activities: [],
    user: {},
    scores: {},
    selectedMonth: []
};

export default function reducer(state=initialState, action){
    switch (action.type) {
        case GET_USER_DATA: 
            return {...state, user: action.payload}

        case GET_ACTIVITIES:
            return {...state, activities: action.payload}

        case GET_HIGH_SCORES:
            return {...state, scores: action.payload}   
            
        case SELECT_MONTH:
            return {...state, selectedMonth: action.payload} 

        default:
            return state
    }
}