import './App.css'
import Card from "./components/Card.jsx";
import {useState} from "react";
import Input from "./components/Input.jsx";


function App() {

    const [aardbeienCount, setAardbeienCount] = useState(0);
    const [bananenCount, setBananenCount] = useState(0);
    const [appelCount, setAppelCount] = useState(0);
    const [kiwiCount, setKiwiCount] = useState(0);
    const [formState, setFormState] = useState({
        voornaam: "",
        achternaam: "",
        postcode: "",
        bezorgfrequentie: "",
        deliverytime: "",
        opmerking: "",
        voorwaarden:"",

    })

    function handleChange(e){
        const changedFieldName = e.target.name;
        const newValue = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setFormState({
            ...formState,
            [changedFieldName]: newValue,
        });
    }

    function submitForm(e) {
        e.preventDefault()
        console.log(formState, aardbeienCount, bananenCount, appelCount, kiwiCount)
    }

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

            <form className={"form"} onSubmit={submitForm}>
                <fieldset>
                    <div className="inputs">
                        <Input
                            name="voornaam"
                            type="text"
                            value={formState.voornaam}
                            onChange={handleChange}
                        />

                        <Input
                            name="achternaam"
                            type="text"
                            value={formState.achternaam}
                            onChange={handleChange}
                        />
                        <Input
                            name="postcode"
                            type="text"
                            value={formState.postcode}
                            onChange={handleChange}
                        />
                        <Input
                            name="Bezorgfrequentie"
                            type="select"
                            value={formState.bezorgfrequentie}
                            onChange={handleChange}
                        />
                        <div className="radio">
                            <Input
                                name="deliverytime"
                                type="radio"
                                onChange={handleChange}
                            />
                        </div>
                        <Input
                            name="opmerking"
                            type="textarea"
                            value={formState.opmerking}
                            onChange={handleChange}
                        />
                        <Input
                            name="voorwaarden"
                            type="checkbox"
                            onChange={handleChange}
                        />
                        <Input
                            name="verzenden"
                            type="button"
                            onChange={handleChange}
                        />

                    </div>
                </fieldset>
            </form>
        </>
    )
}

export default App
