import React from 'react'
import styled from 'styled-components'
import MonthlySummary from './MonthlySummary'
import autoScroll from '../../../helpers/autoScroll'
import { useDispatch } from 'react-redux'
import { selectMonth } from '../../../Redux/actions'


export default function MonthlyCard({monthlyStats, aggregatedData, allowedMonths, month}){
    
const dispatch = useDispatch()
    return(
        <MonthContainer onClick={()=>{
            autoScroll('month', 'right')
            dispatch(selectMonth(allowedMonths.filter(e=>e.month===month)))
        }}>
            <span>{month}</span>
            {aggregatedData.map((e,i)=>
                <Distributor>
                    <MonthlySummary key={i} stats={e}/>
                </Distributor>
            )}
        </MonthContainer>
    )
}

const MonthContainer = styled.div`
    display: flex;
    flex-direction:column ;
    align-items: center;
    width: 100%;
    height: 100%;
    overflow: auto;
    color:white;
    background: linear-gradient(180deg, rgba(255, 254, 254, 0.27) 0%, rgba(0, 0, 0, 0.0648) 100%);
    box-shadow: -10px 15px 8px -1px rgba(0, 0, 0, 0.25);
    >span{
        text-shadow: -4px 5px 3px rgba(0, 0, 0, 0.25);
        font-size:min(3vw, 5vh);
        font-weight:600 ;
        margin:0;
        margin-top:20px;
    }
`

const Distributor = styled.div`
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width:100%;
    padding:3%; 
    gap:10px;
    box-sizing:border-box;
`