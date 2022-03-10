const {REACT_APP_REFRESH_TOKEN, REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET } = process.env;

export default async function accessToken(){ 
    
    // Strava API's access token becomes invalid every 6 hours, so I use this to update it.

    let access_token

    await fetch(`https://www.strava.com/oauth/token?client_id=${REACT_APP_CLIENT_ID}&client_secret=${REACT_APP_CLIENT_SECRET}&refresh_token=${REACT_APP_REFRESH_TOKEN}&grant_type=refresh_token`,{
            method:'post',
    }).then(r=>r.json()).then(res=>access_token = res.access_token)
    
    return access_token
}