import { IonPage } from "@ionic/react";
import { Route, Redirect } from "react-router";
import { getLocalStorage } from "helpers";

const PublicRoute: React.FC<any> = ({ component: Component, ...rest }) => {
  console.log(Object.entries(getLocalStorage("user")).length > 0);
  return (
    <>
      {Object.entries(getLocalStorage("user")).length > 0 ? (
        <Redirect to="/home" />
      ) : (
        <Route
          {...rest}
          render={(props) => (
            <IonPage>
              <Component {...props} />
            </IonPage>
          )}
        />
      )}
    </>
  );
};

export default PublicRoute;
