import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Page.css';
import AcercaDe from '../components/AcercaDe';

const AcercaDePage: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Acerca de Mi</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Acerca de Mi</IonTitle>
          </IonToolbar>
        </IonHeader>
        <AcercaDe name={'Acerca de Mi'}/>
      </IonContent>
    </IonPage>
  );
};

export default AcercaDePage;