import React from 'react';
import styled from 'styled-components';

export default function UserSideStats({ icon, label, value, unit }) {
    if(!unit)unit=''
	return (
		<SideStats>
            <Labeler>
                <Icon>{icon}</Icon>
                <Value>{value}<Unit>{unit}</Unit></Value>
            </Labeler>
                <Label>{label}</Label>
		</SideStats>
	);
}

const Labeler = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 100%;
    width:100% ;
    overflow: hidden;
    align-items: center;
`

const Unit = styled.span`
    font-size: 1.5vw;
`

const Label = styled.span`
    text-shadow: 0px 6px 4px rgb(0 0 0 / 25%);
    text-align: start;
    white-space:nowrap ;
    display:flex ;
    width:100% ;
`

const Icon = styled.span`
    display: flex;
    height: 100%;
    width: 100%;
    max-width: 100px;
    align-items: flex-end;

>svg{
    width: fit-content;
    height: 7vh;
    *{
    width: 100%;
}
}

`

const SideStats = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 80%;
    height:30% ;
    color: white;
    align-items: center;
    @media (max-width:1000px) {
        height:unset;
        flex-direction: column;
        align-items: center;
        ${Labeler}{
            flex-direction: column;
        }
        ${Icon}{
            justify-content: center;
        }
        ${Label}{
            justify-content: center;
        }
    }
`

const Value = styled.h3`
    font-weight:400;
    //font-family: 'Montserrat', sans-serif;
    font-family: 'Roboto', sans-serif;
    margin:0;
    font-size: 2.5vmax;
    font-weight: 400;
    text-shadow: 0px 6px 4px rgba(0, 0, 0, 0.25);

`