import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App.tsx";
import store from "./store/store.js";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Provider store={store}></Provider>
        <App />
    </StrictMode>
);
