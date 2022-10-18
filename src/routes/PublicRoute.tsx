import { IonPage } from "@ionic/react";
import { RenderIf } from "components/Base";
import { userAtom } from "modules";
import { Route, Redirect } from "react-router";
import { useRecoilValue } from "recoil";

const PublicRoute: React.FC<any> = ({ component: Component, ...rest }) => {
  const user = useRecoilValue(userAtom);
  return (
    <>
      {Object.keys(user).length > 0 ? (
        <>
          <RenderIf condition={user.role === "3"}>
            <Redirect to="/home" />
          </RenderIf>
          <RenderIf condition={user.role === "2"}>
            <Redirect to="/tenanthome" />
          </RenderIf>
        </>
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
