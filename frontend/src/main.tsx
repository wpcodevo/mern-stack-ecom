import "react-toastify/dist/ReactToastify.css";
// import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import { ToastContainer } from "react-toastify";
import FullScreenProgress from "./components/FullScreenProgress";
import UserMiddleware from "./Helpers/userMiddleware";
import { getTotals } from "./redux/features/cartSlice";
import { CssBaseline } from "@mui/material";

store.dispatch(getTotals());

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <PersistGate loading={<FullScreenProgress />} persistor={persistor}>
          <CookiesProvider>
            <UserMiddleware>
              <App />
            </UserMiddleware>
            <CssBaseline />
            <ToastContainer />
          </CookiesProvider>
        </PersistGate>
      </Provider>
    </Router>
  </React.StrictMode>
);
