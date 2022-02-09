import Modal from "react-modal";
import {BookDetailsContext} from '../../contexts/BookDetailsContext';
import closeIcon from "../../assets/close.svg";
import quotes from "../../assets/Quotes.svg";
import { useContext } from "react";
import unknownBook from "../../assets/unknown-book.png";
import { Container } from "./styles";

interface BookDetailsModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function BookDetailsModal({
  isOpen,
  onRequestClose,
}: BookDetailsModalProps) {
  const { book } = useContext(BookDetailsContext);
  console.log(book.imageUrl);
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeIcon} alt="Fechar Modal" />
      </button>
      <Container>
        {book.imageUrl === null ? 
          <img className="card-image" src={unknownBook} alt={book.title} />
          : 
          <img className="card-image" src={book.imageUrl} alt={book.title} />
        }
        <div className="wrapper-book-details">
          <h1 className="book-title">
            {book.title}
          </h1>
          <p className="book-author">
            {book.authors.map((author) => author).join(", ")}
          </p>
          <div className="wrapper-book-information">
            <strong>INFORMAÇÕES</strong>
            <div className="book-information-row">
              <p>Páginas</p>
              <span>{book.pageCount}</span>
            </div>
            <div className="book-information-row">
              <p>Editora</p>
              <span>{book.publisher}</span>
            </div>
            <div className="book-information-row">
              <p>Publicação</p>
              <span>{book.published}</span>
            </div>
            <div className="book-information-row">
              <p>Idioma</p>
              <span>{book.language}</span>
            </div>
            <div className="book-information-row">
              <p>Título Original</p>
              <span>{book.title}</span>
            </div>
            <div className="book-information-row">
              <p>ISBN-10</p>
              <span>{book.isbn10}</span>
            </div>
            <div className="book-information-row">
              <p>ISBN-13</p>
              <span>{book.isbn13}</span>
            </div>
            <div className="wrapper-book-review">
              <strong>Resenha da Editora</strong>
              <span>
                <img src={quotes} alt="" /> {book.description}
              </span>
            </div>
          </div>
        </div>
      </Container>
    </Modal>
  );
}
