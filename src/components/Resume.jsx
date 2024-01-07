import "../styles/Resume.css";
import PersonalInfoSection from "./PersonalInfoSection.jsx";
import InfoSection from "./InfoSection.jsx";
import EducationInfo from "./EducationInfo.jsx";
import ExperienceInfo from "./ExperienceInfo.jsx";

function Resume({ personalInfo, sections })
{
  return (
    <div className="resume">
      <PersonalInfoSection fullName={personalInfo.fullName} email={personalInfo.email} phoneNumber={personalInfo.phoneNumber} location={personalInfo.location}/>
      <InfoSection array={sections.educations} InfoComponent={EducationInfo} title="Education"/>
      <InfoSection array={sections.experiences} InfoComponent={ExperienceInfo} title="Experience"/>
    </div>
  )
}

export default Resume;
