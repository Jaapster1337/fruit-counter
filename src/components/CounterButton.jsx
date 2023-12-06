function CounterButton({symbol, count, setCount}){
    return(
      <div>
          {symbol === "+" && <button type={"button"} onClick={() => setCount( count + 1)}>{symbol}</button>}
          {symbol === "-" && <button disabled={count ===0} type={"button"} onClick={() => setCount( count - 1)}>{symbol}</button>}
      </div>
    );
}

export default CounterButton;