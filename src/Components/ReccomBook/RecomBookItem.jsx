import React from 'react';

const RecomBookItem = ({book}) => {

    return (
        <div>
            <strong>{book.name}</strong>
            <div>Автор книги: {book.author}</div>
            <div>Год публикации: {book.year}</div>
            <div>Рейтинг: {book.rating}</div>
            <div>ISBN: {book.isbn}</div>
        </div>
    );
};

export default RecomBookItem;