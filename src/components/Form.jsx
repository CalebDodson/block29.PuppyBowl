import { useState } from "react";

export default function Form( {fetchAllPuppies} ) {
    const style = {
        backgroundColor: '#FFD966',
        padding: '0 14px 12px 8px',
        border: 'none',
        borderRadius: '5px',
        boxShadow: '0 0 5px black',
        fontSize: '20px'
    };

    const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/2410-FTB-ET-WEB-FT/players`;

    const [puppyData, setPuppyData] = useState({
        name: "",
        breed: "",
        imageUrl: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPuppyData({
            ...puppyData,
            [name]: value,
        })
    }

    const addPuppy = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(APIURL, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(puppyData),
            })
            const json = await response.json();
            setPuppyData({ name: "", breed: "", imageUrl: "" });
            console.log(json);
            fetchAllPuppies();

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <div style={style}>
                <h2>Enter your own player!</h2>
                <div id="form-container">
                    <form onSubmit={addPuppy}>
                        <label htmlFor="name" id="firstLabel">Puppy's Name: </label>
                        <input type="text" id="name" name="name" value={puppyData.name} onChange={handleChange} />
                        <label htmlFor="breed"> Puppy's Breed: </label>
                        <input type="text" id="breed" name="breed" value={puppyData.breed} onChange={handleChange} />
                        <label htmlFor="imageUrl"> Puppy's Picture: </label>
                        <input type="url" id="picture" name="imageUrl" value={puppyData.imageUrl} onChange={handleChange} />
                        <input type="submit" id="submitBtn" />
                    </form>
                </div>
            </div>
        </>
    )
}