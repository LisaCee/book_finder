import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
  }
  handleInput = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };
  onSearch = () => {
    const queryString = this.state.query;
  };
  render() {
    return (
      <div>
        <input
          type="text"
          name="query"
          value={this.state.query}
          onChange={this.handleInput}
          placeholder="Author, Title, or Keyword"
        />
        <button type="submit" onClick={this.onSearch}>
          Go
        </button>
      </div>
    );
  }
}

export default Search;
