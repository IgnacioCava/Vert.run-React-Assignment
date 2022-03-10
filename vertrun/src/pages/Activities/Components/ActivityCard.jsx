import React from 'react'
import styled from 'styled-components'
import ActivitySection from './ActivitySection'


export default function ActivityCard({actData}){

    return(
        <Activity>
            <NameTime>
                <span>Exercise: {actData.type}</span>
                <span>{actData.duration}</span>
            </NameTime>
            
            <ActData>
                <Title>{actData.name}</Title>
                <ActivitySection stats={actData.stats}/>
            </ActData>
            <Time>{actData.time}</Time>
        </Activity>
    )
}

const Activity = styled.div`
    background: rgb(38 75 131 / 49%);
    height: 100%;
    width: 100%;
    padding:5px;
    overflow: auto;
    box-sizing:border-box ;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
height: 80%;
justify-content: center;
`

const Title = styled.h2`
margin:5px;
font-size: 2vw;
`

const Time = styled.span`
text-align: end;
font-size: 1vw;
`