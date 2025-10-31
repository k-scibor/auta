import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import czerwony from './assets/konfigurator/czerwony.png'
import granatowy from './assets/konfigurator/granatowy.png'
import szary from './assets/konfigurator/szary.png'
import zielony from './assets/konfigurator/zielony.png'
import zolty from './assets/konfigurator/zolty.png'

function zmienKolor() {
    
}
function App() {
    const [kolor, setKolor] = useState(szary);
    const [czujnikP, setCzujnikP] = useState(false);
    const [klima, setKlima] = useState(false);
    const [nawigacja, setNawigacja] = useState(false);
  return (
    <>
          <img src={kolor} />
          <form>
          <h1>Konfigurator wyposa¿enia</h1>
          <p>Wybierz kolor lakieru</p>
          <select defaultValue={szary} onChange={e => setKolor(e.target.value)}>
              <option value={szary}>szary</option>
              <option value={czerwony}>czerwony</option>
              <option value={granatowy}>granatowy</option>
              <option value={zielony}>zielony</option>
              <option value={zolty}>¿ó³ty</option>
          </select>
          <hr />
          <p>Felgi</p>
            
              <label><input type="radio" name="felgi" value="stalowe" defaultChecked />Stalowe</label>
              <label><input type="radio" name="felgi" value="aluminiowe" />Aluminiowe</label>
              <p>Wybierz dodatkowe wyposa¿enie</p>
              <label><input type="checkbox" value="" onChange={() => setCzujnikP((czujnikP) => !czujnikP)} />Czujnik Parkowania</label>
              <label><input type="checkbox" value="" onChange={() => setKlima((klima) => !klima)} />Climatronic</label>
              <label><input type="checkbox" value="" onChange={() => setNawigacja((nawigacja) => !nawigacja)} />Nawigacja</label>
          </form>
         <hr/>
          <p>Wycena</p>
         <p></p>
    </>
  )
}

export default App
