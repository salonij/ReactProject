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
          className="text-xs text-blue-600 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-md px-3 py-1 font-medium shadow-sm transition flex items-center gap-x-1"
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
      <div className="mt-8">
            <h3 className="text-lg font-semibold mb-3">LightSource Teams</h3>
            {supplier.lightSourceTeams?.length > 0 ? (
            <div className="space-y-2">
            {supplier.lightSourceTeams.map((team) => (
                <div
                key={team.id}
                className="flex items-center justify-between bg-gray-50 p-3 rounded-lg border"
                >
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 text-blue-600 font-semibold rounded-full flex items-center justify-center uppercase">
                    {team.name.slice(0, 2)}
                    </div>
                    <div>
                    <p className="font-medium">{team.name}</p>
                    <p className="text-sm text-gray-500">{team.tag}</p>
                    </div>
                </div>
                </div>
            ))}
            </div>
            ) : (
                <p className="text-gray-500 text-sm">No teams linked to this supplier.</p>
            )}
        </div>
        <div className="mt-8">
            <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">Custom properties</h3>
                <button className="text-xs text-blue-600 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-md px-3 py-1 font-medium shadow-sm transition">
                    Edit properties
                </button>
            </div>
            {supplier.customProperties && Object.keys(supplier.customProperties).length > 0 ? (
                <div className="space-y-2">
                {Object.entries(supplier.customProperties).map(([key, value]) => (
                    <div key={key} className="flex justify-between text-sm">
                    <strong>{key}</strong>
                    <span className="text-gray-800">{value}</span>
                    </div>
                ))}
                </div>
            ) : (
                <div className="text-gray-500 text-sm border border-dashed border-gray-300 p-4 rounded-lg">
                Your team hasn't added any properties for this company.
                </div>
            )}
        </div>
    </div>
  );
};

export default OverviewTab;
