import React, {useState} from "react"


export default function TextForm(pros) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked"+ text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    
    const [text, setText] = useState('Enter text here');
    // text = ("newText"); // Wrong way to change the state
    // setText = ("newText"); // Correct way to change the state
    return (
        <div>
            <h1>{pros.heading} </h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        </div>
    )
}