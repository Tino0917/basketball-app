import { useState } from 'react'; 

export default function MVPVote() {
  //Keeping track of votes for each player
  const [votes, setVotes] = useState({ Kevin: 0, Ja: 0 });
  
  // State to store the current MVP winner
  const [winner, setWinner] = useState('');

  // Function to handle voting for a player
  function vote(player) {
    // Create a new vote count based on the previous state
    const newVotes = { ...votes, [player]: votes[player] + 1 };
    
    // Update the votes from the user inputs
    setVotes(newVotes);
    
    // Determine the current winner based on the updated vote counts
    if (newVotes.Kevin > newVotes.Ja) {
      setWinner('Kevin Durant'); // Kevin is the winner
    } else if (newVotes.Ja > newVotes.Kevin) {
      setWinner('Ja Morant'); // Ja is the winner
    } else {
      setWinner(''); // No winner if the votes are tied 
    }
  }

  return (
    <div>
      <h1>Vote for the MVP</h1>
      
      {/* The buttons to pick a  player */}
      <button onClick={() => vote('Kevin')}>Vote Kevin Durant</button>
      <button onClick={() => vote('Ja')}>Vote Ja Morant</button>
      
      {/* Show the currents votes of the two players */}
      <h2>Votes: Kevin ({votes.Kevin}) | Ja ({votes.Ja})</h2>
      
      {/* Show the MVP winner if there is one */}
      {winner && <h3>MVP So Far: {winner}</h3>}
    </div>
  );
}
