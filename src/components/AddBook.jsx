import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_AUTHORS_QUERY=gql` 
    {
        authors{
            name
            id
        }
    }
`

function AddBook(){
    const { loading, error, data } = useQuery(GET_AUTHORS_QUERY)
    console.log(data)

    const displayAuthors = () => {
        if(loading){
            return(<option>Loading Authors...</option>)
        } else {
            return data.authors.map(author => {
                return(
                    <option key={author.id}>{author.name}</option>
                )
            })
        }
    }

    return (
        <form id="add-book">
            <div className="field">
                <label>Book Name:</label>
                <input type="text"/>
            </div>
            <div className="field">
                <label>Genre:</label>
                <input type="text"/>
            </div>
            <div className="field">
                <label>Author:</label>
                <select>
                    <option>Select Author</option>
                    {displayAuthors()}
                </select>
            </div>
            <button>+</button>
        </form>
    );
}

export default AddBook