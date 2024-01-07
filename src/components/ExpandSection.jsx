import "../styles/ExpandSection.css";

function ExpandSection({ isOpen, setOpen, sectionName, iconSource }) {
  return (
    <>
      <button className="expand-section" onClick={() => setOpen(isOpen ? "" : sectionName)}>
        <div className="expand-section-header">
          <img className="section-icon" src={iconSource}></img>
          <h2>{sectionName}</h2>
        </div>
        <img className={`expand-icon ${isOpen ? "open" : ""}`} src="expand.svg"></img>
      </button>
    </>
  )
};

export default ExpandSection;
