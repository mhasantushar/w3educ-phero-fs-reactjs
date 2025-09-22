import "./App.css";
import ToDo from "./ToDo";
import Actor from "./Actor";
import Singer from "./Singer";
import Library from "./Library";

function App() {
  const timeStamp = 180;

  const actors = [
    "Leonardo DiCaprio",
    "Brad Pitt",
    "Tom Cruise",
    "Johnny Depp",
    "Robert Downey Jr.",
  ];

  const singers = [
    { id: 2, name: "Shreya Ghoshal", genre: "Classical" },
    { id: 3, name: "Nusrat Fateh Ali Khan", genre: "Qawwali" },
    { id: 4, name: "Kishore Kumar", genre: "Oldies" },
    { id: 5, name: "Lata Mangeshkar", genre: "Classical" },
  ];

  const books = [
    {id:1, name: "Atomic Habits", price: 300},
    {id:2, name: "Deep Work", price: 400},
    {id:3, name: "The Psychology of Money", price: 500},
    {id:4, name: "Rich Dad Poor Dad", price: 600},
    {id:5, name: "The Intelligent Investor", price: 700},
  ];

  return (
    <>
      <h1>React Core Concepts</h1>
      <Student name="Tushar" dept="CSE"></Student>
      <Person name="Mahamudul Hasan" age="47"></Person>
      <Develoer name="Hasan" tech="JS"></Develoer>
      <Develoer name="Aadee" tech="Python"></Develoer>
      <Cricketer name="Tamim" runs="5000"></Cricketer>
      <Cricketer name="Mushfiqur" runs="5500"></Cricketer>
      <Cricketer name="Tushar"></Cricketer>

      <ToDo task="Learn React" isDone={false} nextEval={timeStamp}/>
      <ToDo task="Revise JS" isDone={true}/>
      <ToDo task="Take a shower" isDone={false} nextEval={timeStamp}/>

      {actors.map((actor) => (
        <Actor actor={actor}></Actor>
      ))}

      {singers.map((singer) => (
        <Singer key={singer.id} singer={singer} />
      ))}

      <Library books={books} />
    </>
  );
}

function Student(props) {
  return (
    <div className="student">
      <p>Name: {props.name}</p>
      <p>Dept: {props.dept}</p>
    </div>
  );
}

function Person(props) {
  // const name = "Mahamudul Hasan";
  // const age = 47;
  const styleset = {
    color: "cadetblue",
    fontWeight: "bold",
    fontSize: "20px",
  };
  return (
    <p style={styleset}>
      This is {props.name}, I am {props.age} years old
    </p>
  );
}

function Develoer(props) {
  // console.log(props);
  return (
    <div
      style={{
        color: "coral",
        fontWeight: "bold",
        border: "3px solid cadetblue",
        borderRadius: "20px",
        marginBottom: "10px",
      }}
    >
      <h3>Developer: {props.name}</h3>
      <p>Technology: {props.tech}</p>
    </div>
  );
}

function Cricketer({ name, runs = 0 }) {
  return (
    <div className="student">
      <h3>Cricket Scores</h3>
      <p>Batter: {name}</p>
      <p>Score: {runs}</p>
    </div>
  );
}

export default App;
