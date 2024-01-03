import { useState } from 'react'
import './App.css'
import InputGroup from "./components/InputGroup.jsx";
import PersonalDetails from "./components/PersonalDetails.jsx";

function App() {
  const [personalDetails, setPersonalDetails] = useState({
    "Full name": "Jane Doe",
    "Email": "jane.doe@gmail.com",
    "Phone number": "(123) 456-7890",
    "Location": "Los Angeles, CA",
  });

  const handlePersonalDetailsChange = (e) => {
    const { key } = e.target.dataset;
    setPersonalDetails((prevValues) => ({
      ...prevValues,
      [key]: e.target.value,
    }));
  };

  return (
    <>
      <div id="edit">
        <PersonalDetails onChange={handlePersonalDetailsChange} fullName={personalDetails["Full name"]} email={personalDetails["Email"]} phoneNumber={personalDetails["Phone number"]} location={personalDetails["Location"]}/>
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

export default App;
