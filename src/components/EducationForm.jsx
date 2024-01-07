import "../styles/EducationForm.css";
import InputGroup from "./InputGroup.jsx";
import Buttons from "./Buttons.jsx";

function EducationForm({ data, onChange, save, remove }) {
  const { degree, schoolName, location, startDate, endDate, id } = data;

  const isFormValid = () => {
    if (!schoolName || !degree || !startDate || !endDate || !location) {
      return false;
    }

    return true;
  };

  const handleSave = (e) => {
    if (isFormValid()) {
      save(e);
    }
    else {
      alert("Please fill out all required fields.");
    }
  }

  return (
    <form
      className="education-form section-form"
      id={id}
      data-array-name="educations"
      onSubmit={(e) => e.preventDefault()}
    >
      <InputGroup
        id="school-name"
        placeholder="Enter school / university"
        labelText="School"
        value={schoolName}
        onChange={onChange}
        data-key="schoolName"
      /> 
      <InputGroup
        id="degree"
        placeholder="Enter Degree / Field of Study"
        labelText="Degree"
        value={degree}
        onChange={onChange}
        data-key="degree"
      /> 
      <InputGroup
        id="date"
        placeholder="Enter Start Date"
        labelText="Start Date"
        value={startDate}
        onChange={onChange}
        data-key="startDate"
      /> 
      <InputGroup
        id="date"
        placeholder="Enter End Date"
        labelText="End Date"
        value={endDate}
        onChange={onChange}
        data-key="endDate"
      /> 
      <InputGroup
        id="location"
        placeholder="Enter Location"
        labelText="Location"
        value={location}
        onChange={onChange}
        data-key="location"
      /> 

      <Buttons save={handleSave} remove={remove}/>
    </form>
  );
}

export default EducationForm;
