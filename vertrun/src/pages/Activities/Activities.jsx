import React from 'react'
import styled from 'styled-components'
import ActivityCard from '../../components/StarCards/ActivityCard'


export default function Activities(){

    return(
        <ActivitiesHolder>
            <ActivityCard/>
            <ActivityCard/>
            <ActivityCard/>
            <ActivityCard/>
            <ActivityCard/>
            <ActivityCard/>
            <ActivityCard/>
            <ActivityCard/>

        </ActivitiesHolder>
    )
}

const ActivitiesHolder = styled.div`
    display: flex;
    width: 80%;
    overflow: auto;
    background: linear-gradient(180deg,#007BD3 0%,rgba(0,123,211,0.31) 100%);
    flex-direction: column;
    flex-wrap: wrap;
` 