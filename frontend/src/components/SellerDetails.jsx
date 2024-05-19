import React from 'react';

const SellerDetails = ({ seller, onClose }) => {
  return (
    <div>
      <h2>Seller Details</h2>
      <p>Name: {seller.name}</p>
      <p>Email: {seller.email}</p>
      <p>Phone: {seller.phone}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default SellerDetails;
