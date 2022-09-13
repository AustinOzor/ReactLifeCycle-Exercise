import React from 'react';
import jokes from './jokes';
import bookApp from './books';

function App() {
  const booktoRead = jokes.map(book => {
  return <books autor={book.autor} bookTitle={book.bookTitle}/>
})

  return (
    <div className="App">
     
         {booktoRead}
    </div>
  );
}

export default App;
