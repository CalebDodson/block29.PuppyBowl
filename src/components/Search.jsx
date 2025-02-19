import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Search( {puppies} ) {
    const [searchName, setSearchName] = useState("");
    const navigate = useNavigate();

    const handleSearchChange = (e) => {
        setSearchName(e.target.value);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (searchName.trim() !== "") {
            navigate(`/search-results/${searchName}`)
        }
    }

    const style = {
        backgroundColor: '#FFD966',
        padding: '0 14px 12px 8px',
        border: 'none',
        borderRadius: '5px',
        boxShadow: '0 0 5px black',
        fontSize: '20px',
        color: 'black'
    };

    const black = {
        color: 'black'
    }

    return  (
        <>
            <div id="searchContainer" style={style}>
                <h2>Search for a Player!</h2>
                <div id="searchFormContainer">
                    <form onSubmit={handleFormSubmit}>
                        <label htmlFor="search">Enter Puppy's Name: </label>
                        <input type="text" id="search" name="search" value={searchName} onChange={handleSearchChange} />
                        <input type="submit" value="Search" style={black} />
                    </form>
                </div>
            </div>
        </>
    )
}