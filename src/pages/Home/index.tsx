import { useState, useContext, useEffect } from "react";
import { Header } from "../../components/Header";
import { useGetAllBooks } from "../../hooks/useGetAllBooks";
import { CardBook } from "../../components/CardBook";
import { BookDetailsContext } from "../../contexts/BookDetailsContext";
import { Container, Footer } from "./styles";
import backIcon from "../../assets/backIcon.svg";
import nextIcon from "../../assets/nextIcon.svg";
import { useNavigate } from "react-router-dom";
import {parseCookies} from 'nookies'

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
interface HomeProps {
  onOpenNewTransactionModal: () => void;
}

export function Home({ onOpenNewTransactionModal }: HomeProps) {

  const BookContext = useContext(BookDetailsContext);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    let cookies = parseCookies(undefined);
    console.log(cookies["ioasys.token"]);
    if (!cookies["ioasys.token"]) {
      navigate("/login");
    }
  }, []);

  function handleBookDetails(book: BookProps) {
    onOpenNewTransactionModal();
    BookContext.setBook(book);
  }

  function handlePreviewPage() {
    if (currentPage > 1) {
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
      <Header/>
      <div className="cards">
        {data.data.map((b) => {
          return (
            <CardBook
              id={b.id}
              title={b.title}
              author={b.authors}
              pageCount={b.pageCount}
              publisher={b.publisher}
              publishedDate={b.published}
              bookImage={b.imageUrl}
              onclick={() => handleBookDetails(b)}
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
