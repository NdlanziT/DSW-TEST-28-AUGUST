// CharactersComponent.js
import React, { useState, useEffect } from 'react';
import styles from './CharactersComponent.module.css';

function CharactersComponent({ setSelectedCharacter }) {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    gender: '',
    alive: '',
    species: '',
  });

  useEffect(() => {
    fetch('https://hp-api.herokuapp.com/api/characters')
      .then(response => response.json())
      .then(data => {
        setCharacters(data);
        setFilteredCharacters(data);
      });
  }, []);

  useEffect(() => {
    let filtered = characters.filter(character => 
      character.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filters.gender ? character.gender === filters.gender : true) &&
      (filters.alive ? (character.alive ? "true" : "false") === filters.alive : true) &&
      (filters.species ? character.species === filters.species : true)
    );
    setFilteredCharacters(filtered);
  }, [searchTerm, filters, characters]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className={styles.container}>
      <h2>Characters</h2>
      <input 
        type="text" 
        placeholder="Search by name" 
        value={searchTerm} 
        onChange={handleSearch} 
        className={styles.searchBar}
      />
      <div className={styles.filterBar}>
        <label>
          Gender:
          <select name="gender" onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <label>
          Alive:
          <select name="alive" onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="true">Alive</option>
            <option value="false">Deceased</option>
          </select>
        </label>
        <label>
          Species:
          <select name="species" onChange={handleFilterChange}>
            <option value="">All</option>
            {/* Add species options as needed */}
          </select>
        </label>
      </div>
      <div>
        {filteredCharacters.map(character => (
          <div key={character.name} className={styles.characterCard} onClick={() => setSelectedCharacter(character)}>
            <h3>{character.name}</h3>
            <p>{character.dateOfBirth}</p>
            <p>{character.species}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CharactersComponent;


