import React, { useState } from 'react';
interface ContainerProps {
    name: string;
  }
  
  const GenderPrediction: React.FC<ContainerProps> = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState(null);

  const predictGender = async () => {
    try {
      const response = await fetch(`https://api.genderize.io/?name=${name}`);
      const data = await response.json();
      setGender(data.gender);
    } catch (error) {
      console.error('Error al obtener el género:', error);
    }
  };

  return (
    <div id='container'>
      <h2 className='title'>Predicción de Género</h2>
      <hr />
        <div className='items'>
            <input
            className='input'
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        <button className='btn' onClick={predictGender}>Predecir Género</button>
        </div>
      {gender && (
        <div style={{ backgroundColor: gender === 'male' ? 'blue' : 'pink' }}>
          El género predicho es: {gender}
        </div>
      )}
    </div>
  );
};

export default GenderPrediction;
