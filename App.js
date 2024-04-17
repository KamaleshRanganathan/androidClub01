import React, { useState } from 'react';
import './App.css'; // Importing CSS file for styling

function App() {
  const [color, setColor] = useState('black');
  const handleClick = () => {
    // Generate a random color
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    setColor(randomColor);
  };

  return (
    <div className="app" style={{ backgroundColor: color }} onClick={handleClick}>
      <h1>Hello, I'm Kamalesh! -&gt; 22MIA1164</h1>
      <p>Click anywhere to change the color</p>
    </div>
  );
}

export default App;