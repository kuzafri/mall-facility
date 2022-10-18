import { IonPage, IonTabBar, IonTabButton, IonIcon } from "@ionic/react";
import { Route, Redirect } from "react-router";
import { home, albums, person } from "ionicons/icons";
import { useRecoilValue } from "recoil";
import { userAtom } from "modules";

const PrivateRoute: React.FC<any> = ({ component: Component, ...rest }) => {
  const user = useRecoilValue(userAtom);

  return (
    <>
      <Route
        {...rest}
        render={(props) => (
          <IonPage>
            <Component {...props} />
            <IonTabBar slot="bottom" className=" custom-tab-bar">
              <IonTabButton tab="tab1" href="/home" className="bg-white">
                <IonIcon icon={home} className="h-[26px]" />
              </IonTabButton>
              <IonTabButton tab="tab2" href="/news" className="bg-white">
                <IonIcon icon={albums} className="h-[26px]" />
              </IonTabButton>
              <IonTabButton tab="tab3" href="/profile" className="bg-white">
                <IonIcon icon={person} className="h-[26px]" />
              </IonTabButton>
            </IonTabBar>
          </IonPage>
        )}
      />
    </>
  );
};

export default PrivateRoute;
