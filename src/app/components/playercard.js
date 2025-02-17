export default function PlayerCard({ name, team, points }) {
    return (
      <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
        <h3>{name}</h3>
        <p>Nba Team: {team}</p>
        <p>Points: {points}</p>
      </div>
    );
  }
  