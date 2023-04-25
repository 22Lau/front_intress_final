import React, { useState } from 'react';
import { utils, writeFile } from 'xlsx';
import '../downloads.css'; 
const ExcelSignin = () => {
  const [data, setData] = useState([]);

  const handleDownload = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/apisignin/list');
      const jsonData = await response.json();
      setData(jsonData);

      const wb = utils.book_new();
      const ws = utils.json_to_sheet(jsonData);
      utils.book_append_sheet(wb, ws, 'Sheet1');
      writeFile(wb, 'data.xlsx');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button className='btn' onClick={handleDownload}>Sign-in Excel</button>
  );
};

export default ExcelSignin;