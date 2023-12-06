import CounterButton from "./CounterButton.jsx";

function Card({emoji, name, count, setCount}) {
    return (
        <div className={"fruit-card"}>
            <p>{emoji}{name}</p>
            <CounterButton
                symbol={"+"}
                count={count}
                setCount={setCount}/>
            <p>{count}</p>
            <CounterButton
                symbol={"-"}
                count={count}
                setCount={setCount}/>
        </div>
    );
}

export default Card;