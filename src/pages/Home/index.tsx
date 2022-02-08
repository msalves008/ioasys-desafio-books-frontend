import React from "react";
import BooksList from "../../components/BooksList";
import Header from "../../components/Header";

import { Container } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <BooksList />
    </Container>
  );
};

export default Home;
