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

    console.log(filteredData);

    return (
        <>
            <Search
                characters={characters}
                filteredData={setFilteredData}
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
