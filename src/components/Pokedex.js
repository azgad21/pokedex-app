import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PokemonCard from './PokemonCard';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Pokedex = () => {

    const user = useSelector(state => state.user)

    const [characterSearch, setCharacterSearch] = useState("")

    const[characters, setCharacters] = useState([])

    const [locations, setLocation] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1126")
            .then(res =>setCharacters(res.data.results))

        axios.get("https://pokeapi.co/api/v2/type")
            .then(res => setLocation(res.data.results))
    }, [])

    console.log(locations)

    // 

    const search = () => {
        console.log(characterSearch)
        navigate(`/pokedex/${characterSearch}`)

    }

    const filterCharacters = e => {
        axios.get(e.target.value)
            .then(res => setCharacters(res.data.pokemon))
    }

    console.log(characters)

    return (
        <div>
            <h1>Pokedex</h1>
            <p>Bienvenido <b>{user}</b>!</p>
            <select onChange={filterCharacters}>
                <option></option>
                {
                    locations.map(location => (
                        <option value={location.url}>{location.name}</option>
                    ))
                }
            </select>

            <div className="search-box">
                <input 
                    type="text" 
                    value={characterSearch} 
                    onChange={e => setCharacterSearch(e.target.value)} 
                    placeholder="Buscar Personaje"
                />
                <button onClick={search}>Buscar</button>
            </div>
            {
                characters.map(character => (
                    <PokemonCard characterUrl={character.url !== undefined ? character.url : character} key={character.url} />
                ))
            }
        </div>
    );
};

export default Pokedex;