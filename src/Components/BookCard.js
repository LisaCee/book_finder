import React from "react";
import { Container, Col, Row, Card, Button } from "react-bootstrap";
import { get } from "partial.lenses";
import "../styles/bookCard.css";

const BookCard = props => {
  console.log('PROPS', props)
  const shorten = str => {
    if (str.includes(":")) {
      let array = str.split(":");
      return array[0];
    } else if (str.includes(".")) {
      let array = str.split(".");
      return array[0];
    }else if (str.length > 30) {
      return str.slice(0, 25) + "..."
    }
  }
  return (
    <Container>
      <Row>
        {props.book.map((book, id) => {
          return (
            <Col sm={6} lg={4} key={id}>
              <div className="flip-container">
              <Card key={id}>
                <div className="front"> <Card.Body>
                  <Card.Title>{book.volumeInfo.title}</Card.Title>
                  <Card.Img
                    src={
                      get(
                        ["volumeInfo", "imageLinks", "smallThumbnail"],
                        book
                      ) ||
                      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEX///9VVVXt7e0wMDCxsbGnp6cAAABqamrh4eGbm5u+vr6Li4v8/Pw1NTWTk5N8fHyFhYWhoaH09PRaWlrFxcVBQUFlZWU4ODhNTU1HR0fn5+fY2NjR0dGQkJC5ubloaGghISEpKSkSEhLSoxLAAAACBklEQVR4nO3Y63KaQBiAYUDCchQExIiQxN7/RRY0xuUUC9NM/ej7/MCR3Z3hHV1MMAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADBHuMC/vuY5rP1mvnMmqNH3lqwq3L99HT9nWaGi8IlcCu052lXiCh375U/ZTnuTkVc4Y8Fh9YURhc/mPys8vVUP/1gRXagKLz6WDxZILvTq5lCZ/Rllt1ly4a/LMetevO2YR8fXTkgu/Lgc40ofDlRzSI+7+xnJha/tZYeHVBsN4uureU+UXFieK6ssXrTBW6CeKLnQKFWW5drYPVBLFF3Yk8T6u1viigq7gc02vSaup7AfeEtcTeEw8DNxLYXBSOB1L0ovTE8ny5gKvCQKL9ztlToEk4FNor0XXZjEzeWHSZRMzy9EP6eJP8umP8J2ruDC+Ouj+y5R8D6Mte/mN4lyC+PO5ptIDMPwLLUw6d1duolh6r5tE/W62WRS92E/8J5ouXaizOO751du+6+j0CfC9cjvQ52Erh8XWbGrXO0JnNB9GAwHytwx1bYaPHoTWtg/W9V75bnpyPxVFJ6CKMjHZxti96G3/VJ/OJHn1cGErcx7ae5r8rzzdqBdJa5wNgqfib97PGdIUqF7NheIRn9InlRqLSApEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/Lzfd2YfI9EhLQ4AAAAASUVORK5CYII="
                    }
                    alt="book cover"
                  />
                  {book.volumeInfo.authors ? (
                    <h6>{book.volumeInfo.authors[0]}</h6>
                  ) : (null)}
                  <Button href={book.volumeInfo.previewLink} target="_">
                    Learn More</Button>
                </Card.Body></div>
                <div className="back" key={id}>
                  <Card.Img
                    src={
                      get(
                        ["volumeInfo", "imageLinks", "smallThumbnail"],
                        book
                      ) ||
                      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEX///9VVVXt7e0wMDCxsbGnp6cAAABqamrh4eGbm5u+vr6Li4v8/Pw1NTWTk5N8fHyFhYWhoaH09PRaWlrFxcVBQUFlZWU4ODhNTU1HR0fn5+fY2NjR0dGQkJC5ubloaGghISEpKSkSEhLSoxLAAAACBklEQVR4nO3Y63KaQBiAYUDCchQExIiQxN7/RRY0xuUUC9NM/ej7/MCR3Z3hHV1MMAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADBHuMC/vuY5rP1mvnMmqNH3lqwq3L99HT9nWaGi8IlcCu052lXiCh375U/ZTnuTkVc4Y8Fh9YURhc/mPys8vVUP/1gRXagKLz6WDxZILvTq5lCZ/Rllt1ly4a/LMetevO2YR8fXTkgu/Lgc40ofDlRzSI+7+xnJha/tZYeHVBsN4uureU+UXFieK6ssXrTBW6CeKLnQKFWW5drYPVBLFF3Yk8T6u1viigq7gc02vSaup7AfeEtcTeEw8DNxLYXBSOB1L0ovTE8ny5gKvCQKL9ztlToEk4FNor0XXZjEzeWHSZRMzy9EP6eJP8umP8J2ruDC+Ouj+y5R8D6Mte/mN4lyC+PO5ptIDMPwLLUw6d1duolh6r5tE/W62WRS92E/8J5ouXaizOO751du+6+j0CfC9cjvQ52Erh8XWbGrXO0JnNB9GAwHytwx1bYaPHoTWtg/W9V75bnpyPxVFJ6CKMjHZxti96G3/VJ/OJHn1cGErcx7ae5r8rzzdqBdJa5wNgqfib97PGdIUqF7NheIRn9InlRqLSApEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/Lzfd2YfI9EhLQ4AAAAASUVORK5CYII="
                    }
                    alt="book cover"
                  />
                </div>

              </Card>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default BookCard;

