function Input(props) {

    return (
        <>
            <label htmlFor={props.inputID}>{props.inputName}</label>
            <input className="input" id={props.inputID}></input>    
        </>
    )
}

export default Input