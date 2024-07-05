import React from 'react'

export default function About(prop) {
  return (
    <div style={{color: prop.mode==='dark'?'white':'black'}}>
      <h1>This is About page of text utils web application</h1>
    </div>
  )
}
