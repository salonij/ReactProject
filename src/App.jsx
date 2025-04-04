import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar';
import SupplierDetails from './components/SupplierDetails';
import suppliers from './data/suppliers';

function App() {
  const [selectedSupplier, setSelectedSupplier] = useState(suppliers[0]);

  return (
    <div className="flex h-screen w-screen bg-gray-100">
      <Sidebar
        suppliers={suppliers}
        onSelect={setSelectedSupplier}
        selectedId={selectedSupplier?.id}
      />
      <div className="flex-1 p-6 overflow-y-auto">
        <SupplierDetails supplier={selectedSupplier} />
      </div>
    </div>
  );
}

export default App
