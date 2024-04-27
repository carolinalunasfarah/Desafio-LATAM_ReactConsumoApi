import { useEffect } from "react";

const Search = ({ characters, search, setSearch, setFilteredData }) => {
    // set search so it captures the input
    const inputFilter = (e) => {
        setSearch(e.target.value);
    };

    // useEffect with condition to show characters or the filteredData
    useEffect(() => {
        if (!search) {
            setFilteredData(characters);
        } else {
            const findWord = search.toLowerCase();
            const filterResponse = characters.filter((character) =>
                character.name.toLowerCase().includes(findWord)
            );
            setFilteredData(filterResponse);
        }
    }, [characters, search, setSearch, setFilteredData]);

    return (
        <>
            <header>
                <img
                    src="/assets/img/rickymorty.png"
                    alt="Rick Y Morty title"
                />
                <section className="searchSection">
                    <input
                        className="form-control mb-3"
                        type="text"
                        name="search"
                        id="search"
                        value={search}
                        placeholder="Find your favorite Rick and Morty character"
                        onChange={inputFilter}
                    />
                </section>
            </header>
        </>
    );
};

export default Search;
