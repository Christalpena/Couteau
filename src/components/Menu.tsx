import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { bodyOutline, bodySharp, cloudyNightOutline, cloudyNightSharp, flowerOutline, flowerSharp, globeOutline, globeSharp, hammerOutline, hammerSharp, heartOutline, heartSharp, schoolOutline, schoolSharp} from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Herramientas',
    url: '/folder/Herramientas',
    iosIcon: hammerOutline,
    mdIcon: hammerSharp
  },
  {
    title: 'Genero',
    url: '/page/Genero',
    iosIcon: bodyOutline,
    mdIcon: bodySharp
  },
  {
    title: 'Determinar edad',
    url: '/page/Determinar_edad',
    iosIcon: heartOutline,
    mdIcon: heartSharp
  },
  {
    title: 'Universidades',
    url: '/page/Universidades',
    iosIcon: schoolOutline,
    mdIcon: schoolSharp
  },
  {
    title: 'Clima en RD',
    url: '/page/Clima',
    iosIcon: cloudyNightOutline,
    mdIcon: cloudyNightSharp
  },
  {
    title: 'Acerca de Mi',
    url: '/page/Acerca_de',
    iosIcon: flowerOutline,
    mdIcon: flowerSharp
  }
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Christal Peña P.</IonListHeader>
          <IonNote>christalperez0@gmail.com</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
