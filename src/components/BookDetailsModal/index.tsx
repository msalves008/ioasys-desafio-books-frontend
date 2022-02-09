import Modal from "react-modal";
import closeIcon from "../../assets/close.svg";
import quotes from "../../assets/Quotes.svg";
import { Container } from "./styles";

interface BookDetailsModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function BookDetailsModal({
  isOpen,
  onRequestClose,
}: BookDetailsModalProps) {
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
        <img src="https://d2drtqy2ezsot0.cloudfront.net/Book-10.jpg" alt="" />
        <div className="wrapper-book-details">
          <h1 className="book-title">
            Change By Design Second line exampl Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Debitis excepturi suscipit ut corporis
            eos possimus aliquid sit, unde, ad reiciendis minus nemo repellat
            dicta, vel rem! Nulla quia similique ipsum.
          </h1>
          <p className="book-author">
            Tim Brown, Julie Zhuo, Fried Maximiilian
          </p>
          <div className="wrapper-book-information">
            <strong>INFORMAÇÕES</strong>
            <div className="book-information-row">
              <p>Páginas</p>
              <span>304 páginas</span>
            </div>
            <div className="book-information-row">
              <p>Editora</p>
              <span>Editora Loyola</span>
            </div>
            <div className="book-information-row">
              <p>Publicação</p>
              <span>2020</span>
            </div>
            <div className="book-information-row">
              <p>Idioma</p>
              <span>Inglês</span>
            </div>
            <div className="book-information-row">
              <p>Título Original</p>
              <span>Change By Design</span>
            </div>
            <div className="book-information-row">
              <p>ISBN-10</p>
              <span>0062856626</span>
            </div>
            <div className="book-information-row">
              <p>ISBN-13</p>
              <span>978-0062856623</span>
            </div>
            <div className="wrapper-book-review">
              <strong>Resenha da Editora</strong>
              <span>
                <img src={quotes} alt="" /> The subject of “design thinking” is
                the rage at business schools, throughout corporations, and
                increasingly in the popular press—due in large part to the work
                of IDEO, a leading design firm, and its celebrated CEO, Tim
                Brown, who uses this book to show how the techniques and
                strategies of design belong at every level of business.
                The subject of “design thinking” is
                the rage at business schools, throughout corporations, and
                increasingly in the popular press—due in large part to the work
                of IDEO, a leading design firm, and its celebrated CEO, Tim
                Brown, who uses this book to show how the techniques and
                strategies of design belong at every level of business.
                The subject of “design thinking” is
                the rage at business schools, throughout corporations, and
                increasingly in the popular press—due in large part to the work
                of IDEO, a leading design firm, and its celebrated CEO, Tim
                Brown, who uses this book to show how the techniques and
                strategies of design belong at every level of business.
              </span>
            </div>
          </div>
        </div>
      </Container>
    </Modal>
  );
}
