import { IonPage } from "@ionic/react";
import { userAtom } from "modules";
import { Route, Redirect } from "react-router";
import { useRecoilValue } from "recoil";

const PublicRoute: React.FC<any> = ({ component: Component, ...rest }) => {
  const user = useRecoilValue(userAtom);
  return (
    <>
      <Route
        {...rest}
        render={(props) => (
          <IonPage>
            <Component {...props} />
          </IonPage>
        )}
      />
    </>
  );
};

export default PublicRoute;
