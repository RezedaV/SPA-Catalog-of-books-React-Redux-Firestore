import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import CatalogYear from "./CatalogYear/CatalogYear";
import CustomForm from "./Form/Form";
import Select from "./Filter/Select";
import {selectBooks} from "../store/book/selectors";
import {addBook, deleteBook, sortBook} from "../store/book/actions";
import {collection, getDocs, addDoc, deleteDoc, doc} from "@firebase/firestore";
import {db} from "../firebase";
import RecomBook from "./ReccomBook/RecomBook";


function BookBlock() {
    // const books = useSelector(selectBooks); //раскомментировать для редакса
    const dispatch = useDispatch();
    const [books, setBooks] = useState([]);
    const booksCollectionRef = collection(db, "books")

    const [selectedSort, setSelectedSort] = useState('');
    const [recomBooks, setRecomBooks] = useState([]);
    const [isBookLoading, setIsBookLoading] = useState(false)

    useEffect(() => {
        const getBooks = async () =>{
            const data = await getDocs(booksCollectionRef);
            setBooks(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }
        return getBooks;
    }, [books])  // (убирать books если хотите узнать как работает сортировка =D )



    const createNewBook = async (newBook, getBooks) => {
        // dispatch(addBook(newBook)); //раскомментировать для редакса
        await addDoc(booksCollectionRef, newBook)
        // await getBooks();

    }

    const removeBook = async (book, getBooks) => {
        // dispatch(deleteBook(book)); //раскомментировать для редакса
        const bookDoc = doc(db, "books", book)
        await deleteDoc(bookDoc);
        // await getBooks();
    }

    //сортировка не работает, т.к. useEffect  обновляет всегда страницу... и возвращает старые данные,
    const sortPosts = async (sort) => {
        await setSelectedSort(sort)
        await setBooks([...books].sort((a,b) => a[sort].localeCompare(b[sort])))
        // dispatch(sortBook(sort)) // раскомментировать для редакса
    }

    const recommendationBook2 = () => {
        setRecomBooks(books)
        setRecomBooks(books.filter(book => {
            if (book.year >= 2019){
                setIsBookLoading(true)
                return true
            }
        }))
    }



    return (
        <div>
            <RecomBook recomBooks={recomBooks} recommendationBook2={recommendationBook2} isBookLoading={isBookLoading}/>
            <hr/>
            <CustomForm createNewBook={createNewBook}/>
            <hr/>
            <Select
                    value={selectedSort}
                    onChange={sortPosts}
                    defaultValue="Сортировка по"
                    options={[
                        {value: 'name', name: 'По наименованию'},
                        {value: 'author', name: 'По автору'},
                    ]}
            />
            <CatalogYear
                removeBook={removeBook}
                books={books}
            />
        </div>
    );
}

export default BookBlock;

