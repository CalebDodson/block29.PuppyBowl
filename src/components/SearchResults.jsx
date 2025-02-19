import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function SearchResults({ puppies }) {
    const { searchName } = useParams();
    const [filteredPuppies, setFilteredPuppies] = useState([]);

    useEffect(() => {
        const filtered = puppies.filter((puppy) => 
            puppy.name.toLowerCase().startsWith(searchName.toLowerCase())
        );
        setFilteredPuppies(filtered);
    }, [puppies, searchName]);

    const style = {
        color: 'black'
    }

    return (
        <div id="filteredResults" style={style}>
            <h3>Search results for "{searchName}" :</h3>
            {filteredPuppies.length > 0 ? (
                <ul>
                {filteredPuppies.map((puppy) => (
                    <li key={puppy.id}>
                    {puppy.name} the {puppy.breed}
                    </li>
                ))}
                </ul>
            ) : (
                <p>No puppies found matching that name!</p>
            )}
        </div>
    )
}