import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";

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
import Home from "pages/Home";
import Landing from "pages/Landing";
import Login from "pages/auth/Login";
import Registration from "pages/auth/Register";
import News from "pages/News";
import Profile from "pages/Profile";
import ComplainList from "pages/ComplaintList";
import ComplainDetails from "pages/ComplaintDetails";
import MallComplaintPage from "pages/MallComplaintPage";
import ShopComplaintPage from "pages/ShopComplaintPage";

import TenantNews from "pages/tenant/TenantNews";
import TenantHome from "pages/tenant/TenantHome";
import TenantProfile from "pages/tenant/TenantProfile";
import TenantComplaintList from "pages/tenant/TenantComplaintList";
import TenantMallComplaintPage from "pages/tenant/TenantMallComplaintPage";

setupIonicReact({
  swipeBackEnabled: false,
});

const queryClient = new QueryClient();

const App: React.FC = () => (
  <IonApp>
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <IonReactRouter>
          <IonRouterOutlet>
            {/* Public Route ---------------------------------------------*/}
            <PublicRoute exact path="/landing" component={Landing} />
            <PublicRoute exact path="/login" component={Login} />
            <PublicRoute exact path="/register" component={Registration} />

            {/* Private Route ---------------------------------------------*/}
            <PrivateRoute exact path="/home" component={Home} />
            <PrivateRoute exact path="/news" component={News} />
            <PrivateRoute exact path="/profile" component={Profile} />

            <PrivateRoute exact path="/hometenant" component={TenantHome} />
            <PrivateRoute exact path="/newstenant" component={TenantNews} />
            <PrivateRoute
              exact
              path="/profiletenant"
              component={TenantProfile}
            />

            {/* Single Route ----------------------------------------------*/}
            <SingleRoute exact path="/notification" component={Notification} />
            <SingleRoute exact path="/complainlist" component={ComplainList} />
            <SingleRoute
              exact
              path="/complaindetails"
              component={ComplainDetails}
            />
            <SingleRoute
              exact
              path="/mallcomplaintpage"
              component={MallComplaintPage}
            />
            <SingleRoute
              exact
              path="/shopcomplaintpage"
              component={ShopComplaintPage}
            />
            <SingleRoute
              exact
              path="/tenantmallcomplaintpage"
              component={TenantMallComplaintPage}
            />
            <SingleRoute
              exact
              path="/TenantComplaintList"
              component={TenantComplaintList}
            />
            {/* ... */}
            {/* Single Route ----------------------------------------------*/}
            <SingleRoute exact path="/notification" component={Notification} />
            <SingleRoute exact path="/complainlist" component={ComplainList} />
            <SingleRoute
              exact
              path="/complaindetails"
              component={ComplainDetails}
            />
            <SingleRoute
              exact
              path="/mallcomplaintpage"
              component={MallComplaintPage}
            />
            <SingleRoute
              exact
              path="/shopcomplaintpage"
              component={ShopComplaintPage}
            />
            {/* ... */}

            <Route exact path="/">
              <Redirect to="/landing" />
            </Route>
          </IonRouterOutlet>
        </IonReactRouter>
      </RecoilRoot>
      {/* <ReactQueryDevtools initialIsOpen={false} position="bottom-right" /> */}
    </QueryClientProvider>
  </IonApp>
);

export default App;
