import React,{useState} from "react";
import Word from "./components/Word";
import Letter from "./components/Letter";
import Pharagrap from "./components/Pharagrap";

export default function App() {
  const [text,setText]= useState("");
  const numberText = text.split(" ").join("").length;

  const [word,setWord]=useState("");
  const numberWord = word.trim().split(/\s+/).filter(Boolean).length;

  const [pharagrap,setPharagrp]=useState("");
  const numberPharagrap = pharagrap.split('\n').filter(Boolean).length;

  const handleNumberText=(e)=>{
    setText(e.target.value);
    setWord(e.target.value);
    setPharagrp(e.target.value);
  }

  const handleUperCase=()=>{
    setText(text.toUpperCase());
  }
  const handleLowerCase=()=>{
    setText(text.toLocaleLowerCase());
  }
  return (
    <>
      <div style={{margin:"0 auto"}}>
        <h1 style={{ textAlign: "center" }}>Word Counter</h1>
        <div
          style={{
            display: "flex",
            width: "800px",
            justifyContent: "space-between",
            marginLeft: "23vw",
          }}
        >
          <Word word={numberWord}></Word>
          <Letter text={numberText}></Letter>
          <Pharagrap pharagrap={numberPharagrap}></Pharagrap>
        </div>
        <br />
        <textarea
          style={{ marginLeft: "20vw", height: "400px", width: "900px",paddingLeft:"10px",paddingTop:"5px"}}
          placeholder="Enter/Paste Your text Here" 
          onChange={handleNumberText}
          value={text}
        />
        <br />
        <br />
        <br />

        <div
          style={{
            marginLeft: "26vw",
            display: "flex",
            justifyContent: "space-around",
            width: "700px",
          }}
        >
          <button
            style={{
              height: "50px",
              width: "200px",
              background: "linear-gradient(#e66465, #9138e5)",
              borderRadius: "5px",
              cursor: "pointer",
              color: "white",
            }}
            onClick={handleUperCase}
          >
            Click to Uppercase
          </button>
          <button
            style={{
              height: "50px",
              width: "200px",
              background: "linear-gradient(#e66465, #9138e5)",
              borderRadius: "5px",
              cursor: "pointer",
              color: "white",
            }}
            onClick={handleLowerCase}
          >
            Click to LowerCase
          </button>
        </div>
      </div>
    </>
  );
}
