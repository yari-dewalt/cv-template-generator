import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState("");

  return (
    <>
      <div className="edit">
        <input placeholder="Type Here!" onChange={(e) => setText(e.target.value)}></input>
      </div>
      <div id="preview">
        <div id="preview-header">
          <h1>{text}</h1>
        </div>
      </div>
    </>
  )
}

export default App
