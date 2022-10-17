import {
  IonPage,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from "@ionic/react";
import { Route, Redirect } from "react-router";
import { home, albums, person } from "ionicons/icons";
import { useRecoilValue } from "recoil";
import { userAtom } from "modules";

const TenantRoute: React.FC<any> = ({ component: Component, ...rest }) => {
  const user = useRecoilValue(userAtom);

  return (
    <>
      {/* {Object.entries(user).length > 0 ? ( */}
      <Route
        {...rest}
        render={(props) => (
          <IonPage>
            <Component {...props} />
            <IonTabBar slot="bottom" className=" custom-tab-bar">
              <IonTabButton tab="tab1" href="/tenanthome" className="bg-white">
                <IonIcon icon={home} className="h-[26px]" />
              </IonTabButton>
              <IonTabButton tab="tab2" href="/tenantnews" className="bg-white">
                <IonIcon icon={albums} className="h-[26px]" />
              </IonTabButton>
              <IonTabButton
                tab="tab3"
                href="/tenantprofile"
                className="bg-white"
              >
                <IonIcon icon={person} className="h-[26px]" />
              </IonTabButton>
            </IonTabBar>
          </IonPage>
        )}
      />
      {/* ) : (
         <Redirect to="/login" />
      )} */}
    </>
  );
};

export default TenantRoute;
