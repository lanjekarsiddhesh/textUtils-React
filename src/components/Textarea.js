import React, { useState } from 'react'

export default function Textarea(prop) {
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
    console.log("test")
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
    if(text.split(" ").join("").length > 0){
      Wordcount = text.trim().split(" ").length;
    }
    return Wordcount
  }

  const ClearText = ()=>{
    setText('')
  }

  

  const [text, setText] = useState('Enter here your text for analyzing...')
  const [num, setnum] = useState(24)

  // const [tableData, NewtableData] = useState("")
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

  for(let word of commanWord){
    const count = Textlist.filter(wordCount => wordCount === word).length;
    console.log(count); // 3
  }
  console.log(commanWord.size)
  

  return (
    <>
    <div>
        <div style={{color: prop.mode==='dark'?'white':'black'}} className="mb-3">
        <h1>{prop.heading}</h1>
        <span>Font size: </span><input type='number' id="FontSize"  value={num} onInput={NumchangeHandlar} />
        <p id="Text_count">{counterText()} words and {text.length} Characters and {text.split(". ").length} Sentancees</p>
        <textarea className="form-control" value={text} id="ControlTextarea" rows="8" onChange={changeHandlar} ></textarea>
        </div>

        <button type="button" className="btn btn-secondary m-2" onClick={handdleUpperCase} >UPPER CASE</button>
        <button type="button" className="btn btn-secondary m-2" onClick={handdleLowerCase} >lower case</button>
        <button type="button" className="btn btn-secondary m-2 disabled" onClick={handdleCapitalize} >Capitalize</button>
        <button type="button" className="btn btn-secondary m-2 italic" onClick={handdleItalic} >italic</button>
        <button type="button" className="btn btn-secondary m-2 bold" onClick={handdleBold} >Bold</button>
        <button type="button" className="btn btn-secondary m-2" onClick={handleExtraSpace} >Remove spaces</button>
        <button type="button" className="btn btn-secondary m-2 disabled">Translate</button>
        <button type="button" className="btn btn-secondary m-2" onClick={TexttoSpeech} >Text to Speech</button>
        <button type="button" className="btn btn-danger m-2 clear-btn" onClick={ClearText} >Clear</button>
        
      
    </div>
    <div style={{color: prop.mode==='dark'?'white':'black'}} className="container mt-4">
      <h3>Analyzing...</h3>
      <h6>Total common words ({commanWord.size})</h6>
      <table style={{color: prop.mode==='dark'?'white':'black'}} className="table">
        <thead>
          <tr>
            <th scope="col">Word</th>
            <th scope="col">Count</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td id='word'>Mark</td>
          <td id="count">1</td>
          </tr>

          <tr>
          <td id='word'>Mark</td>
          <td id="count">1</td>
          </tr>
          
        </tbody>
      </table>
    </div>
    </>
  )
}
