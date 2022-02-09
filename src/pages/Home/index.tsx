import React from "react";
import Header from "../../components/Header";
import { useGetAllBooks } from "../../hooks/useGetAllBooks";
import { Container } from "./styles";
import { CardBook } from "../../components/CardBook";

interface ListBooksProps {
  data: Array<BookProps>;
  page: number;
  totalItems: number;
  totalPages: number;
}
interface BookProps {
  authors: Array<string>;
  title: string;
  description: string;
  pageCount: number;
  category: string;
  imageUrl: string;
  language: string;
  isbn10: number;
  isbn13: string;
  publisher: string;
  published: number;
  id: string;
}

export function Home() {
  const { data } = useGetAllBooks<ListBooksProps>("/books?page=1&amount=12");
  if (!data) return <div>Carregando Dados.....</div>;
  console.log(data);
  return (
    <Container>
      <Header />
      <div className="cards">
        {data.data.map((b) => {
          console.log(b);
          return (
            <CardBook
              id={b.id}
              title={b.title}
              author={b.authors}
              pageCount={b.pageCount}
              publisher={b.publisher}
              publishedDate={b.published}
              bookImage={b.imageUrl}
            />
          );
        })}
      </div>
    </Container>
  );
}
