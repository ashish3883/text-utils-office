import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('')
    const onChangeHandle = (event) => {
        setText(event.target.value)
    }
    const handleUpperCase = () => {
        if(text.length>0){
            let newText = text.toUpperCase();
            setText(newText)
            props.showAlert("Converted to Upper Case", "success")
        }
        else{
            props.showAlert("Empty Text Box", "error")
        }
    }
    const handleLowerCase = () => {
        if(text.length>0){
            let newText = text.toLowerCase();
            setText(newText)
            props.showAlert("Converted to Lower Case", "success")
        }
        else{
            props.showAlert("Empty Text Box", "error")

        }
    }
    const handleCopyText = () => {
        if(text.length>0){
            navigator.clipboard.writeText(text);
            props.showAlert("Text Coppied", "success")
        }
        else{
            props.showAlert("Empty Text Box", "error")
        }
    }
    const textClear = () => {
        if(text.length>0){
            setText("")
            props.showAlert("Text Cleared", "success")
        }
        else{
            props.showAlert("Empty Text Box", "error")
        }
    }
    const removeExtraSpace = () => {
        if(text.length>0){
            let copyText = text.split(/[ ]+/)
            setText(copyText.join(" "))
            props.showAlert("Extra Spaces removed", "success")
        }
        else{
            props.showAlert("Empty Text Box", "error")
        }
    }

    return (
        <>
        <div className={`text-${props.mode==='dark'?"light":"dark"}`}>
            <div class="mb-3">
                <h1 className='my-2'>Enter Your Text To Modified</h1>
                <textarea class="form-control my-2" value={text} onChange={onChangeHandle} id="myBox" rows="8" placeholder='Enter Your Text' style={{backgroundColor:props.mode==='dark'?"darkgray":"white", color:props.mode==='dark'?"white":"black"}}></textarea>
            </div>
            <div className='container'>
                <button type="button" class={`btn btn-${props.mode==='dark'?"secondary":"primary"} mx-1 my-1`} disabled={text.length===0} onClick={handleUpperCase}>Convert to UpperCase</button>
                <button type="button" class={`btn btn-${props.mode==='dark'?"secondary":"primary"} mx-1 my-1`} disabled={text.length===0} onClick={handleLowerCase}>Convert to LowerCase</button>
                <button type="button" class={`btn btn-${props.mode==='dark'?"secondary":"primary"} mx-1 my-1`} disabled={text.length===0} onClick={handleCopyText}>Copy Text</button>
                <button type="button" class={`btn btn-${props.mode==='dark'?"secondary":"primary"} mx-1 my-1`} disabled={text.length===0} onClick={removeExtraSpace}>Remove Extra Space</button>
                <button type="button" class={`btn btn-${props.mode==='dark'?"secondary":"primary"} mx-1 my-1`} disabled={text.length===0} onClick={textClear}>Clear Text</button>
            </div>

            <div className='my-3'>
                <h3 className='my-2'>Your Text Summary</h3>
                <p>{text.length} Charecters & {text.split(/\s+/).filter((el)=>{return el.length!==0}).length} Words</p>
                <p>It Takes {0.008 * text.split(" ").filter((el)=>{return el.length!==0}).length} Minute to Read</p>
            </div>
            <h3 className='my-2'>Preview</h3>
            <div className='my-2'>
                {text.length>0?text:"Write in text box to preview it"}
            </div>
        </div>
        </>
    )
}
