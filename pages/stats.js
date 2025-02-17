import PlayerCard from "../src/app/components/playercard";

export default function Stats() {
  return (
    <div>
      {/* Title of the page */}
      <h1>Player Stats</h1>
      
      {/* Subtitle explaining the data shown */}
      <h2>The list below shows NBA stars and their points for the year</h2>
      
      {/* PlayerCard component for each player showing their name, team, and points */}
      <PlayerCard name="Shai Gilgeous-Alexander" team="Thunder" points={33} />
      <PlayerCard name="Jayson Tatum" team="Celtics" points={29} />
      <PlayerCard name="Nikola Jokić" team="Nuggets" points={30} />
      <PlayerCard name="Scottie Barnes" team="Raptors" points={23} />

    </div>
  );
}
