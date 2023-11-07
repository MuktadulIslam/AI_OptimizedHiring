import React, { useState } from 'react';
import './App.css';
import PDFUploader from './components/PDFUploader';

function App() {
  const [text, setText] = useState('');

  const handleTextUpdate = (parsedText) => {
    setText(parsedText);
  };

  return (
    <div className="App">
      <h1>PDF Parser</h1>
      <PDFUploader onTextUpdate={handleTextUpdate} />
      {text && <div className="parsed-text">{text}</div>}
    </div>
  );
}

export default App;
