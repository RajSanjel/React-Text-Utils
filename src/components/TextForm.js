import React, { useState } from 'react'


export default function TextForm(props) {
    const [initialText, finalText] = useState("")
    document.title = "Home"
    const handleUppercase = () => {
        finalText(initialText.toUpperCase())
        if (initialText  === " ") { props.showAlert("Nothing to Convert to Uppercase", "warning") } else { props.showAlert("Converted to UPPERCASE!", "success") }
    }
    const handleChange = (event) => {
        finalText(event.target.value)
    }
    const handleLowercase = () => {
        props.showAlert("Converted to lowercase!", "success")
        finalText(initialText.toLowerCase())
    }
    const handleClear = () => {
        finalText("")
        props.showAlert("Cleared Text Area", "success")
    }
    let preview = "Text Preview";
    let numberOfWords = initialText.split(/[ ]+/).length - 1;
    let numberOfChar = initialText.length;
    if (numberOfChar === 0) {
        preview = "";
    } /*style={backgroundColor:{props.mode==='light'?'dark':'light'}}*/
    return (
        <>
            <div style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <div className="mb-3"  >
                    <h1 >{props.heading}</h1>
                    <textarea className="form-control" value={initialText} onChange={handleChange} id="myBox" rows="8" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#3b3f43', color: props.mode === 'light' ? 'black' : 'white    ' }}></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUppercase} >Convert To UpperCase</button>
                <button className="mx-2 btn btn-primary" onClick={handleLowercase} >Convert To LowerCase</button>
                <button className="mx-2 btn btn-danger" onClick={handleClear} >Clear</button>
                <div className="container my-3">
                    <h1>Your Text Summary</h1>

                    <h6>{numberOfWords} Words!, {numberOfChar} Characters</h6>
                    <p> {0.008 * numberOfWords} Minutes to Read</p>
                    <h3 className="my-3">{preview}</h3>
                    <p><b>{initialText}</b></p>

                </div>
            </div>
        </>
    )
}

