import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div id="container">
      <img src="img/toolbox.png" alt="" />
    </div>
  );
};

export default ExploreContainer;
