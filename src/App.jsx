import { useState } from "react";
import "./App.css";
// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// components
import MyApi from "./components/MyApi";
import Search from "./components/Search";

function App() {
    // initial states
    const [characters, setCharacters] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [search, setSearch] = useState("");

    return (
        <>
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
        </>
    );
}

export default App;
