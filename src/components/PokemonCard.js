import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PokemonCard = ({characterUrl}) => {

    const [character, setCharacter] = useState({})

    const navigate = useNavigate()



    useEffect(() => {
        axios.get(characterUrl)
            .then(res => setCharacter(res.data))
    }, [characterUrl])

    console.log(character)

    return (
        <div onClick={() => navigate(`/pokedex/${character.id}`)}>
            <div>
                <h2>{character.name}</h2>
                <img src={character.sprites?.front_default} alt="" />
            </div>
        </div>
    );
};

export default PokemonCard;