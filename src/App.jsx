import { useState } from 'react'
import './App.css'
import InputGroup from "./components/InputGroup.jsx";

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
        <InputGroup id="full-name" placeholder="Type here!" defaultValue="Jane Doe" labelText="Full name" onChange={(e) => handlePersonalDetailsChange("Full name", e.target.value)}></InputGroup>
        <InputGroup id="email" placeholder="Type here!" defaultValue="jane.doe@gmail.com" labelText="Email" onChange={(e) => handlePersonalDetailsChange("Email", e.target.value)}></InputGroup>
        <InputGroup id="phone-number" placeholder="Type here!" defaultValue="(123) 456-7890" labelText="Phone number" onChange={(e) => handlePersonalDetailsChange("Phone number", e.target.value)}></InputGroup>
        <InputGroup id="location" placeholder="Type here!" defaultValue="Los Angeles, CA" labelText="Location" onChange={(e) => handlePersonalDetailsChange("Location", e.target.value)}></InputGroup>
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
