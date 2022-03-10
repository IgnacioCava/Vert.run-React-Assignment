import React from 'react'
import styled from 'styled-components'


export default function ActivitySection({stats}){

    return(
        <SectionContainer>
            {stats?.map((e,i)=>e?
                <Act key={i}>
                    <Type>{e.type}</Type>
                    <MainData>
                        <Icon src={e.icon} alt={e.type}/>
                        <Amount>{Math.round(e.total.value/1000)}{e.total.unit==='%'?'%':'km'}</Amount>
                    </MainData>

                    <Separator>
                    <hr/> at <hr/>
                    </Separator>
                    
                    <SecData>
                        <div>
                            <p>{e.bot.label}</p>
                            <SubAmount>{e.bot.value?e.bot.value:0}{e.bot.unit}</SubAmount>
                        </div>
                        <div>
                            <p>{e.top.label}</p>
                            <SubAmount>{e.top.value?e.top.value:0}{e.top.unit}</SubAmount>
                        </div>
                    </SecData>
                </Act>:null
            )}
        </SectionContainer>
    )
}

const SectionContainer = styled.div`
display: flex;
color: white;
overflow: auto;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-evenly;
gap:10px;
width: 100%;
height: 100%;
`

const MainData = styled.div`
display: flex;
flex-direction:column ;
width:100% ;
align-items: center;
justify-content: space-evenly;
`

const Type = styled.span`
font-size: 1.5vw;
font-weight:400 ;
align-self:start ;
padding-left: 5px;
`

const Icon = styled.img`
width: 50%;
height: 8.5vh;
object-fit:contain ;
`

const Amount = styled.span`
font-weight: bold;
font-size: min(3vw, 5vh);
`

const Act = styled.div`
display:flex ;
justify-content: space-around;
flex-direction:column ;
overflow: auto;
align-items: center;
background: rgb(43, 119, 185);
border-radius: 10px;
width: 45%;
height: 100%;
min-height:200px ;
`

const Separator = styled.div`
display:flex ;
flex-direction:row ;
align-items: center;
width: 100%;
justify-content: center;
gap:5px;
font-size:15px ;
>hr{
    width:20% ;
    border:0;
    margin:0;
    height:4px ;
    background: rgba(196, 196, 196, 0.3);
    align-items: center;
}
`

const SecData = styled.div`
display:  flex;
width: 80%;
justify-content: space-between;
p{
    margin:0;
    font-size:15px ;
    text-align: left;
}
div{
    display:flex ;
    flex-direction:column;
    align-items: flex-start;
}
`

const SubAmount = styled.span`
font-size:min(2vw, 4vh) ;
font-weight:700 ;
`