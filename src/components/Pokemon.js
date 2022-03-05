import React from "react";
import { Link } from "react-router-dom";
import "./Pokemon.scss";

const Pokemon = ({ pokemon, id }) => {
  const pokeButton = {
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#000",
    color: "#fff",
    padding: "5px",
    marginLeft: "10px",
  };

  return (
    <>
      <div className="card">
        <div className={`face face1 ${pokemon.types[0].type.name}F`}>
          <div className="content">
            <h3 align="center">{pokemon.name}</h3>
            <img
              style={{ width: "8rem" }}
              src={pokemon.sprites.front_default}
              alt="pokemon"
            />
            <br />
            <Link to={`/pokemon/${pokemon.id}`}>
              <button style={pokeButton}>Get More Info</button>
            </Link>
          </div>
        </div>
        <div className={`face face2 ${pokemon.types[0].type.name}`}>
          <h3>
            Gen
            {id <= 151
              ? " I: "
              : id <= 251
              ? " II: "
              : id <= 386
              ? " III: "
              : id <= 493
              ? " IV: "
              : id <= 649
              ? " V: "
              : id <= 721
              ? " VI: "
              : " VII: "}
            #{id}
          </h3>
        </div>
      </div>
    </>
  );
};

export default Pokemon;
