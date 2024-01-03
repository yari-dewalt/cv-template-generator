import { useState } from 'react'
import './App.css'
import InputGroup from "./components/InputGroup.jsx";
import PersonalDetails from "./components/PersonalDetails.jsx";
import PersonalInfoSection from "./components/PersonalInfoSection.jsx";

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
        <PersonalInfoSection fullName={personalDetails["Full name"]} email={personalDetails["Email"]} phoneNumber={personalDetails["Phone number"]} location={personalDetails["Location"]}/>
      </div>
    </>
  )
}

export default App;
