import { useState, useEffect } from "react";
import SupplierCard from './SupplierCard';

export default function Sidebar({ suppliers, onSelect, selectedId }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSuppliers = suppliers.filter((supplier) =>
    supplier.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

   // Automatically select the first match when searching
   useEffect(() => {
    if (searchTerm.trim() !== "") {
      if (filteredSuppliers.length > 0) {
        onSelect(filteredSuppliers[0]);
      } else {
        onSelect(null);
      }
    }
  }, [searchTerm, filteredSuppliers]);

  return (
    <div className="w-1/3 bg-white border-r border-gray-200 p-4 overflow-y-auto">
    <input
      type="text"
      placeholder="Search suppliers..."
      className="w-full px-3 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    <div className="space-y-3">
      {filteredSuppliers.map((supplier) => (
        <SupplierCard
          key={supplier.id}
          supplier={supplier}
          selected={supplier.id === selectedId}
          onClick={() => onSelect(supplier)}
        />
      ))}
    </div>
  </div>
  );
}