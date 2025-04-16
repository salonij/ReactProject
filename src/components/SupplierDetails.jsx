import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFileAlt,
  faBook,
  faMapMarkerAlt,
  faUsers
} from '@fortawesome/free-solid-svg-icons';
import OverviewTab from './tabs/OverviewTab';

export default function SupplierDetails({ supplier }) {
    const [activeTab, setActiveTab] = useState('Overview');

    if (!supplier) {
      return (
        <div className="text-gray-600 text-lg">
          Select a supplier from the left to view details.
        </div>
      );
    }

    const tabs = [
      { label: 'Overview', icon: faFileAlt },
      { label: 'Book of Business', icon: faBook },
      { label: 'Locations', icon: faMapMarkerAlt },
      { label: 'Contacts', icon: faUsers }
    ];

    return (
      <div className="bg-white rounded-xl shadow p-6">
        <div className="flex items-center gap-4 mb-6">
          <img src={supplier.avatar} className="w-16 h-16 rounded-full" alt={supplier.name} />
          <div>
            <h2 className="text-2xl font-bold">{supplier.name}</h2>
            <p className="text-sm text-gray-500">{supplier.email}</p>
            <p className="text-sm text-gray-500">{supplier.phone}</p>
          </div>
        </div>

        <div className="flex space-x-6 border-b border-gray-200 mb-4">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(tab.label)}
              className={`relative py-2 text-sm flex items-center gap-2 transition-colors duration-200 ${
              activeTab === tab.label ? 'text-black font-medium' : 'text-gray-500 hover:text-black'
            }`} 
            >
              <FontAwesomeIcon icon={tab.icon} className="text-base" />
              <span>{tab.label}</span>

              {activeTab === tab.label && (
                <div className="absolute left-0 right-0 -bottom-0.5 h-[2px] bg-blue-600 rounded-full" />
              )}
            </button>
          ))}
        </div>

        <div className="text-gray-700 text-sm min-h-[150px] transition-all duration-200">
          {activeTab === 'Overview' && <OverviewTab supplier={supplier} />}

          {activeTab === 'Book of Business' && (
            <div className="space-y-3 text-sm leading-6 text-gray-800">
              <p><strong>Total Spend:</strong> {supplier.business.totalSpend}</p>
              <p><strong>Categories:</strong> {supplier.business.categories.join(', ')}</p>
            </div>
          )}

          {activeTab === 'Locations' && (
            <ul className="list-disc pl-5 space-y-1">
              {supplier.locations.map((loc, i) => (
                <li key={i}>
                  <strong>{loc.name}</strong>: {loc.address}
                </li>
              ))}
            </ul>
          )}

          {activeTab === 'Contacts' && (
            <ul className="space-y-2">
              {supplier.contacts.map((contact, i) => (
                <li key={i}>
                  <p><strong>{contact.name}</strong> – {contact.role}</p>
                  <p className="text-sm text-gray-500">{contact.email}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }