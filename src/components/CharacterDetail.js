import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CharacterDetail = () => {

    const [character, setCharacter] = useState({})

    const { id } = useParams()

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(res => setCharacter(res.data))
    },[id])
    

    return (
        <div>
            <h2>CharacterDetail</h2>
            <p>Accediendo al personaje con id: <b>{id}</b></p>
            <h1>{character.name}</h1>
            <img src={character.sprites?.front_default} alt="" />
            <p>{character.types?.[0].type.name}</p>
            <p>Height: <b>{character.height}</b></p>
            <p>Weight: <b>{character.weight}</b></p>
        </div>
    );
};

export default CharacterDetail;