import { useState } from 'react';
import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const Universidades: React.FC<ContainerProps> = () => {
    const [country, setCountry] = useState('');
    const [universities, setUniversities] = useState([]);
  
    const searchUniversities = async () => {
      try {
        const response = await fetch(
          `http://universities.hipolabs.com/search?country=${country}`
        );
        const data = await response.json();
        setUniversities(data);
      } catch (error) {
        console.error('Error al obtener universidades:', error);
      }
    };
  
    return (
      <div id='container'>
        <h2 className='title'>Universidades por País</h2>
        <hr />
        <div className='items'>
            <input
                className='input'
                type="text"
                placeholder="Nombre del país en inglés"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                />
                <button className='btn' onClick={searchUniversities}>Buscar Universidades</button>
        </div>
        {universities.length > 0 && (
          <div>
            <h3>Lista de Universidades</h3>
            <ul className='universidades-items'>
              {universities.map((university:any, index:any) => (
                <li key={index}>
                  <p>Nombre: {university.name}</p>
                  <p>Dominio: {university.domains.join(', ')}</p>
                  <p>
                    <a href={university.web_pages[0]} target="_blank">
                      Página Web
                    </a>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
};

export default Universidades;