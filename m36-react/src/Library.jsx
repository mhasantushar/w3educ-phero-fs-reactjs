import Book from "./Book.jsx";

export default function Library({books}){
  return (
    <div>
      <h2>National Library</h2>
      <p>Book Collection: {books.length}</p>

      <ul style={{listStyle: "none"}}>
        {
          books.map(book => <Book key={book.id} book ={book}/>)
        }
      </ul>
    </div>
  );
}