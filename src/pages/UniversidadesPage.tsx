import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Page.css';
import Universidades from '../components/Universidades';

const UniversidadesPage: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Universidades</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Universidades</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Universidades name={'Universidades'}/>
      </IonContent>
    </IonPage>
  );
};

export default UniversidadesPage;