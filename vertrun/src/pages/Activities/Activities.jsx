import React, {useEffect} from 'react'
import styled from 'styled-components'
import ActivityCard from './Components/ActivityCard'
import { useSelector, useDispatch } from 'react-redux'
import { getActivities } from '../../Redux/actions'
import activityMapper from '../../helpers/mappedActivities'

export default function Activities({actData}){
    
    const dispatch = useDispatch()
    const activities = useSelector(state=>state.activities)
    const userData = useSelector(state=>state.user)  

    useEffect(()=>{
        if(!Object.keys(activities).length) dispatch(getActivities())
    },[userData])

    return(
        <ActivitiesHolder id='act'>
            {(actData||activityMapper(activities, true, true, false))?.map((e,i)=>
            <Distributor key={i}>
                <ActivityCard actData={e}/>
            </Distributor>
            )}
        </ActivitiesHolder>
    )
}

const ActivitiesHolder = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    height:100% ;
    overflow: auto;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
`

const Distributor = styled.div`
    height:50%;
    width:50%;
    padding:20px; 
    box-sizing:border-box;
`