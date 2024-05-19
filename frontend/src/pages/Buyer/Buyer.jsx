import React, { useState } from 'react';
import RentalPropertyList from '../../components/RentalPropertiesList';
import SellerDetails from '../../components/SellerDetails';
import FilterForm from '../../components/FilterForm';

const Buyer = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [filters, setFilters] = useState({
    // Initialize filters here if needed
  });

  const handlePropertySelect = (property) => {
    setSelectedProperty(property);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div>
      <h1>Rental Properties</h1>
      <FilterForm onFilterChange={handleFilterChange} />
      <RentalPropertyList filters={filters} onSelect={handlePropertySelect} />
      {selectedProperty && (
        <SellerDetails
          seller={selectedProperty.seller}
          onClose={() => setSelectedProperty(null)}
        />
      )}
    </div>
  );
};

export default Buyer;
