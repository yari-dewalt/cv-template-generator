import { useState } from 'react'
import uniqid from 'uniqid';
import data from "./data.jsx";
import './App.css'
import PersonalDetails from "./components/PersonalDetails.jsx";
import PersonalInfoSection from "./components/PersonalInfoSection.jsx";
import ExpandSection from "./components/ExpandSection.jsx";
import EducationForm from "./components/EducationForm.jsx";
import EducationInfo from "./components/EducationInfo.jsx";
import InfoSection from "./components/InfoSection.jsx";
import CreateForm from "./components/CreateForm.jsx";
import DisplayForms from "./components/DisplayForms.jsx";
import EditEducationSection from "./components/EditEducationSection.jsx";

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

  function createForm(arrayName, object) {
    const section = structuredClone(sections[arrayName]);
    section.push(object);
    setSections({...sections, [arrayName]: section});
  }

  const createEducationForm = () =>
    createForm("educations", {
      degree: "",
      schoolName: "",
      location: "",
      startDate: "",
      endDate: "",
      isCollapsed: false,
      id: uniqid(),
    });

  function toggleValue(e, key) {
    const sectionForm = e.target.closest(".section-form");
    const { id } = sectionForm;
    console.log(id);
    const { arrayName } = sectionForm.dataset;
    console.log(arrayName);
    const section = sections[arrayName];
    setSections({
      ...sections,
      [arrayName]: section.map((form) => {
        if (form.id === id) {
          form[key] = !form[key];
        }

        console.log(form);
        return form;
      }),
    });
  }

  const toggleCollapsed = (e) => toggleValue(e, "isCollapsed");

  function removeForm(e) {
    const form = e.target.closest(".section-form");
    const { arrayName } = form.dataset;
    const section = sections[arrayName];
    const { id } = form;

    setSections({
      ...sections,
      [arrayName]: section.filter((item) => item.id !== id),
    });
  }

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
        <EditEducationSection
          educations={sections.educations}
          isOpen={sectionOpen === "Education"}
          onChange={handleSectionChange}
          createForm={createEducationForm}
          setOpen={setOpen}
          toggleCollapsed={toggleCollapsed}
          onRemove={removeForm}
        />
      </div>
      <div id="preview">
        <PersonalInfoSection fullName={personalDetails.fullName} email={personalDetails.email} phoneNumber={personalDetails.phoneNumber} location={personalDetails.location}/>
        <InfoSection array={sections.educations} InfoComponent={EducationInfo} title="Education"/>
      </div>
    </>
  )
}

export default App;
