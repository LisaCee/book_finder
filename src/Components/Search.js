import React, { Component } from "react";
// import axios from "axios";
// import cors from "cors";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: [],
      key: "AIzaSyCkhDGUis0KKHWcYXA4QC6aOUn6fWLIsAw"
    };
  }
  componentDidMount() {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=candy`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ response: data.items });
        console.log(this.state.response);
      })
      .catch(error => {
        console.log("Error", error);
      });
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.response.map((book, id) => {
            return (
              <div key={id}>
                {book.volumeInfo.title} <br />
                {book.volumeInfo.authors}
                <br />
                {book.volumeInfo.categories}
                <hr />
                {/* <img
                  src={book.volumeInfo.imageLinks.smallThumbnail}
                  alt="candy"
                /> */}
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Search;
//this.state.response.items.volumeInfo.title
//{book.volumeInfo.imageLinks.smallThumbnail}
