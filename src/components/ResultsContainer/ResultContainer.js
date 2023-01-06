import React from 'react'
import "./ResultContainer.css"

function ResultContainer({ list }) {

    const url = "https://www.namecheap.com/domains/registration/results/?domain=";
    return (
        <div className="result-container">
            {list.map((list, i) => (
                <a href={url + `${list}`}
                    target="_blank"
                    key={i}>
                    {list}
                </a>
            ))}

        </div>
    )
}

export default ResultContainer