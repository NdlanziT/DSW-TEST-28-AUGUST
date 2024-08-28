// CharacterDetails.js
import React from 'react';
import styles from './CharacterDetails.module.css';

function CharacterDetails({ character, clearSelection }) {
  return (
    <div className={styles.detailsContainer}>
      <button onClick={clearSelection} className={styles.backButton}>Back</button>
      <h2>{character.name}</h2>
      <p>Alternate Names: {character.alternate_names.join(', ')}</p>
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
      <p>House: {character.house}</p>
      <p>Date of Birth: {character.dateOfBirth}</p>
      {/* Add more character details as needed */}
    </div>
  );
}

export default CharacterDetails;

