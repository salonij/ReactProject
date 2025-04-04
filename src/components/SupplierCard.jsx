export default function SupplierCard({ supplier, onClick, selected }) {
    return (
      <div
        onClick={onClick}
        className={`flex items-center gap-3 p-4 rounded-lg shadow cursor-pointer transition ${
          selected ? 'bg-blue-100 border-blue-400 border' : 'bg-gray-50 hover:bg-gray-100'
        }`}
      >
        <img src={supplier.avatar} alt={supplier.name} className="w-10 h-10 rounded-full" />
        <div>
          <p className="font-semibold text-black">{supplier.name}</p>
          <p className="text-sm text-gray-500">{supplier.email}</p>
        </div>
      </div>
    );
  }