import Players from "./Players";

export default function PlayerContainer({ puppies, setPuppies, fetchAllPuppies }) {
    const style = {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "50px",
        marginBottom: "50px"
    }

    const black = {
        color: 'black'
    }

    const sortedPuppies = [...puppies].sort((a, b) => b.id - a.id);

    return (
        <div>
            <h2 style={black}>Your Puppy Bowl Players</h2>
            <div id="all-puppies-container">
            {puppies.length > 0 ? (
                <div className="puppy-list" style={style}>
                    {sortedPuppies.map((puppy) => (
                        <Players
                            key={puppy.id}
                            name={puppy.name}
                            img={puppy.imageUrl}
                            breed={puppy.breed}
                            status={puppy.status}
                            puppyId={puppy.id}
                            fetchAllPuppies={fetchAllPuppies}
                        />
                    ))}
                </div>
            
            ) : (
                <p>No players found.</p>
            )}
            </div>
        </div>
    );
}