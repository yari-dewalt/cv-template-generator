import DisplayForms from "./DisplayForms.jsx";
import ExpandSection from "./ExpandSection.jsx";
import CreateForm from "./CreateForm.jsx";
import EducationForm from "./EducationForm.jsx";
import "../styles/Section.css";

function EditEducationSection({
  educations,
  isOpen,
  setOpen,
  onChange,
  createForm,
  toggleCollapsed,
  onRemove
}) {
  return (
    <div className="edit-education-section section">
      <ExpandSection
        isOpen={isOpen}
        setOpen={setOpen}
        sectionName="Education"
        iconSource="../../public/education.svg"
       />

      <div className={`section-content ${isOpen ? "open" : ""}`}>
        <DisplayForms
          forms={educations}
          FormComponent={EducationForm}
          onChange={onChange}
          onRemove={onRemove}
          toggleCollapsed={toggleCollapsed}
          titleKey="schoolName"
          arrayName="educations"
        />

        {educations.every(education => education.isCollapsed) && <CreateForm onClick={createForm} buttonText="+ Education"/>}
      </div>
    </div>
  );
}

export default EditEducationSection;
