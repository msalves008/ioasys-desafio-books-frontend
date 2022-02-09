import { Container } from "./styles";
import unknownBook from "../../assets/unknown-book.png";

type CardBookProps = {
  id: string;
  title: string;
  author: Array<string>;
  pageCount: number;
  publisher: string;
  publishedDate: number;
  bookImage: string;
  onclick: () => void;
};

export function CardBook({
  id,
  title,
  author,
  pageCount,
  publisher,
  publishedDate,
  bookImage,
  onclick,
}: CardBookProps) {
  return (
    <Container>
      <button onClick={onclick}className="card" key={id}>
        {bookImage ? (
          <img className="card-image" src={bookImage} alt={title} />
        ) : (
          <img className="card-image" src={unknownBook} alt={title} />
        )}
        <div className="card-content">
          <h3 className="card-title">{title}</h3>
          <h3 className="card-author">
            {author.map((a) => (
              <span>{a}</span>
            ))}
          </h3>
          <div className="card-info">
            <p className="card-pageCount">{pageCount} páginas</p>
            <p className="card-publisher">{publisher}</p>
            <p className="card-published">Publicado em {publishedDate}</p>
          </div>
        </div>
      </button>
    </Container>
  );
}
