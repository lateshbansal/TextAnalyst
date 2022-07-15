import React , { useState } from 'react'

function TextForm(props) {

const handleUpClick=(e)=>{
console.log("click");
let newText= Text.toUpperCase();

setText(newText);



}

function capitalizee(mySentence) {
 
  const words = mySentence.split(" ");
  
  for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  
 return words.join(" ");
}

const handleCapClick=(e)=>{
  console.log("click");
  let newText= capitalizee(Text) ;
  
  setText(newText);
  
  
  
  }

  const handleLowClick=(e)=>{
    console.log("click");
    let newText= Text.toLowerCase() ;
    
    setText(newText);
    
    
    
    }

    
  const clearText=(e)=>{
    console.log("click");
  let userWant= window.confirm("you want to delete your text permanently?");

  if(userWant===true)
  {

    let newText= "" ;
    
    setText(newText);
    
  }
  
    
    }
const handleOnChange=(e)=>{
  console.log("onchange")
  setText(e.target.value);
}

// const copyInp= ()=>{
// const btnCopy=document.getElementsByClassName(btnCopy)
// }



  const [Text, setText] = useState('Enter something ...');
  return (
    <>

    <br></br>
        <div className="container  mb-3">
  <label htmlFor="box1" className={`form-label text-${props.mode==='dark'?'light':'dark'}`}   >{props.heading}</label>
  
  {/* <button className="btn btn-primary my-2 btnCopy" onClick={copyInp}  >Copy</button> */}
  <textarea className="form-control form " style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}}  onChange={handleOnChange} value={Text}  id="box1" rows="10"></textarea>

<button className="btn btn-primary my-2" onClick={handleUpClick}  >Convert to upper case</button>
<button className="btn btn-primary my-2 mx-3" onClick={handleCapClick}  >Convert to capitalize</button>

<button className="btn btn-primary my-2 mx-3" onClick={handleLowClick}  >Convert to Lower case</button>

<button className="btn btn-primary my-2 mx-3" onClick={clearText}  >Delete All Text</button>
</div>

<div className="container my-3"> 

<p  className={`text-${props.mode==='dark'?'light':'dark'}`} >{Text.split(" ").length} words , {Text.length} characters</p>

<h3 className={`text-${props.mode==='dark'?'light':'dark'}`}>preview</h3>
{/* <button onclick="myFunction()">Copy text</button> */}
<p id="myInput" className={`text-${props.mode==='dark'?'light':'dark'}`}>{Text.length>0?Text:"enter something in above textbox to preview here"}</p>

 
</div>

        </>
  )
}

export default TextForm