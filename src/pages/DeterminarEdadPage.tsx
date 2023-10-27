import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Page.css';
import Edad from '../components/Edad';

const EdadPage: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Determinar Edad</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Determinar Edad</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Edad name={'Determinar Edad'}/>
      </IonContent>
    </IonPage>
  );
};

export default EdadPage;