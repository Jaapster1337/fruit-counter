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
            <button type={"button"}
                    onClick={() => setAardbeienCount(aardbeienCount - aardbeienCount) ||
                        setBananenCount(bananenCount - bananenCount) ||
                        setAppelCount(appelCount - appelCount) ||
                        setKiwiCount(kiwiCount - kiwiCount)}>Reset
            </button>

            <form className={"form"}>
                <fieldset>
                    <div className="inputs">
                        <Input
                            name="voornaam"
                            type="text"
                        />

                        <Input
                            name="achternaam"
                            type="text"
                        />
                        <Input
                            name="postcode"
                            type="text"
                        />
                        <Input
                            name="Bezorgfrequentie"
                            type="select"
                        />
                        <div className="radio">
                            <Input
                                name="deliverytime"
                                type="radio"
                            />
                        </div>
                        <Input
                            name="opmerking"
                            type="textarea"
                        />
                        <Input
                            name="Voor"
                            type="checkbox"
                        />
                        <Input
                            name="verzenden"
                            type="button"
                        />

                    </div>
                </fieldset>
            </form>
        </>
    )
}

export default App
