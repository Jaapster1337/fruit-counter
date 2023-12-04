function Input({type, name, value}) {
    return (
        <>
            {console.log(type, name)}
            {type === "text" &&
                <>
                    <label htmlFor={name}>{name}</label>
                    <input type={type} name={name} id={name}/>
                </>
            }
            {type === "number" && (
                <>
                    <label htmlFor={name}>{name}</label>
                    <input type={type} name={name} id={name} defaultValue="0"/>
                </>
            )}
            {type === "select" && (
                <>
                    <label htmlFor={name}>{name}</label>
                    <select name={name} id={name}>
                        <option value="wekelijks">Iedere week</option>
                        <option value="2-wekelijks">Om de week</option>
                        <option value="maandelijks">Iedere maand</option>
                    </select>
                </>
            )}
            {type === "radio" && (
                <>
                    <label htmlFor={name}>{"Overdag"}</label>
                    <input type={type} id={name} name={name} value={value}/>
                    <label htmlFor={name}>{"s'Avonds"}</label>
                    <input type={type} id={name} name={name} value={value}/>
                </>
            )}
            {type === "textarea" && (
                <>
                    <label htmlFor={name}>{name}</label>
                    <textarea id={name} name={name} rows="5" cols="33">
                    </textarea>
                </>
            )}
            {type === "checkbox" && (
                <>
                    <label htmlFor={name}>{"Ik ga akkoord met de voorwaarden"}</label>
                    <input type={type} id={name} name={name}/>
                </>
            )}
            {type === "button" && (
                <>
                    <input type="submit" id={"Verzend"} name={name} value={value} />
                </>
            )}
        </>
    );
}

export default Input;