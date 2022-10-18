import { IonPage, IonTabBar, IonTabButton, IonIcon } from "@ionic/react";
import { Route, Redirect } from "react-router";
import { home, albums, person } from "ionicons/icons";
import { useRecoilValue } from "recoil";
import { userAtom } from "modules";
import { RenderIf } from "components/Base";

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
              {user.role === "3" && (
                <IonTabButton tab="tab1" href="/home" className="bg-white">
                  <IonIcon icon={home} className="h-[26px]" />
                </IonTabButton>
              )}
              {user.role === "2" && (
                <IonTabButton
                  tab="tab1"
                  href="/tenanthome"
                  className="bg-white"
                >
                  <IonIcon icon={home} className="h-[26px]" />
                </IonTabButton>
              )}
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
