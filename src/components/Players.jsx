import { Link } from "react-router-dom";

export default function Players( {name, img, breed, status, fetchAllPuppies, puppyId} ) {
    const style = {
        color: '#FFFFFF',
        boxShadow: '0 0 5px black',
        backgroundColor: '#3A7D44',
        height: '500px',
        width: '500px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: '5px'
    }

    const black = {
        color: 'black'
    }

    const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/2410-FTB-ET-WEB-FT/players`;

    const deletePuppy = async (puppyId) => {
        try {
            const response = await fetch(`${APIURL}/${puppyId}`, {
                method: "DELETE",
            })
            if (response.ok) {
                fetchAllPuppies();
            } else {
                console.error("Failed to delete puppy");
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <div style={style}>
                <h3>{name}</h3>
                <Link key={puppyId} to={`/puppy/${puppyId}`}>
                    <div className="imgContainer">
                        <img src={img} className="puppyImg" alt={`${name} the ${breed}`} />
                    </div>
                </Link>
                <p className="breed"><b>Breed:</b> {breed}</p>
                <p className="status"><b>Status:</b> {status}</p>
                <div id="btnContainer">
                    <button className="statusBtn" style={black}>Change Status</button>
                    <button className="deleteBtn" style={black} onClick={() => deletePuppy(puppyId)}>Delete</button>
                </div>
            </div>
        </>
    )
}