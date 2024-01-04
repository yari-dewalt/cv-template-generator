import CollapsedForm from "./CollapsedForm.jsx";

function DisplayForms({
  forms,
  FormComponent,
  onChange,
  toggleCollapsed,
  onRemove,
  titleKey,
  arrayName,
}) {
  return (
    <div className="forms-container">
      {forms.map((form) =>
        form.isCollapsed ? (
          <CollapsedForm
            key={form.id}
            onClick={toggleCollapsed}
            title={form[titleKey]}
            arrayName={arrayName}
            id={form.id}
          />
        ) : (
          <FormComponent
            onChange={onChange}
            data={form}
            save={toggleCollapsed}
            remove={onRemove}
            key={form.id}
          />
        )
      )}
    </div>
  );
}

export default DisplayForms;
