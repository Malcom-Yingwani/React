import "./editModal.scss";
import { useState } from "react";

const EditModal = ({ fields, data, onSave, onClose }) => {
  const [formData, setFormData] = useState(data);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div className="modalOverlay">
      <div className="modalContainer">
        <h2>Edit Details</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSave(formData);
          }}
        >
          {fields.map((field) => (
            <div className="modalFormInput" key={field.id}>
              <label>{field.label}</label>
              <input
                id={field.id}
                type={field.type}
                value={formData[field.id] || ""}
                onChange={handleChange}
                placeholder={field.placeholder}
              />
            </div>
          ))}
          <div className="modalButtons">
            <button type="button" className="cancelButton" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="saveButton">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
