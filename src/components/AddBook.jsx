import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_AUTHORS_QUERY, ADD_BOOK_MUTATION } from '../queries/queries'


function AddBook(){
    //const { loading, error, data } = useQuery(GET_AUTHORS_QUERY)
    const [name, setName] = useState("")
    const [genre, setGenre] = useState("")
    const [authorId, setAuthorId] = useState("")
    const authorsData = useQuery(GET_AUTHORS_QUERY)
    const [addBookMutation, addBookData ] = useMutation(ADD_BOOK_MUTATION)
    // console.log(data)

    const displayAuthors = () => {
        if(authorsData.loading){
            return(<option>Loading Authors...</option>)
        } else {
            return authorsData.data.authors.map(author => {
                return(
                    <option key={author.id} value={author.id}>{author.name}</option>
                )
            })
        }
    }

    function submitForm(e){
        e.preventDefault()
        console.log(name, genre, authorId)
    }
    return (
        <form id="add-book" onSubmit={submitForm}>
            <div className="field">
                <label>Book Name:</label>
                <input value={name} onChange={(e)=> setName(e.target.value)} type="text"/>
            </div>
            <div className="field">
                <label>Genre:</label>
                <input value={genre} onChange={(e)=> setGenre(e.target.value)} type="text"/>
            </div>
            <div className="field">
                <label>Author:</label>
                <select value={authorId} onChange={(e)=>setAuthorId(e.target.value)}>
                    <option value="" >Select Author</option>
                    {displayAuthors()}
                </select>
            </div>
            <button type="submit">+</button>
        </form>
    );
}

export default AddBook