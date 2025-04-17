import { useState, useEffect } from "react";
import SupplierCard from './SupplierCard';

export default function Sidebar({ suppliers, onSelect, selectedId }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSuppliers = suppliers.filter((supplier) =>
    supplier.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Group filtered suppliers by the first letter of their name
  const groupedSuppliers = filteredSuppliers.reduce((acc, supplier) => {
    const firstLetter = supplier.name.charAt(0).toUpperCase();
    if (!acc[firstLetter]) acc[firstLetter] = [];
    acc[firstLetter].push(supplier);
    return acc;
  }, {});

  const sortedSections = Object.keys(groupedSuppliers).sort();

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
    <div className="space-y-4">
        {sortedSections.map((letter) => (
          <div key={letter}>
            <h3 className="text-xs font-semibold text-gray-500 px-1 mb-2">{letter}</h3>
            <div className="space-y-2">
              {groupedSuppliers[letter].map((supplier) => (
                <SupplierCard
                  key={supplier.id}
                  supplier={supplier}
                  selected={supplier.id === selectedId}
                  onClick={() => onSelect(supplier)}
                />
              ))}
            </div>
          </div>
        ))}
    </div>
  </div>
  );
}