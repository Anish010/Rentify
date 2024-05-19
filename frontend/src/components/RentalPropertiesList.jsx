import React from 'react';
import PropertyCard from './PropertyCard';

const RentalPropertyList = ({ filters, onSelect }) => {
  // Fetch rental properties based on filters
  const rentalProperties = []; // Fetch properties based on filters

  return (
    <div>
      {rentalProperties.map((property) => (
        <PropertyCard
          key={property.id}
          property={property}
          onInterest={() => onSelect(property)}
        />
      ))}
    </div>
  );
};

export default RentalPropertyList;
