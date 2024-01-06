import DisplayForms from "./DisplayForms.jsx";
import ExpandSection from "./ExpandSection.jsx";
import CreateForm from "./CreateForm.jsx";
import ExperienceForm from "./ExperienceForm.jsx";
import "../styles/Section.css";

function EditExperienceSection({
  experiences,
  isOpen,
  setOpen,
  onChange,
  createForm,
  toggleCollapsed,
  onRemove
}) {
  return (
    <div className="edit-experience-section section">
      <ExpandSection
        isOpen={isOpen}
        setOpen={setOpen}
        sectionName="Experience"
        iconSource="education.svg"
       />

      <div className={`section-content ${isOpen ? "open" : ""}`}>
        <DisplayForms
          forms={experiences}
          FormComponent={ExperienceForm}
          onChange={onChange}
          onRemove={onRemove}
          toggleCollapsed={toggleCollapsed}
          titleKey="companyName"
          arrayName="experiences"
        />

        {experiences.every(experience => experience.isCollapsed) && <CreateForm onClick={createForm} buttonText="+ Experience"/>}
      </div>
    </div>
  );
}

export default EditExperienceSection;
