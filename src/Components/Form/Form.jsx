import React, {useEffect, useState} from 'react';
import s from './Form.module.css'
import MyButton from "../MyButton/MyButton";

const CustomForm = ({createNewBook}) => {
    const [name, setName] = useState('');
    const [author, setAuthor] = useState('');
    const [year, setYear] = useState('');
    const [rating, setRating] = useState('');
    const [isbn, setIsbn] = useState('');

    const [nameDirty, setNameDirty] = useState(false);
    const [authorDirty, setAuthorDirty] = useState(false);
    const [yearDirty, setYearDirty] = useState(false);
    const [ratingDirty, setRatingDirty] = useState(false);

    const [nameError, setNameError] = useState('Название книги не может быть пустым');
    const [authorError, setAuthorError] = useState('Обязательное поле, книга должна содержать хотя бы одного автора');
    const [yearError, setYearError] = useState('');
    const [ratingError, setRatingError] = useState('');

    //активность кнопки создания книги
    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        if(nameError || authorError){
            setFormValid(false)
        }else {
            setFormValid(true)
        }
    }, [nameError, authorError])

    const blurHandler = (e) => {
        switch (e.target.name){
            case 'name':
                setNameDirty(true)
                break
            case 'author':
                setAuthorDirty(true)
                break
            case 'year':
                setYearDirty (true)
                break
            case 'rating':
                setRatingDirty (true)
                break
        }
    }

    const nameHandler = (e) => {
        setName(e.target.value)
        if(e.target.value.length > 100){
            setNameError('Максимум 100 символов!')
        }else if(!e.target.value){
            setNameError('Название книги не может быть пустым')
        }else {
            setNameError('')
        }
    }

    const authorHandler = (e) => {
        setAuthor(e.target.value)
        if(!e.target.value){
            setAuthorError('Обязательное поле, книга должна содержать хотя бы одного автора')
        }else {
            setAuthorError('')
        }
    }

    const yearHandler = (e) => {
        setYear(e.target.value)
        if(e.target.value < 1800){
            setYearError('Год издания начиная с 1800')
        }else {
            setYearError('')
        }
    }

    const ratingHandler = (e) => {
        setRating(e.target.value)
        if(e.target.value < 0 || e.target.value > 10 ){
            setRatingError('Рейтинг от 0 до 10')
        }else {
            setRatingError('')
        }
    }

    const addNewBook = (e) => {
        e.preventDefault();
        const newBook = {
            id: Date.now(),
            name,
            author,
            year,
            rating,
            isbn
        }
        // вызываем переданную пропсом функцию(калбэком передаем наверх в state данные отсюда)
        createNewBook(newBook)
        setName('');
        setAuthor('');
        setYear('');
        setRating('');
        setIsbn('');
    }

    return (
        <div className={s.formBlock}>
            <h2>Добавить книгу</h2>
            <form className={s.form}>
                <label htmlFor='name'>Название книги</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    value={name}
                    onBlur={e => blurHandler(e)}
                    onChange={e => nameHandler(e)}
                />
                {(nameDirty && nameError) && <div className={s.error}>{nameError}</div>}

                <label htmlFor='author'>Автор книги</label>
                <input
                    id="author"
                    name="author"
                    type="text"
                    value={author}
                    onBlur={e => blurHandler(e)}
                    onChange={e => authorHandler(e)}
                />
                {(authorDirty && authorError) && <div className={s.error}>{authorError}</div>}

                <label htmlFor='year'>Год публикации</label>
                <input
                    id="year"
                    name="year"
                    type="number"
                    value={year}
                    onBlur={e => blurHandler(e)}
                    onChange={e => yearHandler(e)}
                />
                {(yearDirty && yearError) && <div className={s.error}>{yearError}</div>}

                <label htmlFor='rating'>Рейтинг</label>
                <input
                    id="rating"
                    name="rating"
                    type="number"
                    value={rating}
                    onBlur={e => blurHandler(e)}
                    onChange={e => ratingHandler(e)}
                />
                {(ratingDirty && ratingError) && <div className={s.error}>{ratingError}</div>}

                <label htmlFor='isbn'>ISBN</label>
                <input
                    id="isbn"
                    name="isbn"
                    type="text"
                    value={isbn}
                    onBlur={e => blurHandler(e)}
                    onChange={e => setIsbn(e.target.value)}
                />

                <MyButton disabled={!formValid} onClick={addNewBook} type="submit">Создать</MyButton>
            </form>
        </div>

    )
};

export default CustomForm;



// Короче сделать заново ручную валидацию, эта через YUP не работает теперь...
// или разовбраться с YUP или формиком.. че то мешает  почему не работает
// смотри onSubmit на 52 строке че то с ним

// import React, {useState} from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import s from './Form.module.css'
// import * as Yup from 'yup'
// import MyTextInput from "../MyTextInput/MyTextInput";
//
//
// const CustomForm = ({createNewBook}) => {
//     const [createBook, setCreateBook] = useState({
//         name:'',
//         author:'',
//         year:'',
//         rating: 0,
//         isbn:''
//     });
//
//
//     const addNewBook = (e) => {
//         e.preventDefault();
//         const newBook = {
//             ...createBook,
//             id: Date.now()
//         }
//         // вызываем переданную пропсом функцию(калбэком передаем наверх в state данные отсюда)
//         createNewBook(newBook)
//         setCreateBook({name:'', author:'', year:'', rating:'', isbn:''});
//
//     }
//
//     return (
//         <Formik
//             initialValues = {{
//             name:'',
//             author:'',
//             year:'',
//             rating:0,
//             isbn:''
//         }}
//             validationSchema={ Yup.object({
//             name:Yup.string()
//                 .max(100, 'Максимум 100 символов!')
//                 .required('Обязательное поле!'),
//             author: Yup.string()
//                 .required('Обязательное поле, книга должна содержать хотя бы одного автора'),
//             year: Yup.number()
//                 .min(1800, 'Год издания начиная с 1800'),
//             rating: Yup.number()
//                 .min(0, 'Минимальный рейтинг 0')
//                 .max(10, 'Максимальный рейтинг 10'),
//         })}
//             onSubmit={ values => console.log(JSON.stringify(values, null, 2))}
//         >
//             <Form className={s.form}>
//                 <label htmlFor='name'>Название книги</label>
//                 <Field
//                     id="name"
//                     name="name"
//                     type="text"
//                     value={createBook.name}
//                     onChange={e => setCreateBook({...createBook, name: e.target.value})}
//                 />
//                 <ErrorMessage name="name" className={s.error} component="div"/>
//
//                 <label htmlFor='author'>Автор книги</label>
//                 <Field
//                     id="author"
//                     name="author"
//                     type="text"
//                     value={createBook.author}
//                     onChange={e => setCreateBook({...createBook, author: e.target.value})}
//                 />
//                 <ErrorMessage name="author" className={s.error} component="div"/>
//
//                 <label htmlFor='year'>Год публикации</label>
//                 <Field
//                     id="year"
//                     name="year"
//                     type="text"
//                     value={createBook.year}
//                     onChange={e => setCreateBook({...createBook, year: e.target.value})}
//                 />
//                 <ErrorMessage name="year" className={s.error} component="div"/>
//
//                 <label htmlFor='rating'>Рейтинг</label>
//                 <Field
//                     id="rating"
//                     name="rating"
//                     type="number"
//                     value={createBook.rating}
//                     onChange={e => setCreateBook({...createBook, rating: e.target.value})}
//                 />
//                 <ErrorMessage name="rating" className={s.error} component="div"/>
//
//                 <label htmlFor='isbn'>ISBN</label>
//                 <Field
//                     id="isbn"
//                     name="isbn"
//                     type="text"
//                     value={createBook.isbn}
//                     onChange={e => setCreateBook({...createBook, isbn: e.target.value})}
//                 />
//                 <ErrorMessage name="isbn" className={s.error} component="div"/>
//
//                 <button onClick={addNewBook} type="submit">Создать</button>
//             </Form>
//         </Formik>
//     )
// };
//
// export default CustomForm;
//
//
//
// // Короче сделать заново ручную валидацию, эта через YUP не работает теперь...
// // или разовбраться с YUP или формиком.. че то мешает  почему не работает
// // смотри onSubmit на 52 строке че то с ним