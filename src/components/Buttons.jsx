import "../styles/Buttons.css";

function Buttons({ save, remove }) {
  return (
    <div className="buttons">
      <button className="delete" onClick={remove} type="button">
        Delete
      </button>
      <button className="save" onClick={save} type="submit">
        Save
      </button>
    </div>
  );
}

export default Buttons;
