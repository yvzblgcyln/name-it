import React from 'react'
import "./Search.css"

function Search({ inputText, setInputText }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputText)
    }
    return (
        <div className='search-container'>
            <form onSubmit={handleSubmit}>
                <input
                    className='search-input'
                    placeholder='Type text'
                    onChange={(e) => setInputText(e.target.value)}
                />
            </form>
        </div>
    )
}

export default Search