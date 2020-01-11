import React from "react";
import styled from "styled-components"

const CardDiv = styled.div`
    width: 200px;
    height: 200px;
    background: rgb(204, 163, 0, 0.7);
    border: 2px solid black;
    border-radius 10px;
    margin: 5px;
    text-align: center;
    
    

`;



export default function Card(props){
    return(
        <CardDiv>    
            <h2>{props.name}</h2>
            <p>Height: {props.height}</p>
            <p>Mass: {props.mass}</p>     
        </CardDiv>
    );
}