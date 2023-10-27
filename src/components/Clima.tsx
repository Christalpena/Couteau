import { useEffect, useState } from 'react';

interface ContainerProps {
  name: string;
}

interface WeatherData {
  current: {
    temperature: number;
    summary: string;
    wind: {
        speed: number;
        angle: number;
        dir: string
    };
  };
}

const Clima: React.FC<ContainerProps> = () => {
  const [weatherData, setWeatherData] = useState<WeatherData>({
    current: {
      temperature: 0,
      summary: '',
      wind: {
        speed: 0,
        angle: 0,
        dir: ''
      }
    },
  });

  const apiKey = 'bmvjzmq3ylqbedjuu25ppjyhvzfc84z9vtglblsi';

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          `https://www.meteosource.com/api/v1/free/point?place_id=dominican-republic-3508796&sections=current%2Chourly&language=en&units=auto&key=${apiKey}`
        );
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error('Error al obtener el pronóstico del tiempo:', error);
      }
    };

    fetchWeatherData();
  }, [apiKey]);

  return (
    <div id='container'>
      <h2 className='title'>Pronóstico del Tiempo en República Dominicana</h2>
      <hr />
      {weatherData.current && (
        <div>
          <h3>Pronóstico Actual</h3>
          <p>Temperatura: {weatherData.current.temperature}°C</p>
          <p>{weatherData.current.summary}</p>
          <h3>Viento</h3>
          <p>Speed: {weatherData.current.wind.speed}</p>
          <p>Angle: {weatherData.current.wind.angle}</p>


        </div>
      )}
    </div>
  );
};

export default Clima;


