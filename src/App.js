import { useEffect, useState } from "react";
import "./styles.css";
import Navbar from "./Components/Navbar";
import Profile from "./Components/Profile";

export default function App() {
  const [data, setData] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [username, setUsername] = useState("sumitwalke");

  // Another way of doing the same without using async function
  // fetch("https://api.github.com/users/sumitwalke")
  //   .then((response) => response.json())
  //   .then((apiData) => setData(apiData));
  // console.log(data);

  function handleInput(username) {
    if (username.trim() === "") {
      return;
    } else {
      setUsername(username);
    }
  }

  useEffect(() => {
    async function fetchData(username) {
      const URL = `https://api.github.com/users/${username}`;
      try {
        const res = await fetch(URL);
        const apiData = await res.json();
        setData(apiData);
      } catch (error) {
        console.log("Error fetching Data");
      }
    }
    fetchData(username);
  }, [username]);

  return (
    <div className="App">
      <Navbar
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleInput={handleInput}
      />
      {data ? (
        <Profile username={username} data={data} />
      ) : (
        <h2>Search For a username</h2>
      )}
    </div>
  );
}
