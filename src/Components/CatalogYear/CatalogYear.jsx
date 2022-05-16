// потом это удалить
import React from 'react';
import BookItem from "../BookItem/BookItem";
import s from './CatalogYear.module.css'

const CatalogYear = ({books, removeBook}) => {

    return (
        <div className={s.catalog}>
            <h1>Каталог книг</h1>
            <ul>
                {books.map((book, index) => (
                    <li key={book.id}>
                        <BookItem number={index+1} book={book} removeBook={removeBook}/>
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default CatalogYear;



