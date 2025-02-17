import { useState } from 'react';

// Using the JerseySelector function for this page
// Below, the user can pick their favorite jersey
// A dropdown box will appear for selecting a jersey
export default function JerseySelector() {
  // State to store the selected jersey
  const [jersey, setJersey] = useState('');

  return (
    <div>
      {/* Title for the page */}
      <h1>Pick Your Favourite Jersey</h1>
      
      {/* Dropdown menu for selecting a jersey */}
      <select onChange={(e) => setJersey(e.target.value)}>
        {/* Default option prompting user to select a jersey */}
        <option value="">Select a jersey</option>
        
        {/* Options for selecting different jerseys */}
        <option value="Lakers - Purple">Lakers (Purple)</option>
        <option value="Warriors - Blue">Warriors (Blue)</option>
        <option value="Bulls - Red">Bulls (Red)</option>
        <option value="Raptors - White">Raptors (White)</option>
      </select>
      
      {/* Display the selected jersey if one is chosen */}
      {jersey && <h2>You picked: {jersey}</h2>}
    </div>
  );
}

