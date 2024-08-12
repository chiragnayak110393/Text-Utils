import React,{useState} from 'react'

export default function TextForm(props) {

  const handleUpClick =()=>{
    let newText = text.toUpperCase();
    setText(newText)  
    props.showAlert("Your Text has been converted to Upper Case","success")
  }

  const handlelowClick =()=>{
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Your Text has been converted to Lower Case","success")  
  }

  const handleclearClick =()=>{
    let newText = ("");
    setText(newText) 
    props.showAlert("Your Text has been cleared","success")
  }

  // const handlecapitalclick =()=>{
  //   let newText = text-transform:capitalize();
  //   setText(newText)  
  // }

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
  

  const handleOnChange =(event)=>{
    setText(event.target.value)
  }

  const [text, setText] = useState('Enter text here');
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'#2365a6'}}>
      <h2>{props.heading} </h2>
<div className="mb-3">
<textarea className="form-control" value={text} onChange={handleOnChange} style ={{backgroundColor:props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'#2365a6'}}  id="text" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-1" onClick={handlelowClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-1" onClick={handleclearClick}>Clear Text</button>
<button type="submit" className="btn btn-primary mx-1" onClick={speak} >Text to Speech</button>
{/* <button className="btn btn-primary mx-1" onClick={handlecapitalclick}>Capitalize</button> */}

    </div>
    <div className="container my-3"style={{color:props.mode==='dark'?'white':'#2365a6'}}>
      <h2>Your Text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.08 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter your text to preview"}</p>
    </div>
    </>
  )
}
