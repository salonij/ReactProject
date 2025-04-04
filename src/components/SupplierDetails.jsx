export default function SupplierDetails({ supplier }) {
    if (!supplier) {
      return (
        <div className="text-gray-600 text-lg">
          Select a supplier from the left to view details.
        </div>
      );
    }

    return (
      <div className="bg-white rounded-xl shadow p-6 space-y-4">
        <div className="flex items-center gap-6">
          <img src={supplier.avatar} className="w-16 h-16 rounded-full" alt={supplier.name} />
          <div>
            <h2 className="text-2xl font-bold">{supplier.name}</h2>
            <p className="text-sm text-gray-500">{supplier.email}</p>
            <p className="text-sm text-gray-500">{supplier.phone}</p>
          </div>
        </div>
      </div>
    );
  }