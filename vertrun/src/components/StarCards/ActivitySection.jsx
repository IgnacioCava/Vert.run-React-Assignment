import React from 'react'
import styled from 'styled-components'
import distance from '../../assets/distance.png'


export default function ActivitySection({actData}){
console.log(actData)

//[actData.amount, actData.low].map()
    return(
        <SectionContainer>
            {actData?.map((e,i)=>
            <>
                <Act>
                    <Type>{e.type||"Distance"}</Type>
                    <Icon src={e.image||distance} alt={e.type}/>
                    <Amount>{e.amount}</Amount>
                    <Separator>
                    <hr/> at <hr/>

                    </Separator>
                    <SecData>
                        <div>
                            <p>Average</p>
                            <SubAmount>{e.low}</SubAmount>
                        </div>
                        <div>
                            <p>Top</p>
                            <SubAmount>{e.high}</SubAmount>
                            
                        </div>
                    </SecData>
                </Act>
                </>
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
height: 100;
`

const Type = styled.span`
font-size: 1.5vw;
font-weight:400 ;
align-self:start ;
padding-left: 5px;
`

const Icon = styled.img`
width: 50%;
object-fit:contain ;
`

const Amount = styled.span`
font-weight: bold;
font-size: 3vw;
`

const Act = styled.div`
display:flex ;
justify-content: space-around;
flex-direction:column ;
align-items: center;
background: rgba(18, 18, 18, 0.11);
border-radius: 10px;
width: 45%;
height: 100%;
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
justify-content: space-around;
p{
    margin:0;
    font-size:15px ;
}
div{
    display:flex ;
    flex-direction:column;
    align-items: flex-start;
}
`

const SubAmount = styled.span`
font-size:25px ;
font-weight:700 ;
`