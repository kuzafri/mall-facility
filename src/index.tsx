import React from "react";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";
import { defineCustomElements } from "@ionic/pwa-elements/loader";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";

import "./global.css";
import "./index.css";

/* 3rd Party Styling */
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/pagination";
import "focus-visible/dist/focus-visible";

defineCustomElements(window);

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <ToastContainer
      closeButton={false}
      theme="colored"
      hideProgressBar={false}
      autoClose={3000}
      position="top-center"
      draggableDirection="y"
      toastClassName={
        "relative flex p-1 mx-4 top-5 min-h-10 rounded-xl justify-between overflow-hidden"
      }
    />
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
