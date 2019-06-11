import React, { Component } from "react";
import BookCard from "./BookCard";
import {Button} from 'react-bootstrap';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      items: []
    };
  }
  handleInput = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };
  onSearch = e => {
    e.preventDefault();
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
  render() {
    return (
      <div className="searchScreen">
        <div className="searchBox">
          <h1>Blind Date with a Book</h1>
          <h5>Who said you can't judge a book by it's cover? <br/> Enter a search term and judge away.</h5>
          <form onSubmit={this.onSearch}>
          <input
            type="text"
            name="searchTerm"
            value={this.state.searchTerm}
            onChange={this.handleInput}
            placeholder="Author, Title, or Keyword"
            required
          />
          <Button type="submit">
            Go
        </Button>
        </form>
        </div>
        <div>
          <BookCard book={this.state.items} />
        </div>
      </div>
    );
  }
}

export default Search;
