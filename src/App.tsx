import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

/* Routes */
import PublicRoute from "routes/PublicRoute";
import SingleRoute from "routes/SingleRoute";
import PrivateRoute from "routes/PrivateRoute";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import "react-toastify/dist/ReactToastify.css";

import "./i18n/config";

/* Pages */
import Home from "./pages/Home";
import Landing from "pages/Landing";
import Login from "pages/auth/Login";
import Registration from "pages/auth/Register";

setupIonicReact({
  swipeBackEnabled: false,
});

const queryClient = new QueryClient();

const App: React.FC = () => (
  <IonApp>
    <QueryClientProvider client={queryClient}>
      <IonReactRouter>
        <IonRouterOutlet>
          {/* Public Route ---------------------------------------------*/}
          <PublicRoute exact path="/landing" component={Landing} />
          <PublicRoute exact path="/login" component={Login} />
          <PublicRoute exact path="/register" component={Registration} />

          {/* Private Route ---------------------------------------------*/}
          <PrivateRoute exact path="/home" component={Home} />

          {/* Single Route ----------------------------------------------*/}
          <SingleRoute exact path="/notification" component={Notification} />

          {/* ... */}

          <Route exact path="/">
            <Redirect to="/landing" />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
      {/* <ReactQueryDevtools initialIsOpen={false} position="bottom-right" /> */}
    </QueryClientProvider>
  </IonApp>
);

export default App;
