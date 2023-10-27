import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Page from './pages/Page';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import GenderPrediction from './components/Genero';
import GeneroPage from './pages/GeneroPage';
import EdadPage from './pages/DeterminarEdadPage';
import UniversidadesPage from './pages/UniversidadesPage';
import ClimaPage from './pages/ClimaPage';
import AcercaDePage from './pages/AcercaDePage';

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/" exact={true}>
              <Redirect to="/folder/Herramientas" />
            </Route>
            <Route path="/folder/:name" exact={true}>
              <Page />
            </Route>
            <Route path="/page/Genero" exact={true}>
              < GeneroPage/>
            </Route>
            <Route path="/page/Determinar_edad" exact={true}>
              < EdadPage/>
            </Route>            
            <Route path="/page/Universidades" exact={true}>
              < UniversidadesPage/>
            </Route>            
            <Route path="/page/Genero" exact={true}>
              < GeneroPage/>
            </Route>
            <Route path="/page/Clima" exact={true}>
              < ClimaPage/>
            </Route>
            <Route path="/page/Acerca_de" exact={true}>
              < AcercaDePage/>
            </Route>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
