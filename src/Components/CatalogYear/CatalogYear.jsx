// потом это удалить
import React from 'react';
import Booklist from "../Booklist";
import BookItem from "../BookItem/BookItem";
import {useDispatch, useSelector} from "react-redux";
import {selectBooks} from "../../store/book/selectors";
import s from './CatalogYear.module.css'

const CatalogYear = ({books, removeBook}) => {
    // const books = useSelector(selectBooks);
    // const dispatch = useDispatch();



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



