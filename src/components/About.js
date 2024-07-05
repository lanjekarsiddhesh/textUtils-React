import React from 'react'

export default function About(prop) {
  return (
    <div style={{color: prop.mode==='dark'?'white':'black'}}>
      <main>
        <section class="jumbotron text-center">
            <h1 class="display-4">About Text Utils</h1>
            <p class="lead">Text Utils is a powerful online text manipulation and analysis platform built with React.</p>
        </section>
        <section class="container">
            <div class="row">
                <div class="col-md-6">
                    <h2>Our Story</h2>
                    <p>Text Utils was created by <strong>Siddhesh Lanjekar</strong>, a developer passionate about building innovative solutions. With a background in IT field, I saw the need for a platform that could simplify text manipulation and analysis tasks. After days of development, Text Utils was born.</p>
                </div>
                <div class="col-md-6">
                    <h2>Our Mission</h2>
                    <p>Our mission is to empower individuals and organizations to work more efficiently with text data. We believe that by providing a user-friendly and feature-rich platform, we can help people unlock new insights and opportunities from their text data.</p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <h2>Get in Touch</h2>
                    <p>If you have any questions, feedback, or just want to say hello, please don't hesitate to reach out. You can contact us at <strong>lanjekarsiddhu1@gmail.com</strong></p>
                    
                </div>
            </div>
        </section>
    </main>
    
    </div>
  )
}
