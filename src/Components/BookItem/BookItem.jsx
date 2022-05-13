import React from 'react';


const BookItem = ({book,number, removeBook}) => {
    return (
        <div>
            <div>
                <strong>{number}.{book.name}</strong>
                <div>
                    Автор книги: {book.author}
                </div>
                <div>
                    Год публикации: {book.year}
                </div>
                <div>
                    Рейтинг: {book.rating}
                </div>
                <div>
                    ISBN: {book.isbn}
                </div>
            </div>
            <div>
                <button  onClick={() => removeBook(book.id)}>Удалить книгу</button>
            </div>
        </div>
    );
};

export default BookItem;