import React from 'react'
import styled from 'styled-components'

export default function MonthlySummary({month, stats}){
    if(stats){
    return(
        
        <SummaryContainer>
            
            <Title>{stats.type}</Title>
            <Stats>
                <Icon src={stats.icon} alt={stats.type}/>
                <Numbers>
                    <Total>{stats.total.unit==='%'?stats.total.value/(stats.total.samples||1):Math.round(stats.total.value/1000)}{stats.total.unit}</Total>
                    <Details>
                        <div>
                            <p>{stats.top.label}</p>
                            <Value>{stats.top.value}{stats.top.unit}</Value>
                        </div>
                        <div>
                        <p>{stats.bot.label}</p>
                            <Value>{stats.bot.value}{stats.bot.unit}</Value>
                        </div>
                    </Details>
                </Numbers>
            </Stats>
        </SummaryContainer>
    )} else return null
}

const SummaryContainer = styled.div`
width: 100%;
display: flex;
flex-direction:column ;
padding:10px;
box-sizing: border-box;
justify-content: space-around;
background: rgba(35, 68, 152, 0.25);
transition:.6s ease-out ;
color:white;
*{
    margin:0;
    text-shadow: -4px 5px 3px rgba(0, 0, 0, 0.25);
}
:hover{
    filter: drop-shadow(-12px 11px 4px rgba(0, 0, 0, 0.671));
    transform:scale(105%);
}
`

const Title = styled.span`
font-size: min(2vw, 3vh);
font-weight:600;
text-align:start;
margin-bottom:5px;
`

const Total = styled.div`
font-weight: 600 ;
font-size:min(4vw, 7vh);
margin: 10px 0;
@media (max-width:1200px) {
    text-align:unset ;
}
`

const Icon = styled.img`
width: 50%;
height: 10vh;
object-fit:contain ;
`

const Stats = styled.div`
display: flex;
flex-direction: row ;
align-items: center;
@media (max-width:1200px) {
    flex-direction: column ;
}
`

const Numbers = styled.div`
display: flex;
flex-direction: column ;
width:100% ;
`
const Value= styled.p`
font-weight:500 ;
font-size: min(2vw, 3vh);
`
const Details = styled.div`
display: flex;
flex-direction: row ;
justify-content: space-around;
@media (max-width:1200px) {
    justify-content: space-around;
}
@media (max-width:700px) {
    display:none;
}
>div{
    text-align:start ;
}
`