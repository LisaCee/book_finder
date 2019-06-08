import React, { Component } from "react";
import BookCard from "./BookCard";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      items: [],
      title: ""
    };
  }
  handleInput = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };
  onSearch = () => {
    let searchTerm = this.state.searchTerm;
    let baseURL = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`;
    fetch(baseURL)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ items: data.items });
        this.setState({ searchTerm: "" });
      })
      .catch(error => {
        console.log("Error", error);
      });
  };
  onEnterButton = e => {
    if (e.key === "Enter") {
      this.onSearch();
    }
  };
  render() {
    return (
      <div className="searchScreen">
        <div className="searchBox">
          <h1>Blind Date with a Book</h1>
          <h5>Who said you can't judge a book by it's cover?  Enter a search term and judge away.</h5>
          <input
            type="text"
            name="searchTerm"
            value={this.state.searchTerm}
            onChange={this.handleInput}
            placeholder="Author, Title, or Keyword"
            onKeyPress={this.onEnterButton}
            required
          />
          <button type="submit" onClick={this.onSearch}>
            Go
        </button>
        </div>
        <div>
          <BookCard book={this.state.items} />
        </div>
      </div>
    );
  }
}

export default Search;
