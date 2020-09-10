import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_BOOKS_QUERY } from '../queries/queries'
import BookDetails from './BookDetails';

function BookList() {
    // const { loading, error, data } = useQuery(GET_BOOKS_QUERY)
    const [selected, setSelected] = useState(null)
    const { loading, data } = useQuery(GET_BOOKS_QUERY)

    const displayBooks = () => {
        if(loading){
            return(<div>LoadingBooks...</div>)
        } else {
            return data.books.map(book => {
                return(
                    <li key={book.id} onClick={(e)=>setSelected(book.id)}>{book.name}</li>
                )
            })
        }
    }

    return (
        <div>
            <ul id="book-list">
                {displayBooks()}
            </ul>
            <BookDetails selected={selected}/>
        </div>
    );
 }

export default BookList;
