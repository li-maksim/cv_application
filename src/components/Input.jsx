function Input({inputID, inputName, inputType = 'text', }) {

    return (
        <div className="input_block">
            <label htmlFor={inputID}>{inputName}</label>
            <input className="input" id={inputID} name={inputID} type={inputType}></input>    
        </div>
    )
}

export default Input