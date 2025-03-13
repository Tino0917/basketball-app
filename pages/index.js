import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Title of the app and my name*/}
      <h1>Welcome to the Basketball App!</h1>
      <h2>Laurentino Martinez III</h2>
      <h3>The best app in the world for Basketball</h3>
      

      {/* Navigation links to different pages of the app */}
      <nav>
        {/* Link to the Player Stats page */}
        <Link href="/stats">Player Stats</Link> | 
        {/* Link to the Score Counter page */}
        <Link href="/score">Score Counter</Link> | 
        {/* Link to the MVP Voting page */}
        <Link href="/mvp">MVP Voting</Link> | 
        {/* Link to the Pick a Jersey page */}
        <Link href="/jersey">Pick a Jersey</Link>
      </nav>
    </div>
  );
}
