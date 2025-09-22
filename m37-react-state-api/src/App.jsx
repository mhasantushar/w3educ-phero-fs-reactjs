import "./App.css";
import Counter from "./Counter";
import Batsman from "./Batsman";
import Users from "./Users";
import Friends from "./Friends";
import Posts from "./Posts";
import Players from "./Players";
import { Suspense } from "react";

const userApi = "https://jsonplaceholder.typicode.com/users";
const postApi = "https://jsonplaceholder.typicode.com/posts"

const fetchUsers = fetch(userApi).then((resp) => resp.json());

const fetchFriends = async () => {
  const resp = await fetch(userApi);
  return resp.json();
};

const fetchPosts = async () => {
  const resp = await fetch(postApi);
  return resp.json();
}

function App() {
  function handleClick() {
    alert("I am clicked, userd normal function");
  }

  const handleClickArrow = () => {
    alert("I am clicked, used arrow function");
  };

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(`New number is ${newNum} (example of argument passing)`);
  };

  const friendsPromise = fetchFriends();
  const postPromise = fetchPosts();

  return (
    <>
      <h1>Vite + React</h1>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClickArrow}>Click Me Arrow</button>
      <button onClick={() => alert("I am clicked, used inline arrow")}>
        Click Me Arrow-iline
      </button>
      <button onClick={() => handleAdd5(13)}>Click to Add 5</button>

      <Counter />
      <Batsman />

      <Suspense fallback={<h3>Loading users...</h3>}>
        <Users fetchUsers={fetchUsers} />
      </Suspense>

      <Suspense fallback={<h3>Loading friends...</h3>}>
        <Friends friendsPromise={friendsPromise} />
      </Suspense>

      <Suspense fallback={<h3>Loading posts...</h3>}>
        <Posts postPromise={postPromise} />
      </Suspense> 

      <Players />
    </>
  );
}

export default App;
