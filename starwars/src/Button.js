import React from "react";
import styled from "styled-components"

const CustomButton = styled.button`
    width: 100px;
    height: 30px;
    margin 20px;
    border-radius: 5px; 
`;

export default function Button(props){
    return(
        <CustomButton onClick={()=>{props.function()}}>{props.name}</CustomButton>
    );
}