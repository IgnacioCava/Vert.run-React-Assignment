import React from 'react'
import styled from 'styled-components'
import distance from '../../assets/distance.png'
import ActivitySection from './ActivitySection'


export default function ActivityCard({type, duration, title, timezone, actData}){

    if(!actData) {
        actData=[{
            type:"Distance",
            image:distance,
            amount:'12km',
            low:"12m",
            high:"2km"
        },{
            type:"Distance",
            image:distance,
            amount:'12km',
            low:"12m",
            high:"2km"
        },{
            type:"Distance",
            image:distance,
            amount:'12km',
            low:"12m",
            high:"2km"
        },{
            type:"Distance",
            image:distance,
            amount:'12km',
            low:"12m",
            high:"2km"
        },{
            type:"Distance",
            image:distance,
            amount:'12km',
            low:"12m",
            high:"2km"
        }]
    }

    actData.map(e=>{
        return [e.low,e.high,e.amount].map(l=>e)
    })
    return(
        <Activity>
            <NameTime>
                <span>{type||"Run"}</span>
                <span>{duration||"12s"}</span>
            </NameTime>
            
            <ActData>
                <Title>{title||"activityname"}</Title>
                {/* <Details>
                    <div>
                        Distance
                        <img src={distance} alt='distance'/>
                    </div>
                    <hr/>
                    <div>
                        Height
                    </div>
                </Details> */}
                <ActivitySection actData={actData}/>
            </ActData>
            <Time>{timezone||"2018/05/02 | 05:15:09 (Los Angeles, GMT-8)"}</Time>
        </Activity>
    )
}

const Activity = styled.div`
background: rgb(65, 136, 202);
height: 45%;
width: 40%;
margin:20px;
display: flex;
flex-direction: column;
justify-content: space-between;
padding:10px;
box-sizing: border-box;
border-radius: 10px;
color:white;
filter: drop-shadow(-12px 17px 5px rgba(0, 0, 0, 0.5));
`

const NameTime = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
*{
    font-size:20px;
}
`

const ActData = styled.div`
display: flex;
flex-direction: column;
height: 85%;
justify-content: center;
`

const Title = styled.h2`
margin:5px;
font-size: 30px;
`

const Details = styled.div`
display: flex;
flex-direction: row;
height:100% ;
>div{
    width: 50%;
    background-color: #1212122f;
    border-radius: 10px;
}
>hr{
height: 100%;
margin:0 10px;
border:0;
width: 3px;
background-color: black;
}
`

const Time = styled.span`
text-align: end;
`