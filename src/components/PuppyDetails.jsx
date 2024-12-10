import { useParams } from "react-router-dom";
import { format } from "date-fns";

export default function PuppyDetails({ puppies }) {
    const { id } = useParams();
    const puppy = puppies.find((p) => p.id === parseInt(id));
   
    if (!puppy) {
        return <p>Puppy not found!</p>
    }

    const date = puppy.createdAt ? format(new Date(puppy.createdAt), "MM-dd-yyyy") : "Date not available";
    
    return (
        <div className="puppyDetails">
            <h2>{puppy.name}'s Details</h2>
            <div className="imgContainer">
                <img className="puppyImg" src={puppy.imageUrl} alt={`${puppy.name}`} />
            </div>
            <p>Breed: {puppy.breed}</p>
            <p>Status: {puppy.status}</p>
            <p>Id: {puppy.id}</p>
            <p>Date signed: {date}</p>
        </div>
    )
}