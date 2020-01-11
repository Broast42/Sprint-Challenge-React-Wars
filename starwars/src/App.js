import React, {useState, useEffect} from 'react';
import axios from "axios";
import Card from "./Card";
import Button from "./Button";
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

const AppDiv = styled.div`
  text-align: center;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [apiData, setApiData] = useState([]);
  const [page, setPage] = useState(`https://swapi.co/api/people/`);
  const [next, setNext] = useState("");
  const [pre, setPre] = useState("");

  useEffect(()=>{
    axios
      .get(page)
      .then(res => {
        setApiData(res.data.results);
        setNext(res.data.next);
        setPre(res.data.previous)
      })
      .catch(error =>{
        console.log("Api data Error:", error);
      });
  },[page]);

  console.log("Api data:", apiData);
  console.log("next:", next);

  const nextPage = () =>{
    setPage(next);
  }

  const prePage = () =>{
    setPage(pre);
  }

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
      <AppDiv>
        <Button name={"<- Previous"} function={prePage}/>
        <Button name={"Next ->"} function={nextPage}/>
      </AppDiv>
      
    </div>
    
  );
}

export default App;
