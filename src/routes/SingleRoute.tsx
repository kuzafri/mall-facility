import { IonPage } from "@ionic/react";
import { Route, Redirect } from "react-router";

const SingleRoute: React.FC<any> = ({ component: Component, ...rest }) => {
 return (
  <Route
   {...rest}
   render={(props) => (
    <IonPage>
     <Component {...props} />
    </IonPage>
   )}
  />
 );
};

export default SingleRoute;
