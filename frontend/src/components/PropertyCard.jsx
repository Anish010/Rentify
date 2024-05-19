import React from 'react';

const PropertyCard = ({ property, onInterest }) => {
  return (
    <div>
      <h3>{property.title}</h3>
      <p>Location: {property.location}</p>
      <p>Price: {property.price}</p>
      <button onClick={onInterest}>I'm Interested</button>
    </div>
  );
};

export default PropertyCard;
