import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_AUTHORS_QUERY } from '../queries/queries'


function AddBook(){
    //const { loading, error, data } = useQuery(GET_AUTHORS_QUERY)
    const [name, setName] = useState("")
    const [genre, setGenre] = useState("")
    const [authorId, setAuthorId] = useState("")
    const { loading, data } = useQuery(GET_AUTHORS_QUERY)
    // console.log(data)

    const displayAuthors = () => {
        if(loading){
            return(<option>Loading Authors...</option>)
        } else {
            return data.authors.map(author => {
                return(
                    <option key={author.id} value={author.id}>{author.name}</option>
                )
            })
        }
    }

    return (
        <form id="add-book">
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
            <button>+</button>
        </form>
    );
}

export default AddBook