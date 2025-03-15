import { useState } from 'react'
import Input from './Input.jsx'
import Icon from '@mdi/react';
import { mdiTriangleDown } from '@mdi/js';
import '../styles/EditBlock.css'

function EditBlock({blockName, arr, children, componentClass = "inputs hidden"}) {

    const [isHidden, setIsHidden] = useState(componentClass)

    const inputs = arr.map((item) => {
        return (
        <Input key={item.id} inputID={item.id} inputName={item.name} inputType={item.type} val={item.value}></Input>)
    })

    const handleHeaderClick = function() {
        if (isHidden === "inputs hidden" || isHidden === "inputs closed") {
            setIsHidden("inputs opened")
            setIsUp("")
        } else {
            setIsHidden("inputs closed")
        }
    }

    return (
        <div className="edit_block">
            <div className="header_wrapper" onClick={() => handleHeaderClick()}>
                <h2 className="header">{blockName}</h2>
                <Icon path={mdiTriangleDown} size={0.6} className="icon" />
            </div>
            <div className={isHidden}>
                {inputs}
                {children}
            </div>
        </div>
    )
}

export default EditBlock