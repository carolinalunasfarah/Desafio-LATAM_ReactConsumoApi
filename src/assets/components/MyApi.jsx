import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";

const MyApi = () => {
    const [characters, setCharacters] = useState([]);

    const getCharacters = async () => {
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
    };

    useEffect(() => {
        getCharacters();
    }, []);

    return (
        <>
            <main>
                {characters.map((character, e) => (
                    <section key={e}>
                        <Card style={{ width: "18rem" }}>
                            <Card.Img
                                variant="top"
                                src={character.image}
                                alt={character.name}
                            />
                            <Card.Body>
                                <Card.Title>
                                    <h2>{character.name}</h2>
                                </Card.Title>
                                <Card.Text>
                                    Status <strong>{character.status}</strong>
                                </Card.Text>
                                <Card.Text>
                                    Species <strong>{character.species}</strong>
                                </Card.Text>
                                <Card.Text>
                                    Origin name
                                    <strong>{character.origin.name}</strong>
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
