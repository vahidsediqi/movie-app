import React from 'react'

export default function SearchBox(props) {
    return (
        <div className="col">
            <input 
            className="form-control" 
            value={props.value}
            onChange={(event) => props.setSearchValue(event.target.value)}
            placeholder="Type to search..."></input>
        </div>
    )
}
