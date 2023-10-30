import React from 'react';

const FilePicker = ({ onFileSelected }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    onFileSelected(file);
  };

  return (
    <input
      type="file"
      accept=".csv" // You can specify the accepted file types here
      onChange={handleFileChange}
    />
  );
};

export default FilePicker;