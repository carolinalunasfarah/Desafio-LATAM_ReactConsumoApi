const Search = ({ characters, filteredData }) => {
    const inputFilter = (e) => {
        const findWord = e.target.value.toLowerCase();

        const filterResponse = characters.filter((character) =>
            character.name.toLowerCase().includes(findWord)
        );

        filteredData(filterResponse);
    };

    return (
        <>
            <header>
                <img src="/src/assets/img/rickymorty.png" alt="Rick Y Morty title" />
                <section className="searchSection">
                    <input
                        className="form-control mb-3"
                        type="text"
                        name="search"
                        id="search"
                        placeholder="Find your favorite Rick and Morty character"
                        onChange={inputFilter}
                    />
                </section>
            </header>
        </>
    );
};

export default Search;
