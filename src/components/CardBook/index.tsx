import { Container } from "./styles";

type CardBookProps = {
  id: string;
  title: string;
  author: Array<string>;
  pageCount: number;
  publisher: string;
  publishedDate: number;
  bookImage: string;
};

export function CardBook({
  id,
  title,
  author,
  pageCount,
  publisher,
  publishedDate,
  bookImage,
}: CardBookProps) {
  return (
    <Container>
      <div className="card" key={id}>
        <img className="card-image" src={bookImage} alt={title} />
        <div className="card-content">
          <h3 className="card-title">{title}</h3>
          <h3 className="card-author">{author.map(a =>(
            <span>{a}</span>
          ))}</h3>
          <div className="card-info">
            <p className="card-pageCount">{pageCount} páginas</p>
            <p className="card-publisher">{publisher}</p>
            <p className="card-published">Publicado em {publishedDate}</p>
          </div>
        </div>
      </div>
    </Container>
  );
}
