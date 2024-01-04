import "../styles/CreateForm.css";

function CreateForm({ onClick, buttonText }) {
  return (
    <button className="create-form" onClick={onClick}>
      <p>{buttonText}</p>
    </button>
  );
}

export default CreateForm;
