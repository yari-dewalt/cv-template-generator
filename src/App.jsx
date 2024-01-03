import { useState } from 'react'
import './App.css'

function App() {
  const [personalDetails, setPersonalDetails] = useState({
    "Full name": "Jane Doe",
    "Email": "jane.doe@gmail.com",
    "Phone number": "(123) 456-7890",
    "Location": "Los Angeles, CA",
  });

  const handlePersonalDetailsChange = (key, value) => {
    console.log(key, value);
    setPersonalDetails((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
  };

  return (
    <>
      <div id="edit">
        <div className="input-group">
          <label for="full-name">Full name</label>
          <input id="full-name" placeholder="Type Here!" defaultValue="Jane Doe" onChange={(e) => handlePersonalDetailsChange("Full name", e.target.value)}></input>
        </div> 
        <div className="input-group">
          <label for="email">Email</label>
          <input id="email" placeholder="Type Here!" defaultValue="jane.doe@gmail.com" onChange={(e) => handlePersonalDetailsChange("Email", e.target.value)}></input>
        </div>
        <div className="input-group">
          <label for="phone-number">Phone number</label>
          <input id="phone-number" placeholder="Type Here!" defaultValue="(123) 456-7890" onChange={(e) => handlePersonalDetailsChange("Phone number", e.target.value)}></input>
        </div>
        <div className="input-group">
          <label for="email">Email</label>
          <input id="email" placeholder="Type Here!" defaultValue="Los Angeles, CA" onChange={(e) => handlePersonalDetailsChange("Location", e.target.value)}></input>
        </div>
      </div>
      <div id="preview">
        <div id="preview-header">
          <h1 id="preview-name">{personalDetails['Full name']}</h1>
          <div id="preview-contact-info">
            <div id="preview-email">
              <img src="../public/mail.svg"></img>
              <p>{personalDetails["Email"]}</p>
            </div>
            <div id="preview-number">
              <img src="../public/phone.svg"></img>
              <p>{personalDetails["Phone number"]}</p>
            </div>
            <div id="preview-location">
              <img src="../public/location.svg"></img>
              <p>{personalDetails["Location"]}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
