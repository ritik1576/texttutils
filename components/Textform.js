// import React from "react";
import React, { useState } from 'react';

export default function Textform(props) {
    const handleUpclick = ()=>{
        // console.log("upper case is clicked" + Text);
        let newtext = Text.toUpperCase();
        setText (newtext)
        props.showalert("converted to uppercase" , "success");
    }
    const handleLpclick = ()=>{
        // console.log("upper case is clicked" + Text);
        let newtext = Text.toLowerCase();
        setText (newtext)
        props.showalert("converted to lowercase" , "success");
    }

    const handleonchange = (event)=>{
        // console.log(" onchange");
        setText (event.target.value)
    }
    const [Text, setText] = useState('');

  return (
    <>
 <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="mybox"
          rows="8"
          value={Text}
          style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}}
          onChange={handleonchange}
        ></textarea>
      </div>
        <button className="btn btn-primary mx-2" onClick={handleUpclick}>convert to uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLpclick}>convert to lowercase</button>
    </div>
    <div className='container my-3' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Youe text summary</h1>
        <p>{Text.split(" ").length}  words and {Text.length} character</p>
        <p>{0.008 * Text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{Text.length>0?Text:"Enter something in textbox above to preview it"}</p>
    </div>
    </>
  );
}
