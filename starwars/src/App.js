import React, {useState, useEffect} from 'react';
import axios from "axios";
import Card from "./Card";
import styled from "styled-components"
// import './App.css';

const AppH1 = styled.h1`
  text-align: center;
`;

const FlexDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 900px
  margin: 0px auto;
  
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [apiData, setApiData] = useState([]);

  useEffect(()=>{
    axios
      .get(`https://swapi.co/api/people/`)
      .then(res => {
        setApiData(res.data.results);
      })
      .catch(error =>{
        console.log("Api data Error:", error);
      });
  },[]);

  console.log("Api data:", apiData);
  

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <AppH1 className="Header">React Wars</AppH1>
      <FlexDiv>
        {apiData.map((x, index)=>{
          return(
            <div key={index}>
              <Card  name={x.name} height={x.height} mass={x.mass}/>
            </div>  
          );
          
        })}
        
      </FlexDiv>
    
    </div>
    
  );
}

export default App;
