import PropTypes from 'prop-types'
import React, {useState} from 'react'
export default function TextForm(props) {

  
   const handleUpClick=()=>{
     let newText=text.toUpperCase();
     setText(newText)
     props.showAlert("Converted to Uppercase","success")
   }  

   const handleLoClick=()=>{
     let newText=text.toLowerCase();
     setText(newText)
     props.showAlert("Converted to Lowercase","success")
   }
   
   const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select(); //To select the text written in the textbox 
    navigator.clipboard.writeText(text.value); //To copy the text written in the textbox 
    props.showAlert("Copied to clipboard","success")
  }

const handleExtraSpaces = () => {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "))
  props.showAlert("Extra spaces removed","success")
}

const handleClear=()=>{
  let newText="";
  setText(newText)
  props.showAlert("Text cleared","success")
}


   const handleOnChange=(event)=>{//We need to listen OnChange event so that we can write into the textarea even after button is clicked
   setText(event.target.value)//When a user tries o change the state then update the value as previous one+new
    }

  const [text,setText]=useState('');//text is a state which contains this default value passed
  //setText is a state used to update the default value 
  //setText("new text"); this updates the vallue present in the text variable
     return (
          <>
       <div className="container" style={{color: props.mode==='dark'?'white':'#042743' }}>
          <h1>{props.heading}</h1>
          <div className="mb-3">
          <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#042743':'white',color: props.mode==='dark'?'white':'#042743'}} rows="8"></textarea>
       </div>
          <button disabled={text.length===0}  className="btn btn-primary my-1 mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
          <button disabled={text.length===0} className="btn btn-success my-1 mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
          <button disabled={text.length===0} className="btn btn-danger my-1 mx-1" onClick={handleCopy}>Copy Text</button>
          <button disabled={text.length===0} className="btn btn-warning my-1 mx-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
          <button disabled={text.length===0} className="btn btn-info mx-1 my-1" onClick={handleClear}>Clear text</button>
      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}} >
          <h2>Your text summary</h2>
          <p><b>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</b> words and <b>{text.length}</b> characters</p>
          <p><b>{0.08*text.split(" ").filter((element)=>{return element.length!==0}).length}</b> Minutes read</p>
          <h3>Preview</h3>
          <p><b>{text.length>0?text:"Enter something to preview"}</b></p>
      </div>
      </>
    )
}