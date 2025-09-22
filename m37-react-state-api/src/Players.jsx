import { useEffect, useState } from "react";

export default function Players() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((data) => setPlayers(data));
  }, []);

  return (
    <div className="box">
      <h3>Player Count: {players.length}</h3>
      <ol>
        {players.map((player) => (
          <li>
            {player.name}
          </li>
        ))}
      </ol>
    </div>
  );
}
