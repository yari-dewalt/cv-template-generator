import { useState } from 'react'
import data from "./data.jsx";
import './App.css'
import PersonalDetails from "./components/PersonalDetails.jsx";
import PersonalInfoSection from "./components/PersonalInfoSection.jsx";
import ExpandSection from "./components/ExpandSection.jsx";
import EducationForm from "./components/EducationForm.jsx";
import EducationInfo from "./components/EducationInfo.jsx";

function App() {
  const [personalDetails, setPersonalDetails] = useState(data.personalInfo);

  const handlePersonalDetailsChange = (e) => {
    const { key } = e.target.dataset;
    setPersonalDetails({
      ...personalDetails,
      [key]: e.target.value
    });
  };

  const [educationDetails, setEducationDetails] = useState(data.sections.educations[0]);

  const [sections, setSections] = useState(data.sections);

  function handleSectionChange(e) {
    const { key } = e.target.dataset;
    const inputValue = e.target.value;
    const form = e.target.closest(".section-form");
    const { id } = form;
    const { arrayName } = form.dataset;
    const section = sections[arrayName];
    setSections({
      ...sections,
      [arrayName]: section.map((obj) => {
        if (obj.id === id) obj[key] = inputValue;
        return obj;
      }),
    });
  }

  const [sectionOpen, setSectionOpen] = useState(null);
  const setOpen = (sectionName) => setSectionOpen(sectionName);


  return (
    <>
      <div id="edit">
        <PersonalDetails
          onChange={handlePersonalDetailsChange}
          fullName={personalDetails.fullName}
          email={personalDetails.email}
          phoneNumber={personalDetails.phoneNumber}
          location={personalDetails.location}
        />
        <ExpandSection isOpen={sectionOpen === "Education"} setOpen={setOpen} sectionName="Education" iconSource="../public/education.svg"/>
        <EducationForm data={educationDetails} onChange={handleSectionChange}/>
      </div>
      <div id="preview">
        <PersonalInfoSection fullName={personalDetails.fullName} email={personalDetails.email} phoneNumber={personalDetails.phoneNumber} location={personalDetails.location}/>
        <div>
          <h3>Education</h3>
          <EducationInfo data={educationDetails}/>
        </div>
      </div>
    </>
  )
}

export default App;
