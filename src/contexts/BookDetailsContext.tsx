import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type BookDetailsContextProps = {
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
type BookDetailsProviderProps ={
  children: ReactNode;
}
type BookDetailsContextData ={
  book: BookDetailsContextProps;
  setBook: (book: BookDetailsContextProps) => void;
}

export const BookDetailsContext = createContext( {} as BookDetailsContextData);

export function BookDetailsProvider({children}:BookDetailsProviderProps){
  const [book, setBook] = useState<BookDetailsContextProps>({
    authors: [],
    title: "",
    description: "",
    pageCount: 0,
    category: "",
    imageUrl: "",
    language: "",
    isbn10: 0,
    isbn13: "",
    publisher: "",
    published: 0,
    id: "",
  });
  return(
    <BookDetailsContext.Provider value={{book, setBook}}>
      {children}
    </BookDetailsContext.Provider>
  )
}