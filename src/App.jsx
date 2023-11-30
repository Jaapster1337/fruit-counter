import './App.css'
import Card from "./components/Card.jsx";
import {useState} from "react";
import Input from "./components/Input.jsx";


function App() {

    const [aardbeienCount, setAardbeienCount] = useState(0);
    const [bananenCount, setBananenCount] = useState(0);
    const [appelCount, setAppelCount] = useState(0);
    const [kiwiCount, setKiwiCount] = useState(0);

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <Card
                emoji={"🍓"}
                name="Aardbeien"
                count={aardbeienCount}
                setCount={setAardbeienCount}
            />
            <Card
                emoji={"🍌"}
                name="Bananen"
                count={bananenCount}
                setCount={setBananenCount}
            />
            <Card
                emoji={"🍏"}
                name="Appels"
                count={appelCount}
                setCount={setAppelCount}
            />
            <Card
                emoji={"🥝"}
                name="Kiwi's"
                count={kiwiCount}
                setCount={setKiwiCount}
            />
            <Input
                name="voornaam"
                type="text"
            />
            <button type={"button"}
                    onClick={() => setAardbeienCount(aardbeienCount - aardbeienCount) ||
                        setBananenCount(bananenCount - bananenCount) ||
                        setAppelCount(appelCount - appelCount) ||
                        setKiwiCount(kiwiCount - kiwiCount)}>Reset
            </button>

            <form className={"form"}>
                <fieldset>


                        <label htmlFor="achternaam">Achternaam</label>
                        <input type="text" name="achternaam" id="achternaam"/>

                        <label htmlFor="leeftijd">Leeftijd</label>
                        <input type="number" name="leeftijd" id="leeftijd" defaultValue="0"/>

                        <label htmlFor="postcode">Postcode</label>
                        <input type="text" name="postcode" id="postcode"/>

                        <label htmlFor="select">Bezorgfrequentie</label>
                        <select name="select" id="select">
                            <option value="wekelijks">Iedere week</option>
                            <option value="2-wekelijks">Om de week</option>
                            <option value="maandelijks">Iedere maand</option>
                        </select>

                        <div className="radio">
                            <label htmlFor="overdag">Overdag</label>
                            <input type="radio" id="overdag" name="overdag" value="overdag"/>
                            <label htmlFor="savonds">In de avond</label>
                            <input type="radio" id="savonds" name="savonds" value="in de avond"/>
                        </div>
                </fieldset>
            </form>
        </>
    )
}

export default App
