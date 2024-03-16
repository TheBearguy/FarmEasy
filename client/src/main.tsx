import React from "react";
import ReactDOM from "react-dom/client";
import { Theme } from '@radix-ui/themes'
import "@radix-ui/themes/styles.css";

import App from "./App.tsx";
import "@/styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Theme>
            <App />
        </Theme>
    </React.StrictMode>,
);
