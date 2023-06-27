import React , {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Enter your text here")
    
    const handleOnClick = () =>{
      if(text===text.toUpperCase()){
        props.handleAlert("Already in uppercase","warning");
      }
      else{
        let newText= text.toUpperCase();
        setText(newText);
        props.handleAlert("Converted to uppercase","success");
      }
    }

    const copyOnClick = () =>{
      //let newText= text;
      var text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.handleAlert("Text Copied!","success");
  }

  const clearOnClick = () =>{
    setText(" ");
    props.handleAlert("Text Cleared!","success");
}

    const LowerHandleOnClick =() =>{
        console.log("Lower Button was clicked!");
        let newText= text.toLowerCase();
        setText(newText);
        props.handleAlert("Converted to lowercase","success");
    }

    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value)
    }
  return (
    <>
  <div className={`mb-3 text-${props.mode==="dark"?"light":"dark"} my-2`} style={{color: props.mode==="dark"?"white":"#031221" }}>
    <h1>{props.heading}</h1>
    <textarea className="form-control" id="exampleFormControlTextarea1" style={{backgroundColor: props.mode==="dark"?"grey":"white"}} rows="10" value={text} onChange={handleOnChange}></textarea>
  </div>
  <button className="btn btn-primary mx-1" onClick={handleOnClick} > Convert to Uppercase </button>
  <button className="btn btn-primary mx-1" onClick={LowerHandleOnClick} > Convert to Lowercase </button>
  <button className="btn btn-primary mx-1" onClick={copyOnClick} > Copy Text </button>
  <button className="btn btn-primary mx-1" onClick={clearOnClick} > Clear Text </button>

  <div className={`container text-${props.mode==="dark"?"light":"dark"} my-4`} style={{color: props.mode==="dark"?"white":"#031221" }}>
      <h2>Your Summary</h2>
      <h3>Preview: </h3>
      <p>{text.length>0?text:<h6>Enter text above to preview it</h6>}</p>
      <p>Total Words: {text.trim().length === 0 ? 0 : text.trim().split(" ").length}</p>
      <p>Total Characters: {text.length}</p>
    </div>
  </>
  )
}
