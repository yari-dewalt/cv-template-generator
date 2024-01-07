import "../styles/CollapsedForm.css";

function CollapsedForm({ onClick, title, arrayName, id }) {
  return (
    <button
      className="collapsed-form section-form"
      onClick={onClick}
      id={id}
      data-array-name={arrayName}
    >
      <p>{title}</p>
      <img src="edit.svg"></img>
    </button>
  );
}

export default CollapsedForm;
