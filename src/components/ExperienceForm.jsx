import "../styles/ExperienceForm.css";
import InputGroup from "./InputGroup.jsx";
import Buttons from "./Buttons.jsx";

function ExperienceForm({ data, onChange, save, remove }) {
  const { companyName, positionTitle, location, description, startDate, endDate, id } = data;

  return (
    <form
      className="experience-form section-form"
      id={id}
      data-array-name="experiences"
      onSubmit={(e) => e.preventDefault()}
    >
      <InputGroup
        id="company-name"
        placeholder="Enter Company Name"
        labelText="Company Name"
        value={companyName}
        onChange={onChange}
        data-key="companyName"
      /> 
      <InputGroup
        id="position-title"
        placeholder="Enter Position Title"
        labelText="Position Title"
        value={positionTitle}
        onChange={onChange}
        data-key="positionTitle"
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
      <InputGroup
        id="description"
        placeholder="Enter Description"
        labelText="Description"
        value={description}
        onChange={onChange}
        data-key="description"
      /> 

      <Buttons save={save} remove={remove}/>
    </form>
  );
}

export default ExperienceForm;
