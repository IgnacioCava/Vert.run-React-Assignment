import React from 'react';
import styled from 'styled-components';

export default function UserSideStats({ icon, label, value, unit }) {
    if(!unit)unit=''
	return (
		<SideStats>
            <Labeler>
                <Icon>{icon}</Icon>
                <Label>{label}</Label>
            </Labeler>
            <Value>{value}<Unit>{unit}</Unit></Value>
		</SideStats>
	);
}

const Labeler = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    overflow: hidden;
`

const Unit = styled.span`
    font-size: 1.5vw;
`

const Label = styled.span`
    text-shadow: 0px 6px 4px rgb(0 0 0 / 25%);
    text-align: start;
    display: flex;
    flex-wrap: wrap;
`

const Icon = styled.span`
    display: flex;
    height: 100%;
    max-height: 100px;
    width: 100%;
    max-width: 100px;

>svg{
    width: fit-content;
    height: 100%;
    padding:5px;
    box-sizing: border-box;
}
*{
    height: 100%;
    width: 100%;
}
`

const SideStats = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
    margin: 5px;
    color: white;
    align-items: center;
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