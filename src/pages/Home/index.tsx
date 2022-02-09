import { useState } from "react";
import Header from "../../components/Header";
import { useGetAllBooks } from "../../hooks/useGetAllBooks";
import { Container, Footer } from "./styles";
import { CardBook } from "../../components/CardBook";
import backIcon from "../../assets/backIcon.svg";
import nextIcon from "../../assets/nextIcon.svg";

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
  const [currentPage, setCurrentPage] = useState(1);

  function handlePreviewPage(){
    if(currentPage > 1){
      setCurrentPage(currentPage - 1);
    }
  }
  function handleNextPage() {
    if (currentPage < data.totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  const { data } = useGetAllBooks<ListBooksProps>(
    `/books?page=${currentPage}&amount=12`
  );
  if (!data) return <div>Carregando Dados.....</div>;
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
      <Footer>
        <div className="pagination">
          <span>
            Página {currentPage} de {Math.round(data.totalPages)}
          </span>
          <button onClick={handlePreviewPage}>
            <img src={backIcon} alt="Página anterior" />
          </button>
          <button onClick={handleNextPage}>
          <img src={nextIcon} alt="Proxima página" />
          </button>
        </div>
      </Footer>
    </Container>
  );
}
