import { useState } from 'react'
import Input from './Input.jsx'
import '../styles/EditBlock.css'

function EditBlock({blockName, arr, children}) {

    const [isHidden, setIsHidden] = useState("inputs hidden")

    const inputs = arr.map((item) => {
        return <Input inputID={item.id} inputName={item.name} inputType={item.type}></Input>
    })

    const handleHeaderClick = function() {
        if (isHidden === "inputs hidden" || isHidden === "inputs closed") {
            setIsHidden("inputs opened")
        } else {
            setIsHidden("inputs closed")
        }
    }

    return (
        <div className="edit_block">
            <div className="header_wrapper" onClick={() => handleHeaderClick()}>
                <h2 className="header">{blockName}</h2>
            </div>
            <div className={isHidden}>
                {inputs}
                {children}
            </div>
        </div>
    )
}

export default EditBlock