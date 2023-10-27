import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const AcercaDe: React.FC<ContainerProps> = () => {
  return (
    <div id="container">
        <img className='img' src="img/foto.png" alt="" />
        <h1>Christal Peña Perez</h1>
        <p>Web Developer</p>
        <p>christalpeerz0@gmail.com</p>
        <h5><a href="https://github.com/Christalpena">Github</a></h5>

    </div>
  );
};

export default AcercaDe;
