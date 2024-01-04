import "../styles/EducationForm.css";
import InputGroup from "./InputGroup.jsx";

function EducationForm({ data, onChange }) {
  const { degree, schoolName, location, startDate, endDate, id } = data;

  return (
    <>
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
      </form>
    </>
  )
}

export default EducationForm;
