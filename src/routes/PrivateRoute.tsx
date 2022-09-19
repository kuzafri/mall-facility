import {
  IonPage,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from "@ionic/react";
import { Route, Redirect } from "react-router";
import { home, albums, person } from "ionicons/icons";

const PrivateRoute: React.FC<any> = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <IonPage>
          <Component {...props} />
          <IonTabBar slot="bottom" className="custom-tab-bar">
            <IonTabButton tab="tab1" href="/home">
              <IonIcon icon={home} className="h-[22px]" />
              <IonLabel >Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab2" href="/orders">
              <IonIcon icon={albums} className="h-[22px]" />
              <IonLabel >Orders</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab3" href="/profile">
              <IonIcon icon={person} className="h-[22px]" />
              <IonLabel >Profile</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonPage>
      )}
    />
  );
};

export default PrivateRoute;
