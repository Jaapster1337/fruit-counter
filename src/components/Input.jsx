function Input(label, htmlFor, type, name, id, value) {
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
                    <input type={type} name={name} id={id} defaultValue="0"/>
                </>
            )}
            {type === "select" && (
                <>
                    <label htmlFor={htmlFor}>{name}</label>
                    <select name={name} id={id}>
                        <option value="wekelijks">Iedere week</option>
                        <option value="2-wekelijks">Om de week</option>
                        <option value="maandelijks">Iedere maand</option>
                    </select>
                </>
            )}
            {type === "radio" && (
                <>
                    <label htmlFor={htmlFor}>{name}</label>
                    <input type={type} id={id} name={name} value={value}/>
                </>
            )}
        </>
    );
}

export default Input;