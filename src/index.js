import React from "react";
import ReactDOM from "react-dom";
import Books from "./Components/Books";
import Search from "./Components/Search";
import Book from "./Components/Book";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css"

function App() {
  return (
    <div className="App">
      <h1>Don't judge a book by its cover</h1>
      {/* <Book /> */}
      <Search />
      <Books />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
