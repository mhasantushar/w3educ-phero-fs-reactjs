export default function Book({book}){
  console.log(book);
  return <li><strong>{book.name}</strong> | Price: {book.price}</li>
}