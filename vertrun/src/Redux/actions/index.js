import accessToken from "../../accessToken";

export const GET_USER_DATA = 'GET_USER_DATA'
export const GET_HIGH_SCORES = 'GET_HIGH_SCORES'
export const GET_ACTIVITIES = 'GET_ACTIVITIES'
export const REFRESH_ACCESS_TOKEN = 'REFRESH_ACCESS_TOKEN'
export const SELECT_MONTH = 'SELECT_MONTH'


export function getUserData(){
    return function(dispatch){
        return accessToken().then(token=>{
            return fetch("https://www.strava.com/api/v3/athlete",{
                method:'get',
                headers:{
                    'Authorization': 'Bearer '+token, 
                }
            })
            .then(r=>r.json())
            .then(json=>{
                dispatch({
                    type: GET_USER_DATA,
                    payload: json
                })
            })
        })
    }
}

export function getHighScores(id){
    return function(dispatch){
        return accessToken().then(token=>{
            return fetch(`https://www.strava.com/api/v3/athletes/${id}/stats`,{
                method:'get',
                headers:{
                    'Authorization': 'Bearer '+token, 
                }
            })
            .then(r=>r.json())
            .then(json=>{
                dispatch({
                    type: GET_HIGH_SCORES,
                    payload: json
                })
            })
        })
    }
}

export function getActivities(){
    return function(dispatch){
        return accessToken().then(token=>{
            return fetch(`https://www.strava.com/api/v3/athlete/activities?access_token=${token}`)
            .then(r=>r.json())
            .then(json=>{
                dispatch({
                    type: GET_ACTIVITIES,
                    payload: json
                })
            })
        })
    }
}

export function selectMonth(activityList){
    return function(dispatch){
        dispatch({
            type: SELECT_MONTH,
            payload: activityList
        })
    }
}

// export function refreshToken(){
//     return function(dispatch){
//         return fetch(`https://www.strava.com/oauth/token?client_id=${REACT_APP_CLIENT_ID}&client_secret=${REACT_APP_CLIENT_SECRET}&refresh_token=${REACT_APP_REFRESH_TOKEN}&grant_type=refresh_token`)
//         .then(r=>r.json())
//         .then(json=>{
//             dispatch({
//                 type: REFRESH_ACCESS_TOKEN,
//                 payload: json
//             })
//         })
//     }
// }