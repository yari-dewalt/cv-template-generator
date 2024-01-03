import "../styles/ExpandSection.css";

function ExpandSection({ isOpen, setOpen, sectionName, iconSource }) {
  return (
    <>
      <button className="expand-section" onClick={() => setOpen(isOpen ? "" : sectionName)}>
        <img id="education-icon" src={iconSource}></img>
        <h2>{sectionName}</h2>
        <img className={`expand-icon ${isOpen ? "open" : ""}`} src="../../public/expand.svg"></img>
      </button>
    </>
  )
};

export default ExpandSection;
