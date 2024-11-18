import { StrictMode } from 'react'
import * as React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Rotas from './routes/route';
import global_pt from './translations/br/global.json'
import global_en from './translations/en/global.json'
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import './styles/app.css'

i18next.init({
  interpolation: { escapeValue: false },
  lng: "br",
  resources: {
   br: {
      global: global_pt,
    },
    en: {
      global: global_en,
    },
  },
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <I18nextProvider i18n={i18next}>
      <RouterProvider router={Rotas} />
    </I18nextProvider>
  </StrictMode>,
)
