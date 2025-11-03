import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import czerwony from './assets/konfigurator/czerwony.png'
import granatowy from './assets/konfigurator/granatowy.png'
import szary from './assets/konfigurator/szary.png'
import zielony from './assets/konfigurator/zielony.png'
import zolty from './assets/konfigurator/zolty.png'
var wycena = "Cena bazowa: 75000 PLN ";

function App() {
    const [kolor, setKolor] = useState(szary);
    const [felgi, setFelgi] = useState("stalowe");
    const [czujnikP, setCzujnikP] = useState(false);
    const [klima, setKlima] = useState(false);
    const [nawigacja, setNawigacja] = useState(false);
    function suma() {
        var CENA_BAZOWA = 75000;
        var CENA_LAKIER = 9000;
        var CENA_FELGI = 7000;
        var CENA_CZUJNIKI = 6500;
        var CENA_CLIMATRONIC = 8500;
        var CENA_NAWIGACJA = 5000;
        var suma = 75000;
        wycena = "Cena bazowa: 75000 PLN "; //jak zrobiæ now¹ liniê?
        if (kolor != szary) {
            suma += CENA_LAKIER;
            wycena += "lakier 9000 PLN ";
        }
        if (felgi != "stalowe") {
            suma += CENA_FELGI;
            wycena += "felgi aluminiowe 7000 PLN ";
        }
        if (czujnikP) {
            suma += CENA_CZUJNIKI;
            wycena += "czujniki parkowania 6500 PLN ";
        }
        if (klima) {
            suma += CENA_CLIMATRONIC;
            wycena += "climatronic 8500 PLN ";
        }
        if (nawigacja) {
            suma += CENA_NAWIGACJA;
            wycena += "nawigacja 5000 PLN ";
        }
        return suma;
    }
    
  return (
    <>
          <img src={kolor} />
          <form>
          <h1>Konfigurator wyposa¿enia</h1>
          <p id="pole">Wybierz kolor lakieru</p>
          <select defaultValue={szary} onChange={e => setKolor(e.target.value)}>
              <option value={szary}>szary</option>
              <option value={czerwony}>czerwony</option>
              <option value={granatowy}>granatowy</option>
              <option value={zielony}>zielony</option>
              <option value={zolty}>¿ó³ty</option>
          </select>
          <hr />
              <p id="pole">Felgi</p>
              <div id="felgi">
                  <label><input type="radio" name="felgi" value="stalowe" defaultChecked onChange={() => setFelgi((felgi) => "stalowe")} />Stalowe</label>
                  <label><input type="radio" name="felgi" value="aluminiowe" onChange={() => setFelgi((felgi) => "aluminiowe")} />Aluminiowe</label>
              </div>
              <p id="pole">Wybierz dodatkowe wyposa¿enie</p>
              <label><input type="checkbox" value="" onChange={() => setCzujnikP((czujnikP) => !czujnikP)} />Czujnik Parkowania</label>
              <label><input type="checkbox" value="" onChange={() => setKlima((klima) => !klima)} />Climatronic</label>
              <label><input type="checkbox" value="" onChange={() => setNawigacja((nawigacja) => !nawigacja)} />Nawigacja</label>
          </form>
         <hr/>
          <p id="pole">Wycena</p>

          <p id="wycena">{wycena}
          
          RAZEM: {suma()} PLN</p>
    </>
  )
}

export default App
