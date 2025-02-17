import { useState } from 'react';

export default function ScoreCounter() {
  // State to keep track of the home team score
  const [homeScore, setHomeScore] = useState(0);
  
  // State to keep track of the away team score
  const [awayScore, setAwayScore] = useState(0);

  return (
    <div>
      <h1>Basketball Score Counter</h1>
      
      {/* Display the current score for both teams */}
      <h2>Home Team: {homeScore} - Away Team: {awayScore}</h2>
      
      {/* Button to increase the home team score by 1 */}
      <button onClick={() => setHomeScore(homeScore + 1)}>Home +1</button>
      
      {/* Button to increase the away team score by 1 */}
      <button onClick={() => setAwayScore(awayScore + 1)}>Away +1</button>
      
      {/* Button to reset the scores to 0 */}
      <button onClick={() => { setHomeScore(0); setAwayScore(0); }}>Reset</button>
    </div>
  );
}
