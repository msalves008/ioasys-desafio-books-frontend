import React from "react";
import {CardBook} from "../CardBook";

import { Container } from "./styles";

const BooksList: React.FC = () => {
  return (
    <Container>
      <div className="cards">
        <CardBook
          title="Crossing the Chasm"
          author={["Geoffrey A. Moore"]}
          pageCount="150"
          publisher="Editora Loyola"
          publishedDate="2020"
          bookImage="https://d2drtqy2ezsot0.cloudfront.net/Book-10.jpg"
        />
      </div>
    </Container>
  );
};

export default BooksList;
