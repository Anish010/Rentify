import React, { useState } from 'react';
import PropertyForm from '../../components/PropertyForm';
import PropertiesList from '../../components/PropertiesList';
import "./Seller.css";

const SellerDashboard = () => {
  const [properties, setProperties] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const addProperty = (property) => {
    setProperties([...properties, property]);
  };

  const updateProperty = (updatedProperty) => {
    const updatedProperties = properties.map((property, index) =>
      index === editingIndex ? updatedProperty : property
    );
    setProperties(updatedProperties);
    setEditingIndex(null);
  };

  const deleteProperty = (index) => {
    const updatedProperties = properties.filter((_, i) => i !== index);
    setProperties(updatedProperties);
  };

  const editProperty = (index) => {
    setEditingIndex(index);
  };

  return (
    <div className="seller-dashboard">
      <div className="overlay">
        <div>
          <PropertyForm
            onSubmit={editingIndex === null ? addProperty : updateProperty}
            initialData={editingIndex !== null ? properties[editingIndex] : null}
          />
          <PropertiesList
            properties={properties}
            onEdit={editProperty}
            onDelete={deleteProperty}
          />
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;
