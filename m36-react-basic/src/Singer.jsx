import "./App.css";

export default function Singer({singer}){
  return (
    <div className="singer">
      <h3>{singer.name}</h3>
      <p>Genre: {singer.genre}</p>
    </div>
  );
}