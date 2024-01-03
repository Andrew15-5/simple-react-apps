import React from "react"
import { createRoot } from "react-dom/client"
import { HelmetProvider } from "react-helmet-async"

import App from "./components/app"
import Head from "./components/head"

const root = createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Head title="Eminem" />
      <App />
    </HelmetProvider>
  </React.StrictMode>
)
