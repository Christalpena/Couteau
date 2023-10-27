import { useState } from 'react';
import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const Edad: React.FC<ContainerProps> = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
  
    const predictAge = async () => {
      try {
        const response = await fetch(`https://api.agify.io/?name=${name}`);
        const data = await response.json();
        setAge(data.age);
  
      } catch (error) {
        console.error('Error al obtener la edad:', error);
      }
    };
  
    const getAgeCategory = () => {
      if (age < 18) {
        return 'joven';
      } else if (age >= 18 && age < 65) {
        return 'adulto';
      } else {
        return 'anciano';
      }
    };
  
    const getAgeImage = () => {
      const ageCategory = getAgeCategory();
      switch (ageCategory) {
        case 'joven':
          return 'img/Edad/Joven.jpg';
        case 'adulto':
          return 'img/Edad/Adulto.jpg';
        case 'anciano':
          return 'img/Edad/Mayor.jpg';
        default:
          return '';
      }
    };
  
    return (
      <div id='container'>
        <h2 className='title'>Predicción de Edad</h2>
        <div className='items'>
            <input
            className='input'
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            <button className='btn' onClick={predictAge}>Predecir Edad</button>
        </div>

        {age !== null && age !== 0 &&(
          <div>
            <p className='title'>La edad predicha es: {age}</p>
            <hr />
            <p>Esta persona es {getAgeCategory()}.</p>
            <img className='img' src={getAgeImage()} alt={getAgeCategory()} />
          </div>
        ) }
      </div>
    );
};

export default Edad;