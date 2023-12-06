function Input({type, name, value, onChange}) {
    return (
        <>
            {type === "text" &&
                <>
                    <label htmlFor={name}>{name}</label>
                    <input type={type} name={name} id={name} onChange={onChange}/>
                </>
            }
            {type === "number" && (
                <>
                    <label htmlFor={name}>{name}</label>
                    <input type={type} name={name} id={name} value={value} onChange={onChange}/>
                </>
            )}
            {type === "select" && (
                <>
                    <label htmlFor={name}>{name}</label>
                    <select name={name} id={name} onChange={onChange} >
                        <option value="wekelijks" >Iedere week</option>
                        <option value="2-wekelijks">Om de week</option>
                        <option value="maandelijks">Iedere maand</option>
                    </select>
                </>
            )}
            {type === "radio" && (
                <>
                    <label htmlFor={name+"1"}>{"Overdag"}</label>
                    <input type={type} id={name+"1"} name={name} checked={value === "overdag"} value="overdag" onChange={onChange}/>
                    <label htmlFor={name+"2"}>{"s'Avonds"}</label>
                    <input type={type} id={name+"2"} name={name} value="avond" checked={value === "avond"} onChange={onChange}/>
                </>
            )}
            {type === "textarea" && (
                <>
                    <label htmlFor={name}>{name}</label>
                    <textarea id={name} name={name} rows="5" cols="33" onChange={onChange}>
                    </textarea>
                </>
            )}
            {type === "checkbox" && (
                <>
                    <label htmlFor={name}>{"Ik ga akkoord met de voorwaarden"}</label>
                    <input type={type} id={name} name={name} onChange={onChange}/>
                </>
            )}
            {type === "button" && (
                <>
                    <input type="submit" id={"Verzend"} name={name} value={value} onChange={onChange}/>
                </>
            )}
        </>
    );
}

export default Input;