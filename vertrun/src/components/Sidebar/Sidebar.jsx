import React from 'react'
import styled from 'styled-components'
import profile from '../../assets/profile.jpg'
import UserSideStats from '../UserSideStats/UserSideStats'
import { Icon } from '@iconify/react';


export default function Sidebar(){

    return(
        <SidebarHolder>
            

            <UserProfile>
                <ProfilePic src={profile} alt='profile'/>
                <div>
                <Fullname>Ignacio Cava</Fullname>
                <SmallData>ignacio_cava | San Francisco, US</SmallData>
                </div>
            </UserProfile>

            <SideStats>
                <UserSideStats 
                    icon={<svg width="65" height="60" viewBox="0 0 70 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_2_14)">
                    <path d="M23.2857 22.5C29.5033 22.5 34.5357 17.4676 34.5357 11.25C34.5357 5.03237 29.5033 0 23.2857 0C17.0681 0 12.0357 5.03237 12.0357 11.25C12.0357 17.4676 17.0681 22.5 23.2857 22.5ZM31 25.7143H30.1663C28.077 26.7187 25.7567 27.3214 23.2857 27.3214C20.8147 27.3214 18.5045 26.7187 16.4051 25.7143H15.5714C9.18303 25.7143 4 30.8973 4 37.2857V40.1786C4 42.8404 6.1596 45 8.82143 45H37.75C40.4118 45 42.5714 42.8404 42.5714 40.1786V37.2857C42.5714 30.8973 37.3884 25.7143 31 25.7143ZM52.2143 22.5C57.5379 22.5 61.8571 18.1808 61.8571 12.8571C61.8571 7.53348 57.5379 3.21429 52.2143 3.21429C46.8906 3.21429 42.5714 7.53348 42.5714 12.8571C42.5714 18.1808 46.8906 22.5 52.2143 22.5ZM57.0357 25.7143H56.654C55.2578 26.1964 53.7812 26.5179 52.2143 26.5179C50.6473 26.5179 49.1707 26.1964 47.7745 25.7143H47.3928C45.3437 25.7143 43.4553 26.3069 41.798 27.2612C44.2489 29.9029 45.7857 33.4085 45.7857 37.2857V41.1429C45.7857 41.3638 45.7355 41.5748 45.7254 41.7857H63.4642C66.1261 41.7857 68.2857 39.6261 68.2857 36.9643C68.2857 30.7466 63.2533 25.7143 57.0357 25.7143Z" fill="white"/>
                    </g>
                    <defs>
                    <filter id="filter0_d_2_14" x="0" y="0" width="72.2857" height="58" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="9"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_14"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_14" result="shape"/>
                    </filter>
                    </defs>
                    </svg>
                    } 
                    label={"Followers"} value={"19"}/>
                    <hr/>
                <UserSideStats 
                    icon={<svg width="65" height="60" viewBox="0 0 70 63" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_5_21)">
<path d="M36.0718 10.0465C39.4575 10.0465 42.2275 7.78605 42.2275 5.02326C42.2275 2.26047 39.4575 0 36.0718 0C32.6862 0 29.9161 2.26047 29.9161 5.02326C29.9161 7.78605 32.6862 10.0465 36.0718 10.0465ZM26.3151 40.186L28.0694 33.907L34.5329 38.9302V51.4884C34.5329 52.8698 35.9179 54 37.6108 54C39.3036 54 40.6886 52.8698 40.6886 51.4884V37.3228C40.6886 35.9414 40.0115 34.6353 38.7803 33.6809L34.2251 30.1395L36.0718 22.6047C39.5403 25.8404 44.2885 27.9822 49.4913 28.6577C51.338 28.8837 53 27.6781 53 26.146C53 24.9153 51.892 23.8856 50.3838 23.6847C45.7055 23.0567 41.8274 20.7963 39.7653 17.8326L36.6874 13.814C35.4563 12.307 33.6096 11.3023 31.4551 11.3023C30.5317 11.3023 29.9161 11.5535 28.9928 11.5535L16.743 15.773C15.6279 16.162 14.6775 16.8097 14.0099 17.6359C13.3423 18.462 12.9869 19.43 12.988 20.4195V26.3721C12.988 27.7535 14.373 28.8837 16.0658 28.8837C17.7586 28.8837 19.1437 27.7535 19.1437 26.3721V20.3442L24.6838 18.586L19.7592 38.9302L7.69408 36.9209C6.03204 36.6447 4.40078 37.5237 4.06222 38.88V38.9805C3.72366 40.3367 4.8009 41.6679 6.46294 41.9442L19.1129 44.0037C20.6863 44.2586 22.3194 44.0022 23.6646 43.2891C25.0098 42.5761 25.9608 41.4627 26.3151 40.186Z" fill="white"/>
</g>
<defs>
<filter id="filter0_d_5_21" x="0" y="0" width="57" height="67" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="9"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5_21"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5_21" result="shape"/>
</filter>
</defs>
</svg>} 
                    label={"Total run distance"} value={"20"} unit={'km'}/>
                    <hr/>
                <UserSideStats 
                    icon={<svg width="65" height="60" viewBox="0 0 70 63" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_5_33)">
<path d="M15.875 45.8375C13.6704 45.8375 11.5561 44.9617 9.99717 43.4028C8.43828 41.8439 7.5625 39.7296 7.5625 37.525C7.5625 35.3204 8.43828 33.2061 9.99717 31.6472C11.5561 30.0883 13.6704 29.2125 15.875 29.2125C18.0796 29.2125 20.1939 30.0883 21.7528 31.6472C23.3117 33.2061 24.1875 35.3204 24.1875 37.525C24.1875 39.7296 23.3117 41.8439 21.7528 43.4028C20.1939 44.9617 18.0796 45.8375 15.875 45.8375ZM15.875 25.65C12.7256 25.65 9.7051 26.9011 7.47811 29.1281C5.25111 31.3551 4 34.3756 4 37.525C4 40.6744 5.25111 43.6949 7.47811 45.9219C9.7051 48.1489 12.7256 49.4 15.875 49.4C19.0244 49.4 22.0449 48.1489 24.2719 45.9219C26.4989 43.6949 27.75 40.6744 27.75 37.525C27.75 34.3756 26.4989 31.3551 24.2719 29.1281C22.0449 26.9011 19.0244 25.65 15.875 25.65ZM39.15 20.9H49.125V16.625H41.525L36.9175 8.85875C36.2287 7.67125 34.875 6.8875 33.45 6.8875C32.3337 6.8875 31.3125 7.33875 30.6 8.075L21.8125 16.8388C21.0762 17.575 20.625 18.525 20.625 19.7125C20.625 21.2088 21.4087 22.4675 22.6437 23.2038L30.6 28.025V39.9H34.875V24.4625L29.5312 20.5438L35.0412 14.9625L39.15 20.9ZM49.125 45.8375C46.9204 45.8375 44.8061 44.9617 43.2472 43.4028C41.6883 41.8439 40.8125 39.7296 40.8125 37.525C40.8125 35.3204 41.6883 33.2061 43.2472 31.6472C44.8061 30.0883 46.9204 29.2125 49.125 29.2125C51.3296 29.2125 53.4439 30.0883 55.0028 31.6472C56.5617 33.2061 57.4375 35.3204 57.4375 37.525C57.4375 39.7296 56.5617 41.8439 55.0028 43.4028C53.4439 44.9617 51.3296 45.8375 49.125 45.8375ZM49.125 25.65C45.9756 25.65 42.9551 26.9011 40.7281 29.1281C38.5011 31.3551 37.25 34.3756 37.25 37.525C37.25 40.6744 38.5011 43.6949 40.7281 45.9219C42.9551 48.1489 45.9756 49.4 49.125 49.4C50.6844 49.4 52.2286 49.0928 53.6694 48.4961C55.1101 47.8993 56.4192 47.0246 57.5219 45.9219C58.6246 44.8192 59.4993 43.5101 60.0961 42.0694C60.6928 40.6286 61 39.0844 61 37.525C61 35.9656 60.6928 34.4214 60.0961 32.9806C59.4993 31.5399 58.6246 30.2308 57.5219 29.1281C56.4192 28.0254 55.1101 27.1507 53.6694 26.5539C52.2286 25.9572 50.6844 25.65 49.125 25.65V25.65ZM42 8.55C44.375 8.55 46.275 6.65 46.275 4.275C46.275 1.9 44.375 0 42 0C39.625 0 37.725 1.9 37.725 4.275C37.725 6.65 39.625 8.55 42 8.55Z" fill="white"/>
</g>
<defs>
<filter id="filter0_d_5_33" x="0" y="0" width="65" height="62.4" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="9"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5_33"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5_33" result="shape"/>
</filter>
</defs>
</svg>} 
                    label={"Longest ride"} value={"40"} unit={'km'}/>
            </SideStats>
            

            <Options>
                <a onClick={(e)=>console.log(e)}>
                    Activities
                </a>
                <a>
                    Monthly Stats
                </a>
            </Options>
        </SidebarHolder>
    )
}

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
`

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
        width: 100%;
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
    flex-direction: column;
    align-items: center;
    justify-content: center;
    hr{
        width: 80%;
        height: 5px;
        background-color: #c4c4c44c;
        border:0;
        margin:0;
    }
`
// font-weight:400;
//     font-family: 'Roboto', sans-serif;
const Options = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: space-around;
    height: 35%;
    width: 90%;
    bottom:0;
    margin:10px;
    a{
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
        font-size: 2.5vw;
        background-color: transparent;
        box-shadow: unset;
        color:white;
        border-radius: 10px;
        transition: .7s;
        &:hover{
            border:1px solid #D1DEFF;
            transition: .5s;
        }
        &:active{
            transition: .7s;
            //border:0px solid transparent;
            background: #D1DEFF;
            box-shadow: -7px 13px 4px rgba(0, 0, 0, 0.25);
            color:black
        }
    }
`