// App.js
import React, { useState } from 'react';
import CharactersComponent from './components/CharactersComponent.jsx';
import CharacterDetails from './components/CharacterDetails.jsx';
import PhoneModelsComponent from './components/PhoneModelsComponent.jsx';

function App() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  return (
    <div>
      <h1>Web Application</h1>
      <CharactersComponent setSelectedCharacter={setSelectedCharacter} />
      {selectedCharacter && (
        <CharacterDetails 
          character={selectedCharacter} 
          clearSelection={() => setSelectedCharacter(null)} 
        />
      )}
      <PhoneModelsComponent />
    </div>
  );
}

export default App;
