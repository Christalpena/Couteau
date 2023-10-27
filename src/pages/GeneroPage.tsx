import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Page.css';
import GenderPrediction from '../components/Genero';

const GeneroPage: React.FC = () => {


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Genero</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Genero</IonTitle>
          </IonToolbar>
        </IonHeader>
        <GenderPrediction name={'Genero'}/>
      </IonContent>
    </IonPage>
  );
};

export default GeneroPage;