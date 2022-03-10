import React, {useEffect} from 'react'
import styled from 'styled-components'
import profile from '../../assets/profile.jpg'
import UserSideStats from './UserSideStats'
import FriendsIcon from '../../assets/SVGs/FriendsIcon';
import RunDistance from '../../assets/SVGs/RunDistance';
import RideDistance from '../../assets/SVGs/RideDistance';
import autoScroll from '../../helpers/autoScroll';
import {useDispatch, useSelector} from 'react-redux'
import { getUserData, getHighScores, getActivities } from '../../Redux/actions';
import accessToken from '../../accessToken';


export default function Sidebar(){

    function secure(){
        document.getElementById('monthlystats').style.pointerEvents='none'
        document.getElementById('activities').style.pointerEvents='none'
        setTimeout(()=>{
            document.getElementById('monthlystats').style.pointerEvents='auto'
            document.getElementById('activities').style.pointerEvents='auto'
        }, 400)
    }

    const dispatch = useDispatch()

    const userData = useSelector(state=>state.user)
    const userScores = useSelector(state=>state.scores)

    useEffect(()=>{
        if(!Object.keys(userData).length) dispatch(getUserData())
    }, [])
    
    useEffect(()=>{
        if((!Object.keys(userScores).length||userScores.errors)&&Object.keys(userData).length) dispatch(getHighScores(userData.id))
    },[userData])

    

    return(
        <SidebarHolder>

            <UserProfile>
                <ProfilePic src={userData?.profile} alt='profile'/>
                <div>
                    <Fullname>{userData?.firstname} {userData?.lastname}</Fullname>
                    <SmallData>{userData?.username}{userData?.country?' | '+userData?.country:null}</SmallData>
                </div>
            </UserProfile>

            <SideStats>
                <UserSideStats icon={<FriendsIcon/>} label={"Followers"} value={userData?.follower||0}/>
                <hr/>
                <UserSideStats icon={<RunDistance/>} label={"Jog stats"} value={Math.round(userScores.all_run_totals?.distance/1000)} unit={'km'}/>
                <hr/>
                <UserSideStats icon={<RideDistance/>} label={"Ride stats"} value={Math.round(userScores.all_ride_totals?.distance/1000)} unit={'km'}/>
            </SideStats>
            

            <Options>
                <button id='activities' className='active' onClick={()=>{
                    //dispatch(Object.keys(userData).length?getActivities():getUserData())
                    secure()
                    autoScroll('sectors', 'up', 'month')
                    document.getElementById('activities').className='active'
                    document.getElementById('monthlystats').classList.remove('active')
                    }}>
                    Activities
                </button>
                <button id='monthlystats' onClick={()=>{
                    //dispatch(Object.keys(userData).length?getActivities():getUserData())
                    secure()
                    autoScroll('sectors', 'down')
                    document.getElementById('monthlystats').className='active'
                    document.getElementById('activities').classList.remove('active')
                    }}>
                    Monthly Stats
                </button>
            </Options>
        </SidebarHolder>
    )
}

const UserProfile = styled.div`
    display: flex;
    flex-direction:column;
    color:white;
    margin-top:15px;
    text-shadow: 0px 5px 4px rgba(0, 0, 0, 0.45);
`

const ProfilePic = styled.img`
    width: 150px;
    height: 175px;
    object-fit:cover;
    box-shadow: 0px 9px 4px 7px rgba(0, 0, 0, 0.25);
    border-radius: 25px;
    margin: 0 auto;
    object-position:20%;
    transition: .6s ease-in-out;
    &:hover{
        transform: scale(110%);
        box-shadow: 0px 19px 8px 13px rgba(0, 0, 0, 0.25);
    }
`

const Fullname = styled.h1`
    margin-bottom:0;
    margin-top:20px;
    font-size: 2.5vw;
    font-weight:700;
    font-family: 'Roboto', sans-serif;
`

const SmallData = styled.span`
    font-size: 1vw;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
`

const SideStats = styled.div`
    height:40% ;
    width: 90%;
    display: flex;
    padding:5px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    hr{
        width: 80%;
        min-height: 5px;
        background-color: #c4c4c44c;
        border:0;
        margin:5px 0;
    }
`

const Options = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: space-around;
    height: 35%;
    width: 90%;
    bottom:0;
    margin:10px;
    .active{
        transition: .7s;
            //border:0px solid transparent;
            background: #D1DEFF;
            box-shadow: -7px 13px 4px rgba(0, 0, 0, 0.25);
            color:black
    }
    button{
        height: 40%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        background-color: white;
        box-sizing: border-box;
        border:0px solid transparent;
        padding:10px;
        font-weight: bold;
        font-size: 2vw;
        background-color: transparent;
        box-shadow: unset;
        color:white;
        border-radius: 10px;
        transition: .7s;
        box-shadow: inset -7px 13px 4px rgb(0 0 0 / 25%);
        &:hover{
            text-shadow: 0px 5px 4px rgba(0, 0, 0, 0.45);
            
            transition: .5s;
        }
    }
`

const SidebarHolder = styled.div`
    height:100vh;
    background-color:purple;
    width: 20% ;
    overflow: hidden;
    display: flex;
    flex-direction:column ;
    justify-content: space-evenly;
    align-items: center;
    background: linear-gradient(0deg, rgba(71, 183, 89, 0.24), rgba(71, 183, 89, 0.24)), linear-gradient(180deg, #FF3D6B 0%, #BE3CFC 100%);
    box-shadow: inset 0px 0px 20px 16px rgba(0, 0, 0, 0.25);
    @media (max-width:1000px) {
        width: 100%;
        height:20%;
        flex-direction: row;
        ${Options}{
            height: 100%;
        }
        ${SideStats}{
            height: 40%;
            width: 90%;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            padding: 5px;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            >hr{
                height: 100%;
                width: 5px;
            }
        }
        ${UserProfile}{
            display:flex;
            flex-direction: row;
            width: 200px;
            height: 90%;;
            align-items: center;
            margin:0;
            ${ProfilePic}{
                    width: 100%;
                    height: 100%;
                    
                }
            >div{
                display: flex;
                flex-direction: row;
                align-items: center;
                ${Fullname}{
                    font-size: unset;
                }
                ${SmallData}{
                    font-size: unset;
                }
                
            }
        }
    }
`