import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import CatalogYear from "./CatalogYear";
import CustomForm from "./Form/Form";
import Select from "./Filter/select";
import {selectBooks} from "../store/book/selectors";
import {addBook, deleteBook, sortBook} from "../store/book/actions";
import {collection, getDocs, addDoc, deleteDoc, doc} from "@firebase/firestore";
import {db} from "../firebase";


function BookBlock() {
    // const books = useSelector(selectBooks); //раскомментировать для редакса
    const dispatch = useDispatch();
    const [books, setBooks] = useState([]);
    const booksCollectionRef = collection(db, "books")

    const [selectedSort, setSelectedSort] = useState('');

    useEffect(() => {
        const getBooks = async () =>{
            const data = await getDocs(booksCollectionRef);
            setBooks(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
            console.log(books)
        }
        return getBooks;
    }, [books])



    const createNewBook = async (newBook, getBooks) => {
        // setBooks([...books, newBook]) // удалить потом
        // dispatch(addBook(newBook)); //раскомментировать для редакса
        await addDoc(booksCollectionRef, newBook)
        await getBooks();

    }

    const removeBook = async (book, getBooks) => {
        // setBooks(books.filter(b => b.id !== book.id))  // удалить потом
        // dispatch(deleteBook(book)); //раскомментировать для редакса
        const bookDoc = doc(db, "books", book)
        await deleteDoc(bookDoc);
        await getBooks();
    }

    //сортировка не работает, т.к. useEffect  обновляет всегда страницу... и возвращает старые данные,
    const sortPosts = async (sort) => {
        await setSelectedSort(sort)
        await setBooks([...books].sort((a,b) => a[sort].localeCompare(b[sort])))
        // dispatch(sortBook(sort)) // раскомментировать для редакса
    }



    return (
        <div>
            <CustomForm createNewBook={createNewBook}/>
            <hr/>
            <div>
                <Select
                    value={selectedSort}
                    onChange={sortPosts}
                    defaultValue="Сортировка по"
                    options={[
                        {value: 'name', name: 'По наименованию'},
                        {value: 'author', name: 'По автору'},
                    ]}
                />
            </div>
            <CatalogYear
                removeBook={removeBook}
                books={books}
            />
            {/*<h1>В библиотеке книг нет :(</h1>*/}
        </div>
    );
}

export default BookBlock;

// 1.Перенести все на Редакс, - готово!
// 2. Подключить Firestore - готово!, но редакс не работает с ним...
// 3. Сделать рекомендуемую книгу
// 4. Поправить дизайн на нормальное что то

// рекомендованную книгу как выводить не могу найти инфо.. может быть сделать отдельный компонент,
// и проходясь по массиву с книгами найти подходящую и вывести в компоненте..., как то с помощью map, и внутри записать
// выражение с проверкой типа if такой то проходит, то push в этот массив какой то новый state [recBook, setRecBook]