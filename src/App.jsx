import { useState } from "react";
import "./App.css";
// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// components
import MyApi from "./assets/components/MyApi";
import Search from "./assets/components/Search";

function App() {
    const [characters, setCharacters] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [search, setSearch] = useState("");

    return (
        <>
            <section className="container">
                <Search
                    characters={characters}
                    search={search}
                    setSearch={setSearch}
                    setFilteredData={setFilteredData}
                />
                <MyApi
                    characters={characters}
                    setCharacters={setCharacters}
                    filteredData={filteredData}
                    setFilteredData={setFilteredData}
                />
            </section>
        </>
    );
}

export default App;
