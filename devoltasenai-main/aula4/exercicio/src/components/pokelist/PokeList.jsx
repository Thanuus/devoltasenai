import { useEffect, useState } from "react";
import "./PokeList.css";


export default function PokeList(){

    const [pokemons, setPokemons] = useState([]);
    
    async function pokeList() {
        const reposta = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
        const dados = await reposta.json();

        setPokemons(dados.results);
        console.log(dados.results);
    }

    useEffect(() => {
        pokeList()
    }, [])

    return(
        <>
        <h2>Lista de pokemons</h2>
        <div className="pokemon-container">
            {pokemons.map((pokemon, index) => (
                <div key={index} className="pokemon-card">
                    <h3>{pokemon.name}</h3>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
                    alt={pokemon.name}></img>
                </div>
            ))}
        </div>
        </>
    )
}