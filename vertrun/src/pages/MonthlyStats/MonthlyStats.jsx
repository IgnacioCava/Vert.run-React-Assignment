import React from 'react'
import styled from 'styled-components'
import MonthlyCard from './Components/MonthlyCard'
import distance from '../../assets/distance.png'
import height from '../../assets/height.png'
import autoScroll from '../../helpers/autoScroll'
import Activities from '../Activities/Activities'
import { useSelector, useDispatch } from 'react-redux'
import { selectMonth } from '../../Redux/actions'
import activityMapper from '../../helpers/mappedActivities'

export default function MonthlyStats(){

    const activities = useSelector(state=>state.activities)
    const selectedMonth = useSelector(state=>state.selectedMonth)

    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    let currentDate = new Date()
    
    let lastMonths = activityMapper(activities, true, true, true).filter(e=>{
        if(!e) return 0
        let allowedMonths = []
        for(let i=currentDate.getMonth();i>=currentDate.getMonth()-2;i--){
            allowedMonths.push(months[i]||months[months.length-i])
        }
        return allowedMonths.includes(e.month)
    })

    let aggregatedData = {} // Used to store total average data

    let samples = 1 // Closure, used to calculate a % average

    lastMonths.map(e=>
    aggregatedData.hasOwnProperty(e.month)
        ?aggregatedData[e.month]=e.stats.map((stats,i)=> // Reduces values into one entry per month
        {if(stats===0) return 0
            
                let thisMonth=aggregatedData[e.month][i]
                aggregatedData[e.month][i]={
                    type:stats.type,
                    icon:stats.icon,
                    total:stats.total.unit==='%'
                    ?{...stats.total, value:(thisMonth.total.value||0)+stats.total.value,samples:++samples} //In case we are working with the uptime section, I need to calculate an average instead of a sum
                    :{...stats.total, value:(thisMonth.total.value||0)+stats.total.value},
                    top:{...stats.top, value:Math.max((thisMonth.top.value||0),stats.top.value)},
                    bot:{...stats.bot, value:Math.min((thisMonth.bot.value||0),stats.bot.value)}
                }
                return aggregatedData[e.month][i]
            })
        :aggregatedData[e.month]=e.stats
    )

    return(
        <MonthlyHolder id='month'>
            <div style={{display:'flex'}}>
            {Object.entries(aggregatedData).reverse().map((e,i)=>
            <Distributor key={i}>
                <MonthlyCard
                month={e[0]}
                monthlyStats={e}//Stats of every single month, for expansion purposes
                aggregatedData={e[1]} //Average stats of the last 3 months
                allowedMonths={lastMonths}//Stats of all activities during the last 3 months
                />
            </Distributor>
            )}
            </div>
            <div>
                <Activities actData={selectedMonth}/>
            </div>
        </MonthlyHolder>
    )
}

const MonthlyHolder = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    height:100% ;
    flex-direction: column;
    flex-wrap: wrap;
    overflow:hidden ;
    scroll-behavior: smooth;
    >div{
        width: 100%;
        height:100% ;
    }
`

const Distributor = styled.div`
    height:100%;
    width:33%;
    padding:20px; 
    box-sizing:border-box;
`