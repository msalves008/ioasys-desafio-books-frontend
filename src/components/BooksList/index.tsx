import React from "react";

import { Container } from "./styles";

const BooksList: React.FC = () => {
  return (
    <Container>
      <div className="cards">
        <div className="card">
          <img
            className="card-image"
            src="https://d2drtqy2ezsot0.cloudfront.net/Book-10.jpg"
            alt=""
          />
          <div className="card-content">
            <h3 className="card-title">Crossing the Chasm</h3>
            <h3 className="card-author">Geoffrey A. Moore</h3>
            <div className="card-info">
              <p className="card-pageCount">150 páginas</p>
              <p className="card-publisher">Editora Loyola</p>
              <p className="card-published">Publicado em 2020</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BooksList;
