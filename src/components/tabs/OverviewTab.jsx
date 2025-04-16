import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faSave } from "@fortawesome/free-solid-svg-icons";

const OverviewTab = ({ supplier }) => {
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({});

  const toggleEdit = () => {
    if (!editMode && supplier && supplier.overview) {
        setFormData({ ...supplier.overview });
    }
    setEditMode(!editMode);
  }

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSave = () => {
    supplier.overview = {...formData};
    setEditMode(false);
  };

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-lg">Company Profile</h2>
        <button
          onClick={editMode ? handleSave : toggleEdit}
          className="flex items-center gap-1 text-blue-600 hover:underline"
        >
          <FontAwesomeIcon icon={editMode ? faSave : faPen} />
          {editMode ? "Save" : "Edit"}
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <strong>Status:</strong>{" "}
          {editMode ? (
            <input
              className="border px-2 py-1 rounded"
              name="status"
              value={formData.status}
              onChange={handleChange}
            />
          ) : (
            supplier.overview.status
          )}
        </div>

        <div>
          <strong>Website:</strong>{" "}
          {editMode ? (
            <input
              className="border px-2 py-1 rounded"
              name="website"
              value={formData.website}
              onChange={handleChange}
            />
          ) : (
            <a href={supplier.website} target="_blank" rel="noreferrer" className="text-blue-600 underline">
              {supplier.overview.website}
            </a>
          )}
        </div>

        <div>
          <strong>Founded:</strong>{" "}
          {editMode ? (
            <input
              className="border px-2 py-1 rounded"
              name="founded"
              value={formData.founded}
              onChange={handleChange}
            />
          ) : (
            supplier.overview.founded
          )}
        </div>

        <div>
          <strong>Industry:</strong>{" "}
          {editMode ? (
            <input
              className="border px-2 py-1 rounded"
              name="industry"
              value={formData.industry}
              onChange={handleChange}
            />
          ) : (
            supplier.overview.industry
          )}
        </div>
      </div>
    </div>
  );
};

export default OverviewTab;
