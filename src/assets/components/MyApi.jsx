import { useEffect } from "react";
import Card from "react-bootstrap/Card";

const MyApi = ({ setCharacters, filteredData }) => {
    // function that brings the information from the API
    const getCharacters = async () => {
        try {
            const url = "https://rickandmortyapi.com/api/character";
            const response = await fetch(url);
            const data = await response.json();
            const api = data.results
                .map((e) => {
                    return {
                        name: e.name,
                        status: e.status,
                        species: e.species,
                        origin: e.origin.name,
                        image: e.image,
                    };
                })
                .sort((a, b) => a.name.localeCompare(b.name));
            setCharacters(api);
        } catch (error) {
            console.log("Couldn't get the API information", error);
        }
    };

    useEffect(() => {
        getCharacters();
    }, []);

    return (
        <>
            <main>
                {filteredData.map((character, e) => (
                    <section key={e}>
                        <Card className="card">
                            <Card.Img
                                variant="top"
                                src={character.image}
                                alt={character.name}
                            />
                            <Card.Body className="cardBody">
                                <Card.Title>
                                    <h2>{character.name}</h2>
                                </Card.Title>
                                <Card.Text>
                                    <strong id="status">Status:</strong>{" "}
                                    {character.status}
                                </Card.Text>
                                <Card.Text>
                                    <strong id="species">Species:</strong>{" "}
                                    {character.species}
                                </Card.Text>
                                <Card.Text>
                                    <strong id="origin">Origin:</strong>{" "}
                                    {character.origin}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </section>
                ))}
            </main>
        </>
    );
};

export default MyApi;
