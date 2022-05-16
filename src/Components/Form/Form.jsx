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
