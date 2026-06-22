import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.tsx'
import Pretournament_page from './app/pretournament/page.tsx'

const apiAdress = "http://localhost:8080/"

fetch(apiAdress).then(response => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.log(error));

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Pretournament_page />
  </StrictMode>,
)
