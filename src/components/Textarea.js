import React, { useState } from 'react'

export default function Textarea(prop) {

  const [text, setText] = useState('Enter here your text for analyzing...')
  const [num, setnum] = useState(24)

  const changeHandlar = (event)=>{
    setText(event.target.value)
  }
  
  const NumchangeHandlar = (event)=>{
    let TextArea = document.getElementById("ControlTextarea")
    setnum(event.target.value);
    TextArea.style.fontSize=event.target.value + 'px'
  }
 
  const handdleUpperCase = ()=>{
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handdleLowerCase = ()=>{
    let newText = text.toLowerCase();
    setText(newText)
  }

  const handdleCapitalize = ()=>{
    
    const sentences = text.split('. '); // Split the input into individual sentences
    const capitalizedSentences = sentences.map(sentence => {
      return sentence.charAt(0).toUpperCase() + sentence.slice(1);
    });
    
    const outputSentence = capitalizedSentences.join('. ');
    setText(outputSentence)

  }

  const handdleItalic = ()=>{
    let TextArea = document.getElementById("ControlTextarea")
    if(TextArea.classList.contains("italic")){
      TextArea.classList.remove("italic")
    }
    else{
      TextArea.classList.add("italic")
    }
    
  }

  const handdleBold = ()=>{
    let TextArea = document.getElementById("ControlTextarea")
      if(TextArea.classList.contains("bold")){
        TextArea.classList.remove("bold")
      }
      else{
        TextArea.classList.add("bold")
      }
  }

  const handleExtraSpace = ()=>{
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
  }

  const TexttoSpeech = ()=>{
    const synth = window.speechSynthesis
    let ourText = text
    const Speak = new SpeechSynthesisUtterance(ourText)
    synth.speak(Speak)
  }

  const counterText = ()=>{
    let Wordcount = 0
    Wordcount = text.split(" ").filter((element)=>{return element.length!==0}).length
    return Wordcount
  }

  const handleCopy = ()=>{
    navigator.clipboard.writeText(text)
    alert("Text Copied")
  }

  const ClearText = ()=>{
    setText('')
  }

  const Textlist = text.split(" ")
  const commanWord = new Set()
  const count = {};

  Textlist.forEach(element => {
    const word = document.getElementsByClassName('word')
    word.innerHTML = "khkhjh"
    count[element] = (count[element] || 0) + 1;
    if (count[element] > 1){
      commanWord.add(element)
    }
  });
  
  return (
    <>
    <div>
        <div style={{color: prop.mode==='dark'?'white':'black'}} className="mb-3">
        <h1>{prop.heading}</h1>
        <span>Font size: </span><input type='number' id="FontSize"  value={num} onInput={NumchangeHandlar} />
        <p id="Text_count">{counterText()} words and {text.length} Characters and {text.split(". ").filter((element)=>{return element.length!==0}).length} Sentancees</p>
        <textarea className="form-control" value={text} id="ControlTextarea" rows="8" onChange={changeHandlar} ></textarea>
        </div>

        <button type="button" className={`btn btn-secondary m-2 ${counterText()!==0?'enable':'disabled'}`} onClick={handdleUpperCase} >UPPER CASE</button>
        <button type="button" className={`btn btn-secondary m-2 ${counterText()!==0?'enable':'disabled'}`} onClick={handdleLowerCase} >lower case</button>
        <button type="button" className={`btn btn-secondary m-2 ${counterText()!==0?'enable':'disabled'}`} onClick={handdleCapitalize} >Capitalize</button>
        <button type="button" className={`btn btn-secondary m-2 italic ${counterText()!==0?'enable':'disabled'}`} onClick={handdleItalic} >italic</button>
        <button type="button" className={`btn btn-secondary m-2 bold ${counterText()!==0?'enable':'disabled'}`} onClick={handdleBold} >Bold</button>
        <button type="button" className={`btn btn-secondary m-2 ${counterText()!==0?'enable':'disabled'}`} onClick={handleExtraSpace} >Remove spaces</button>
        <button type="button" className={`btn btn-secondary m-2 ${counterText()!==0?'enable':'disabled'}`} onClick={handleCopy} >Copy</button>
        <button type="button" className={`btn btn-secondary m-2 ${counterText()!==0?'enable':'disabled'}`} onClick={TexttoSpeech} >Text to Speech</button>
        <button type="button" className="btn btn-danger m-2 clear-btn" onClick={ClearText} >Clear</button>
      
    </div>
    <div style={{color: prop.mode==='dark'?'white':'black'}} className="container mt-4">
      {/* <h3>Analyzing...</h3> */}
      <h4>Total common words ({commanWord.size})</h4>
    
    </div>
    </>
  )
}
